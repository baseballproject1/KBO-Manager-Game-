// ============================
// system/match.js
// 경기 시스템
// ============================



let leagueStage = 1;





// 경기 시작

function playMatch(){


    if(!gameData.team){


        alert(
            "팀을 먼저 선택하세요."
        );

        return;

    }




    let winRate = 50;



    // 선수 능력치 반영

    let power = 0;



    gameData.players.forEach(

        player=>{


            power += player.stat;


            power += player.enhance * 2;


        }

    );



    if(power > 1200)

        winRate += 20;


    if(power > 1500)

        winRate += 10;






    let random =

    Math.random()*100;




    if(random < winRate){


        matchWin();


    }

    else{


        matchLose();


    }



}








// 승리

function matchWin(){



    let moneyReward =

    leagueStage *
    100000000;



    gameData.money += moneyReward;



    gameData.inventory.normalGachaTicket +=10;



    alert(

        "⚾ 경기 승리!\n\n"

        +

        "보상\n"

        +

        formatMoney(moneyReward)

        +

        "\n일반 뽑기권 10개"

    );




    if(leagueStage < 50)

        leagueStage++;





    saveGame();

    updateUI();


}








// 패배

function matchLose(){


    let moneyReward =

    leagueStage *
    50000000;



    gameData.money += moneyReward;



    gameData.inventory.normalGachaTicket +=5;




    alert(

        "⚾ 경기 패배\n\n"

        +

        "보상\n"

        +

        formatMoney(moneyReward)

        +

        "\n일반 뽑기권 5개"

    );



    saveGame();

    updateUI();


}
