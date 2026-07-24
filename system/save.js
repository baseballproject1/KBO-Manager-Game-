// ==========================================
// KBO Baseball Game
// save.js
// 저장 / 불러오기 / 초기화 시스템
// ==========================================



// ==========================================
// 기본 게임 데이터
// ==========================================


let gameData = {


    // 선택 팀

    team:"",


    // 보유 선수

    players:[],


    // 자금 (억)

    money:GAME_CONFIG.startMoney,


    // 티켓

    normalTicket:GAME_CONFIG.startNormalTicket,

    premiumTicket:GAME_CONFIG.startPremiumTicket,



    // 아이템

    items:{


        enhanceTicket:0,

        protectTicket:0,

        premiumEnhanceTicket:0,

        traitChangeTicket:0


    },



    // 시즌 진행

    seasonStage:1,


    // 승패 기록

    record:{


        win:0,

        lose:0,

        draw:0


    },



    // 튜토리얼

    tutorialComplete:false,



    // FA 목록

    faPlayers:[],


    // 트레이드 기록

    tradeHistory:[]


};





// 저장 이름

const SAVE_KEY =
"KBO_BASEBALL_SAVE";





// ==========================================
// 저장
// ==========================================


function saveGame(){


    localStorage.setItem(

        SAVE_KEY,

        JSON.stringify(gameData)

    );


    console.log(
        "게임 저장 완료"
    );

}





// ==========================================
// 불러오기
// ==========================================


function loadGame(){


    const saveData =
    localStorage.getItem(SAVE_KEY);



    if(saveData){


        gameData =
        JSON.parse(saveData);


        console.log(
            "저장 데이터 불러오기 완료"
        );


    }

    else{


        console.log(
            "새 게임 시작"
        );


    }


}





// ==========================================
// 게임 초기화
// ==========================================


function resetGame(){


    let check =
    confirm(
    "모든 게임 데이터를 삭제할까요?"
    );


    if(!check)
        return;



    localStorage.removeItem(
        SAVE_KEY
    );



    location.reload();


}





// ==========================================
// 돈 추가
// ==========================================


function addMoney(amount){


    gameData.money += amount;


    saveGame();

}





// ==========================================
// 돈 사용
// ==========================================


function spendMoney(amount){


    if(gameData.money < amount){


        alert(
        "자금이 부족합니다."
        );


        return false;

    }



    gameData.money -= amount;


    saveGame();


    return true;

}





// ==========================================
// 티켓 추가
// ==========================================


function addTicket(type,count){



    if(type==="normal"){


        gameData.normalTicket += count;


    }


    if(type==="premium"){


        gameData.premiumTicket += count;


    }



    saveGame();


}





// ==========================================
// 시작 시 실행
// ==========================================


loadGame();
