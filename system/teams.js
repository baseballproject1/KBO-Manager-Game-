// ==========================================
// KBO Baseball Game
// teams.js
// 구단 선택 시스템
// ==========================================



// ==========================================
// 구단 목록
// ==========================================


const TEAMS = [


    {
        id:"LG",
        name:"LG 트윈스"
    },


    {
        id:"SSG",
        name:"SSG 랜더스"
    },


    {
        id:"KIA",
        name:"KIA 타이거즈"
    },


    {
        id:"SAMSUNG",
        name:"삼성 라이온즈"
    },


    {
        id:"KT",
        name:"KT 위즈"
    },


    {
        id:"DOOSAN",
        name:"두산 베어스"
    },


    {
        id:"LOTTE",
        name:"롯데 자이언츠"
    },


    {
        id:"HANWHA",
        name:"한화 이글스"
    },


    {
        id:"KIWOOM",
        name:"키움 히어로즈"
    },


    {
        id:"NC",
        name:"NC 다이노스"
    }


];





// ==========================================
// 현재 선택 팀
// ==========================================


let selectedTeam = "";





// ==========================================
// 팀 선택
// ==========================================


function selectTeam(teamId){


    let team =
    TEAMS.find(
        t => t.id === teamId
    );



    if(!team){

        console.log(
        "없는 팀입니다."
        );

        return;

    }



    selectedTeam = team.id;


    gameData.team =
    team.id;



    saveGame();



    updateTeamDisplay();



    alert(
    `${team.name} 선택 완료!`
    );


}





// ==========================================
// 팀 이름 가져오기
// ==========================================


function getTeamName(id){


    let team =
    TEAMS.find(
        t => t.id === id
    );



    return team ?
    team.name :
    "없음";


}





// ==========================================
// 팀 화면 표시
// ==========================================


function updateTeamDisplay(){


    const teamText =
    document.getElementById(
        "teamName"
    );



    if(teamText){


        teamText.textContent =
        getTeamName(
            gameData.team
        );


    }


}





// ==========================================
// 저장된 팀 불러오기
// ==========================================


function loadSelectedTeam(){


    if(gameData.team){


        selectedTeam =
        gameData.team;


    }


}



loadSelectedTeam();
