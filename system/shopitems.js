// ==========================================
// KBO Baseball Game
// enhance.js
// 선수 강화 시스템
// ==========================================



// ==========================================
// 강화 확률
// ==========================================


function getEnhanceRate(level){


    return ENHANCE_RATE[level] || 0;


}





// ==========================================
// 강화 실행
// ==========================================


function enhancePlayer(index){



    let card =
    gameData.players[index];



    if(!card){


        alert(
        "선수를 찾을 수 없습니다."
        );


        return;


    }





    if(card.enhance >= GAME_CONFIG.maxEnhance){


        alert(
        "최대 강화입니다."
        );


        return;


    }





    let cost =
    card.enhance + 1;



    if(!spendMoney(cost)){


        return;


    }





    let rate =
    getEnhanceRate(card.enhance);





    // 강화권 적용

    if(gameData.items.enhanceTicket > 0){


        rate += 10;


        gameData.items.enhanceTicket--;


    }





    // 고급 강화권 적용

    if(

        gameData.items.premiumEnhanceTicket > 0 &&

        (
            card.grade==="레전드" ||
            card.grade==="시그니처"
        )

    ){


        rate = 100;


        gameData.items.premiumEnhanceTicket--;


    }





    let random =
    Math.random()*100;





    if(random <= rate){



        card.enhance++;



        increaseRandomStat(card);



        alert(

        `${card.name} ${card.enhance}강 성공!`

        );



    }

    else{


        failEnhance(card);


        alert(

        `${card.name} 강화 실패`

        );


    }



    saveGame();



}





// ==========================================
// 성공 시 능력 증가
// ==========================================


function increaseRandomStat(card){



    let stats = [

        "power",

        "contact",

        "speed",

        "defense",

        "pitch"

    ];



    let random =

    stats[

        Math.floor(
            Math.random()*stats.length
        )

    ];



    card.stats[random] += 1;


}





// ==========================================
// 강화 실패
// ==========================================


function failEnhance(card){



    // 하락 방지권

    if(gameData.items.protectTicket > 0){


        gameData.items.protectTicket--;


        return;


    }





    if(card.enhance > 0){


        card.enhance--;



        decreaseRandomStat(card);


    }


}





// ==========================================
// 실패 시 능력 감소
// ==========================================


function decreaseRandomStat(card){



    let stats = [

        "power",

        "contact",

        "speed",

        "defense",

        "pitch"

    ];



    let random =

    stats[

        Math.floor(
            Math.random()*stats.length
        )

    ];



    if(card.stats[random] > 0){


        card.stats[random] -= 1;


    }


}
