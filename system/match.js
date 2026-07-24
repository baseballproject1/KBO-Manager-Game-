// ============================
// system/match.js
// 직접 플레이 경기 시스템
// ============================


let matchData = {

    inning:1,

    half:"초",

    playerScore:0,

    enemyScore:0,

    outs:0,

    strikes:0,

    balls:0,

    active:false,

    team:""

};





// 경기 시작

function playMatch(){


    if(!gameData.team){

        alert("팀을 먼저 선택하세요.");

        return;

    }



    matchData = {

        inning:1,

        half:"초",

        playerScore:0,

        enemyScore:0,

        outs:0,

        strikes:0,

        balls:0,

        active:true,

        team:gameData.team

    };



    showMatch();



}







// 경기 화면

function showMatch(){


    let result =

`

⚾ ${matchData.inning}회 ${matchData.half}

${gameData.team}

점수 : ${matchData.playerScore}

상대

점수 : ${matchData.enemyScore}


아웃 : ${matchData.outs}

스트라이크 : ${matchData.strikes}

볼 : ${matchData.balls}



`;



    let choice =

    prompt(

        result

        +

        "\n\n선택"

        +

        "\n1. 타격"

        +

        "\n2. 기다리기"

    );



    if(choice==="1"){

        batting();

    }

    else{

        pitchingResult();

    }



}








// 타격

function batting(){



    let hit =

    Math.random()*100;



    if(hit < 5){


        matchData.playerScore++;


        alert(

            "💥 홈런!\n1득점"

        );


    }


    else if(hit < 35){


        alert(

            "⚾ 안타!"

        );


    }


    else if(hit < 60){


        alert(

            "볼넷"

        );


    }


    else{


        matchData.outs++;


        alert(

            "삼진 아웃!"

        );


    }




    nextPlay();


}







// 기다리기/투구 결과

function pitchingResult(){



    let result =

    Math.random()*100;



    if(result < 50){


        matchData.strikes++;


        alert(

            "스트라이크!"

        );


    }

    else{


        matchData.balls++;


        alert(

            "볼!"

        );


    }





    if(matchData.strikes>=3){


        matchData.outs++;

        matchData.strikes=0;

        alert("삼진!");

    }



    if(matchData.balls>=4){


        matchData.balls=0;

        alert("볼넷!");

    }



    nextPlay();


}







// 다음 진행

function nextPlay(){



    if(matchData.outs>=3){



        matchData.outs=0;


        changeInning();



        return;


    }



    showMatch();


}








// 이닝 변경

function changeInning(){



    matchData.strikes=0;

    matchData.balls=0;



    if(matchData.half==="초"){


        matchData.half="말";


    }

    else{


        matchData.half="초";


        matchData.inning++;

    }




    if(matchData.inning>9){


        endMatch();


        return;

    }



    showMatch();



}








// 경기 종료

function endMatch(){



    let win =

    matchData.playerScore >

    matchData.enemyScore;



    if(win){



        gameData.money +=

        leagueStage * 100000000;



        gameData.inventory.normalGachaTicket +=10;



        alert(

            "⚾ 경기 승리!\n\n"

            +

            "💰 "

            +

            formatMoney(
                leagueStage * 100000000
            )

            +

            "\n🎫 일반 뽑기권 10개"

        );


    }

    else{


        gameData.money +=

        leagueStage * 50000000;



        gameData.inventory.normalGachaTicket +=5;



        alert(

            "⚾ 경기 패배\n\n"

            +

            "💰 "

            +

            formatMoney(
                leagueStage * 50000000
            )

            +

            "\n🎫 일반 뽑기권 5개"

        );


    }



    saveGame();

    updateUI();


}
