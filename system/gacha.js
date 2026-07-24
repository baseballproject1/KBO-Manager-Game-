// ==========================================
// KBO Baseball Game
// gacha.js
// 뽑기 시스템
// ==========================================



// ==========================================
// 랜덤 등급 선택
// ==========================================


function getRandomGrade(type){


    let table;



    if(type==="premium"){


        table = GACHA_RATE.premium;


    }

    else{


        table = GACHA_RATE.normal;


    }



    let random =
    Math.random()*100;



    let total = 0;



    for(let grade in table){


        total += table[grade];



        if(random <= total){


            return grade;


        }


    }



    return "일반";

}





// ==========================================
// 뽑기 실행
// ==========================================


function drawGacha(type){



    let grade =
    getRandomGrade(type);



    let candidates =
    allPlayers.filter(player =>



        player.team === gameData.team &&

        player.grade === grade



    );





    // 해당 등급 선수가 없을 경우

    if(candidates.length===0){


        candidates =
        allPlayers.filter(player =>

            player.team === gameData.team

        );


    }





    if(candidates.length===0){


        alert(
        "선수를 찾을 수 없습니다."
        );


        return null;


    }





    let player =

    candidates[

        Math.floor(
            Math.random()*candidates.length
        )

    ];





    addCard(player);



    return player;


}





// ==========================================
// 카드 추가
// ==========================================


function addCard(player){



    let card = {


        uid:Date.now(),


        name:player.name,


        team:player.team,


        grade:player.grade,


        position:player.position,



        stats:{


            ...player.stats


        },


        enhance:0


    };




    gameData.players.push(card);



    saveGame();


}





// ==========================================
// 일반 뽑기권 사용
// ==========================================


function useNormalGacha(){



    if(gameData.normalTicket<=0){


        alert(
        "일반 뽑기권이 없습니다."
        );


        return;


    }





    gameData.normalTicket--;





    let result =
    drawGacha("normal");





    if(result){


        alert(

        `${result.name} ${result.grade} 획득!`

        );


    }



    saveGame();


}





// ==========================================
// 고급 뽑기권 사용
// ==========================================


function usePremiumGacha(){



    if(gameData.premiumTicket<=0){


        alert(
        "고급 뽑기권이 없습니다."
        );


        return;


    }





    gameData.premiumTicket--;





    let result =
    drawGacha("premium");





    if(result){


        alert(

        `${result.name} ${result.grade} 획득!`

        );


    }



    saveGame();


}





// ==========================================
// 선수 판매
// ==========================================


function sellCard(index){



    let card =
    gameData.players[index];



    if(!card)
        return;




    let price = 1;



    if(card.grade==="A")
        price=2;


    if(card.grade==="S")
        price=5;


    if(card.grade==="골든글러브")
        price=10;


    if(card.grade==="시그니처")
        price=15;


    if(card.grade==="레전드")
        price=30;





    gameData.money += price;



    gameData.players.splice(
        index,
        1
    );



    saveGame();



    alert(
    `${price}억 획득`
    );


}
