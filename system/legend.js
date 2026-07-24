// ============================
// system/legend.js
// 레전드 제작 시스템
// ============================



// 레전드 제작 메뉴

function legendMenu(){


    if(!gameData.team){


        alert("팀을 먼저 선택하세요.");

        return;

    }



    let index =

    prompt(

        "레전드로 제작할 선수 번호\n\n"

        +

        gameData.players

        .map(

            (p,i)=>

            i
            +
            " : "
            +
            p.name
            +
            " ("
            +
            p.grade
            +
            ")"

        )

        .join("\n")

    );



    if(index === null)
        return;



    makeLegend(
        Number(index)
    );


}







// 레전드 제작

function makeLegend(index){


    let player =

    gameData.players[index];



    if(!player)
        return;





    // 해당 선수 시그니처 필요

    let signature =

    gameData.players.find(

        p =>

        p.name === player.name
        &&
        p.grade === "시그니처"

    );





    if(!signature){


        alert(

            "해당 선수의 시그니처 카드가 필요합니다."

        );


        return;

    }







    // 팀 골든글러브 체크

    let goldCount =

    gameData.players.filter(

        p =>

        p.team === gameData.team
        &&
        p.grade === "골든글러브"

    ).length;





    if(goldCount < 2){


        alert(

            "팀 골든글러브 2장이 필요합니다."

        );


        return;

    }







    // 팀 S 카드 체크

    let sCount =

    gameData.players.filter(

        p =>

        p.team === gameData.team
        &&
        p.grade === "S"

    ).length;





    if(sCount < 5){


        alert(

            "팀 S 카드 5장이 필요합니다."

        );


        return;

    }







    // 제작 비용

    if(gameData.money < 15000000000){


        alert(

            "제작 비용 150억이 필요합니다."

        );


        return;

    }







    gameData.money -=

    15000000000;







    player.grade =

    "레전드";



    player.stat += 20;



    player.trait =

    "레전드";





    alert(

        player.name
        +
        " 레전드 제작 완료!"

    );





    saveGame();

    updateUI();


}
