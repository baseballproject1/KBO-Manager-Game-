// ============================
// system/tutorial.js
// 튜토리얼 시스템
// ============================


const tutorialSteps = [

    {
        title:"⚾ 프로야구 카드게임",
        text:"나만의 야구팀을 만들어 성장시키는 게임입니다."
    },

    {
        title:"🏟 팀 선택",
        text:"응원할 KBO 구단을 선택하세요."
    },

    {
        title:"🎲 선수 영입",
        text:"뽑기권으로 새로운 선수를 영입할 수 있습니다."
    },

    {
        title:"⭐ 선수 등급",
        text:"일반 → A → S → 골든글러브 → 시그니처 순으로 강해집니다."
    },

    {
        title:"🔨 강화",
        text:"강화 비용을 사용해 선수를 성장시킬 수 있습니다."
    },

    {
        title:"🔄 특성 변경",
        text:"특성 변경권으로 선수의 특성을 바꿀 수 있습니다."
    },

    {
        title:"👑 레전드 제작",
        text:"특정 선수의 시그니처와 재료를 모아 레전드를 제작할 수 있습니다."
    },

    {
        title:"⚾ 경기",
        text:"리그 경기를 진행해 돈과 뽑기권을 얻으세요."
    }

];



let tutorialIndex = 0;




function startTutorial(){


    tutorialIndex = 0;


    showTutorial();


}




function showTutorial(){


    let step =
    tutorialSteps[tutorialIndex];


    if(!step){


        completeTutorial();


        return;

    }



    let next =
    confirm(

    step.title
    +
    "\n\n"
    +
    step.text
    +
    "\n\n다음으로 진행"

    );



    if(next){


        tutorialIndex++;

        showTutorial();


    }

}





// 튜토리얼 다시보기

function replayTutorial(){

    tutorialIndex = 0;

    showTutorial();

}
