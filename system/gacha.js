// ============================
// system/gacha.js
// 뽑기 시스템
// ============================



// 일반 뽑기

function normalGacha(){


    if(gameData.inventory.normalGachaTicket <= 0){

        alert("일반 뽑기권이 없습니다.");

        return;

    }



    gameData.inventory.normalGachaTicket--;



    let grade = randomGrade("normal");


    let player = getRandomPlayerByGrade(grade);



    if(player){


        gameData.players.push(
            JSON.parse(JSON.stringify(player))
        );


        alert(
            player.name
            +
            " 획득!\n등급 : "
            +
            player.grade
        );


    }



    saveGame();

    updateUI();


}






// 고급 뽑기

function highGacha(){


    if(gameData.inventory.highGachaTicket <= 0){

        alert("고급 뽑기권이 없습니다.");

        return;

    }



    gameData.inventory.highGachaTicket--;



    let grade = randomGrade("high");


    let player = getRandomPlayerByGrade(grade);



    if(player){


        gameData.players.push(
            JSON.parse(JSON.stringify(player))
        );


        alert(
            player.name
            +
            " 획득!\n등급 : "
            +
            player.grade
        );


    }



    saveGame();

    updateUI();


}






// 등급 확률

function randomGrade(type){



    let random =
    Math.random()*100;




    // 일반 뽑기
    // 일반 60 / A20 / S10 / 골든글러브6 / 시그니처4

    if(type === "normal"){


        if(random < 60)

            return "일반";


        if(random < 80)

            return "A";


        if(random < 90)

            return "S";


        if(random < 96)

            return "골든글러브";


        return "시그니처";


    }





    // 고급 뽑기
    // A60 / S20 / 골든글러브15 / 시그니처5


    if(type === "high"){


        if(random < 60)

            return "A";


        if(random < 80)

            return "S";


        if(random < 95)

            return "골든글러브";


        return "시그니처";


    }


}







// 등급별 선수 랜덤 선택

function getRandomPlayerByGrade(grade){


    let list =

    allPlayers.filter(

        player =>

        player.grade === grade

    );



    if(list.length === 0){

        return null;

    }




    let index =

    Math.floor(

        Math.random()*list.length

    );



    return list[index];


}







// 뽑기 메뉴

function gachaMenu(){


    let select =

    confirm(

        "뽑기 선택\n\n"
        +
        "확인 : 일반 뽑기\n"
        +
        "취소 : 고급 뽑기"

    );



    if(select){

        normalGacha();

    }

    else{

        highGacha();

    }


}
