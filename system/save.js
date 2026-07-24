// ============================
// system/save.js
// 저장 시스템
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


    let data =
    localStorage.getItem(
        SAVE_KEY
    );


    if(data){


        gameData =
        JSON.parse(data);


    }


}





// 데이터 초기화

function resetGame(){


    localStorage.removeItem(
        SAVE_KEY
    );


    location.reload();

}
