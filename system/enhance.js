// ============================
// system/enhance.js
// 강화 시스템
// ============================



// 강화 확률

const enhanceRate = [

    90, //0 -> 1

    85, //1 -> 2

    70, //2 -> 3

    50, //3 -> 4

    45, //4 -> 5

    30, //5 -> 6

    25, //6 -> 7

    20, //7 -> 8

    15, //8 -> 9

    10  //9 -> 10

];





// 강화 메뉴

function enhanceMenu(){


    if(gameData.players.length === 0){

        alert("선수가 없습니다.");

        return;

    }


    let index =

    prompt(

        "강화할 선수 번호 입력\n\n"
        +
        gameData.players
        .map(
            (p,i)=>
            i+
            " : "
            +
            p.name
            +
            " +"
            +
            p.enhance
        )
        .join("\n")

    );



    if(index===null)
        return;



    enhancePlayer(
        Number(index)
    );

}






// 강화 실행

function enhancePlayer(index){



    let player =

    gameData.players[index];



    if(!player)
        return;



    if(player.enhance >= 10){

        alert("최대 강화입니다.");

        return;

    }



    let cost =

    (player.enhance + 1)
    *
    100000000;



    if(gameData.money < cost){


        alert("자금 부족");

        return;

    }



    gameData.money -= cost;



    let chance =

    enhanceRate[player.enhance];





    // 강화권 사용

    if(gameData.inventory.enhanceTicket > 0){


        let use =

        confirm(
            "강화권 사용?\n성공 확률 +10%"
        );



        if(use){

            gameData.inventory.enhanceTicket--;

            chance += 10;

        }


    }






    // 고급 강화권

    if(

        gameData.inventory.advancedEnhanceTicket > 0
        &&
        (
            player.grade==="시그니처"
            ||
            player.grade==="레전드"
        )

    ){


        let use =

        confirm(
            "고급 강화권 사용?\n100% 성공"
        );



        if(use){

            gameData.inventory.advancedEnhanceTicket--;

            chance=100;

        }


    }







    let random =

    Math.random()*100;




    if(random < chance){



        player.enhance++;



        alert(

            player.name
            +
            " 강화 성공!\n+"
            +
            player.enhance

        );



    }

    else{



        alert(

            player.name
            +
            " 강화 실패!"

        );



        // 하락 여부

        let down =

        Math.random()*100;



        if(down < 50){


            if(gameData.inventory.protectTicket > 0){


                let protect =

                confirm(
                    "하락 방지권 사용?"
                );



                if(protect){


                    gameData.inventory.protectTicket--;

                    alert(
                        "강화 하락 방지"
                    );


                    saveGame();

                    updateUI();

                    return;


                }


            }



            if(player.enhance > 0){


                player.enhance--;



                decreaseRandomStat(player);



                alert(

                    "강화 하락!\n능력치 1 감소"

                );


            }


        }


    }





    saveGame();

    updateUI();


}








// 랜덤 능력치 감소

function decreaseRandomStat(player){


    let decrease =

    Math.floor(
        Math.random()*5
    );



    player.stat -= 1;



    if(player.stat < 0)

        player.stat=0;


}
