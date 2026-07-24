// ============================
// system/shopItems.js
// 상점 아이템 데이터
// ============================


// 아이템 목록

const shopItems = {


    normalGachaTicket:{

        name:"일반 뽑기권",

        price:100000000,

        effect:"일반 뽑기 가능"

    },


    highGachaTicket:{

        name:"고급 뽑기권",

        price:500000000,

        effect:"고급 뽑기 가능"

    },


    traitChangeTicket:{

        name:"특성 변경권",

        price:300000000,

        effect:"선수 특성 변경"

    },


    enhanceTicket:{

        name:"강화권",

        price:500000000,

        effect:"강화 성공 확률 +10%"

    },


    protectTicket:{

        name:"하락 방지권",

        price:700000000,

        effect:"강화 실패 시 강화 하락 방지"

    },


    advancedEnhanceTicket:{

        name:"고급 강화권",

        price:2000000000,

        effect:"시그니처/레전드 강화 100% 성공"

    }


};




// 아이템 구매

function buyItem(item){


    let data =

    shopItems[item];



    if(!data){

        return;

    }



    if(gameData.money < data.price){


        alert("자금이 부족합니다.");

        return;

    }



    gameData.money -= data.price;



    gameData.inventory[item]++;



    alert(

        data.name
        +
        " 구매 완료!"

    );



    saveGame();

    updateUI();


}
