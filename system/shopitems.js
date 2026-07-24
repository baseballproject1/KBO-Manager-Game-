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
// ==========================================
// KBO Baseball Game
// shopitems.js
// 상점 / 아이템 구매 시스템
// ==========================================



// ==========================================
// 상점 아이템 목록
// ==========================================


const SHOP_ITEMS = {


    normalTicket:{

        name:"일반 뽑기권",

        price:5,

        type:"normalTicket"

    },


    premiumTicket:{

        name:"고급 뽑기권",

        price:20,

        type:"premiumTicket"

    },


    enhanceTicket:{

        name:"강화권",

        price:10,

        type:"enhanceTicket"

    },


    protectTicket:{

        name:"하락방지권",

        price:15,

        type:"protectTicket"

    },


    traitChangeTicket:{

        name:"특성변경권",

        price:10,

        type:"traitChangeTicket"

    },


    premiumEnhanceTicket:{

        name:"고급강화권",

        price:50,

        type:"premiumEnhanceTicket"

    }


};





// ==========================================
// 아이템 구매
// ==========================================


function buyItem(itemId){



    let item =
    SHOP_ITEMS[itemId];



    if(!item){


        alert(
        "없는 상품입니다."
        );


        return;


    }





    if(!spendMoney(item.price)){


        return;


    }





    addItem(

        item.type,

        1

    );



    alert(

    `${item.name} 구매 완료!`

    );



    saveGame();


}





// ==========================================
// 아이템 지급
// ==========================================


function addItem(type,count){



    switch(type){



        case "normalTicket":

            gameData.normalTicket += count;

            break;




        case "premiumTicket":

            gameData.premiumTicket += count;

            break;




        case "enhanceTicket":

            gameData.items.enhanceTicket += count;

            break;




        case "protectTicket":

            gameData.items.protectTicket += count;

            break;




        case "traitChangeTicket":

            gameData.items.traitChangeTicket += count;

            break;




        case "premiumEnhanceTicket":

            gameData.items.premiumEnhanceTicket += count;

            break;



    }



    saveGame();


}





// ==========================================
// 아이템 개수 확인
// ==========================================


function getItemCount(type){



    switch(type){



        case "normalTicket":

            return gameData.normalTicket;



        case "premiumTicket":

            return gameData.premiumTicket;



        default:

            return gameData.items[type] || 0;


    }


}





// ==========================================
// 상점 표시
// ==========================================


function showShop(){



    let text =

    "===== 상점 =====\n\n";



    for(let id in SHOP_ITEMS){



        let item =
        SHOP_ITEMS[id];



        text +=

        `${item.name} : ${item.price}억\n`;



    }



    alert(text);


}
