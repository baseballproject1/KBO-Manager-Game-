// ==========================================
// KBO Baseball Game
// config.js
// 게임 전체 설정
// ==========================================


// 게임 기본 설정

const GAME_CONFIG = {

    // 시작 자금 (억)
    startMoney: 100,


    // 시작 티켓

    startNormalTicket: 10,

    startPremiumTicket: 0,


    // 시즌

    maxSeasonStage: 50,


    // 리그 보상

    winRewardPerStage: 10,
    loseRewardPerStage: 5,


    // 선수 최대 강화

    maxEnhance: 10,


    // 레전드 제작 비용

    legendCost: 150,


    // 레전드 제작 재료

    legendRecipe: {

        signature: 1,

        goldenGlove: 2,

        sCard: 5

    }

};





// ==========================================
// 카드 등급
// ==========================================


const CARD_GRADE = {


    NORMAL:"일반",

    A:"A",

    S:"S",

    GOLDEN:"골든글러브",

    SIGNATURE:"시그니처",

    LEGEND:"레전드"


};





// ==========================================
// 뽑기 확률
// ==========================================


const GACHA_RATE = {


    normal:{


        일반:75,

        A:20,

        S:5


    },


    premium:{


        A:60,

        S:20,

        골든글러브:15,

        시그니처:5


    }


};





// ==========================================
// 강화 확률
// ==========================================


const ENHANCE_RATE = [

    90,

    85,

    70,

    50,

    45,

    30,

    25,

    20,

    15,

    10

];





// ==========================================
// 경기 방식
// ==========================================


const PLAY_MODE = {


    MANUAL:"manual",

    AUTO:"auto"


};





// ==========================================
// 경기 설정
// ==========================================


const GAME_RULE = {


    innings:9,


    extraInning:true,


    maxExtraInning:12,


    // 수동 경기 여부

    allowManual:true,


    // 자동 경기 여부

    allowAuto:true


};





console.log(
"게임 설정 로딩 완료"
);
