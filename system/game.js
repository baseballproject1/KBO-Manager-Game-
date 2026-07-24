// ==========================================
// KBO Baseball Game
// game.js
// 경기 진행 시스템
// ==========================================



// 현재 경기 데이터

let matchData = {

    home:"",
    away:"",

    inning:1,

    score:{
        home:0,
        away:0
    },

    outs:0,

    mode:"",

    finished:false

};





// ==========================================
// 경기 시작
// ==========================================


function startGame(opponent){


    matchData.home = gameData.team;

    matchData.away = opponent;


    matchData.inning = 1;

    matchData.score.home = 0;

    matchData.score.away = 0;

    matchData.outs = 0;

    matchData.finished = false;



    selectGameMode();


}





// ==========================================
// 경기 방식 선택
// ==========================================


function selectGameMode(){


    let choice = confirm(
        "수동 플레이를 하시겠습니까?\n\n확인 = 수동 플레이\n취소 = 자동 플레이"
    );



    if(choice){


        matchData.mode="manual";

        startManualGame();


    }

    else{


        matchData.mode="auto";

        startAutoGame();


    }


}





// ==========================================
// 수동 경기 시작
// ==========================================


function startManualGame(){


    alert(
    "수동 경기를 시작합니다!"
    );


    showBattingMenu();


}





// ==========================================
// 타격 선택
// ==========================================


function showBattingMenu(){



    if(matchData.finished)
        return;



    let choice = prompt(

`⚾ 타격 선택

1. 강타
2. 정확한 타격
3. 번트`

    );



    batting(choice);


}





// ==========================================
// 타격 결과
// ==========================================


function batting(type){



    let chance =
    Math.random()*100;



    if(type==="1"){


        if(chance < 25){

            matchData.score.home++;

            alert("홈런!!");


        }

        else if(chance < 55){


            alert("안타!");


        }

        else{


            matchData.outs++;

            alert("아웃");


        }


    }



    else if(type==="2"){



        if(chance < 45){


            alert("안타!");


        }

        else{


            matchData.outs++;

            alert("아웃");


        }


    }



    else if(type==="3"){



        if(chance < 70){


            alert("번트 성공!");


        }

        else{


            matchData.outs++;

            alert("번트 실패");


        }


    }



    checkOut();


}





// ==========================================
// 아웃 처리
// ==========================================


function checkOut(){



    if(matchData.outs>=3){


        matchData.inning++;

        matchData.outs=0;


        alert(
        `${matchData.inning}회 시작`
        );


    }



    if(matchData.inning>9){


        finishGame();

        return;

    }



    showBattingMenu();


}





// ==========================================
// 자동 경기
// ==========================================


function startAutoGame(){



    alert(
    "자동 경기 진행 중..."
    );



    matchData.score.home =
    Math.floor(Math.random()*8);



    matchData.score.away =
    Math.floor(Math.random()*8);



    finishGame();



}





// ==========================================
// 경기 종료
// ==========================================


function finishGame(){



    matchData.finished=true;



    let win =

    matchData.score.home >
    matchData.score.away;



    if(win){


        gameData.record.win++;


        let reward =

        gameData.seasonStage *
        GAME_CONFIG.winRewardPerStage;



        addMoney(reward);



        alert(
        `승리!\n${reward}억 획득`
        );


    }

    else{


        gameData.record.lose++;


        let reward =

        gameData.seasonStage *
        GAME_CONFIG.loseRewardPerStage;



        addMoney(reward);



        alert(
        `패배\n${reward}억 획득`
        );


    }



    saveGame();

}
