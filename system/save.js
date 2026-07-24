// ============================
// system/save.js
// 저장 / 초기화 시스템
// ============================


const SAVE_KEY =
"BaseballCardGameSave";




// 저장

function saveGame(){


    localStorage.setItem(

        SAVE_KEY,

        JSON.stringify(gameData)

    );


}






// 불러오기

function loadGame(){


    let save =

    localStorage.getItem(
        SAVE_KEY
    );



    if(save){


        gameData =

        JSON.parse(save);


    }


}






// 저장 데이터 확인

function checkSave(){


    let save =

    localStorage.getItem(
        SAVE_KEY
    );



    if(save){


        alert(
            "💾 저장 데이터 있음"
        );


    }

    else{


        alert(
            "💾 저장 데이터 없음"
        );


    }


}






// 게임 초기화

function resetGame(){



    let check =

    confirm(

        "⚠️ 게임을 초기화하시겠습니까?\n\n"
        +
        "모든 선수, 자금, 아이템이 삭제됩니다."

    );



    if(!check)

        return;





    localStorage.removeItem(

        SAVE_KEY

    );



    alert(

        "게임이 초기화되었습니다."

    );



    location.reload();


}
