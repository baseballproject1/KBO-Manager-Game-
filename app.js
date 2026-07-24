// ============================
// app.js
// 메인 게임 관리
// ============================


let gameData = {

    team: null,

    money: 10000000000, // 100억

    players: [],

    inventory: {

        normalGachaTicket: 10,
        highGachaTicket: 1,
        traitChangeTicket: 1,
        enhanceTicket: 2,
        protectTicket: 1,
        advancedEnhanceTicket: 0

    },

    tutorialComplete: false

};



// 게임 시작

window.onload = function(){

    loadGame();

    updateUI();

    if(!gameData.tutorialComplete){

        startTutorial();

    }

};




// 팀 선택

function selectTeam(){

    const team =
    document.getElementById("teamList").value;


    gameData.team = team;


    createStarterTeam(team);


    alert(
        team + " 선택 완료!"
    );


    saveGame();

    updateUI();

}





// 시작 선수 지급

function createStarterTeam(team){

    if(gameData.players.length > 0)
        return;


    let starter =
    starterPlayers[team];


    if(!starter)
        return;


    gameData.players =
    JSON.parse(
        JSON.stringify(starter)
    );

}



// UI 업데이트

function updateUI(){


    const team =
    document.getElementById("myTeam");


    if(team){

        team.textContent =
        gameData.team || "없음";

    }



    const money =
    document.getElementById("money");


    if(money){

        money.textContent =
        formatMoney(gameData.money);

    }



    const players =
    document.getElementById("players");


    if(players){

        players.innerHTML="";


        gameData.players.forEach(player=>{


            let card =
            document.createElement("div");


            card.className =
            "playerCard " + player.grade;



            card.innerHTML = `

            <h3>${player.name}</h3>

            <p>${player.team}</p>

            <p>등급 : ${player.grade}</p>

            <p>강화 : +${player.enhance}</p>

            <p>특성 : ${player.trait}</p>

            <p>
            능력치 : ${player.stat}
            </p>

            `;


            players.appendChild(card);


        });


    }




    Object.keys(
        gameData.inventory
    ).forEach(item=>{


        let element =
        document.getElementById(item);


        if(element){

            element.textContent =
            gameData.inventory[item];

        }


    });


}




// 돈 표시

function formatMoney(value){

    return (
        value / 100000000
    )
    +
    "억";

}





// 튜토리얼 완료

function completeTutorial(){

    if(gameData.tutorialComplete)
        return;


    gameData.tutorialComplete=true;


    gameData.money +=
    5000000000; //50억


    gameData.inventory.normalGachaTicket +=10;


    alert(
        "튜토리얼 완료!\n50억 + 일반 뽑기권 10개 지급"
    );


    saveGame();

    updateUI();

}




// 메뉴 연결

function openGacha(){

    gachaMenu();

}



function openShop(){

    shopMenu();

}



function openEnhance(){

    enhanceMenu();

}



function changeTrait(){

    traitMenu();

}



function makeLegend(){

    legendMenu();

}



function startMatch(){

    playMatch();

}
