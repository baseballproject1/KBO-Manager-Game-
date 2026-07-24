// ============================
// system/shop.js
// 상점 시스템
// ============================



function shopMenu(){


    let menu =

`
🏪 상점

1. 일반 뽑기권 (1억)
2. 고급 뽑기권 (5억)
3. 특성 변경권 (3억)
4. 강화권 (5억)
5. 하락 방지권 (7억)
6. 고급 강화권 (20억)

현재 자금 :
${formatMoney(gameData.money)}

번호를 입력하세요.
`;



    let select =
    prompt(menu);



    switch(select){


        case "1":

            buyItem("normalGachaTicket");

            break;



        case "2":

            buyItem("highGachaTicket");

            break;



        case "3":

            buyItem("traitChangeTicket");

            break;



        case "4":

            buyItem("enhanceTicket");

            break;



        case "5":

            buyItem("protectTicket");

            break;



        case "6":

            buyItem("advancedEnhanceTicket");

            break;



        default:

            alert("취소되었습니다.");

    }


}
