// ============================
// data/traits.js
// 선수 특성 데이터
// ============================


// 특성 목록

const traits = [

    {
        name:"파워 히터",
        type:"batter",
        effect:"파워 +5"
    },

    {
        name:"컨택 머신",
        type:"batter",
        effect:"컨택 +5"
    },

    {
        name:"선구안",
        type:"batter",
        effect:"선구 +5"
    },

    {
        name:"클러치",
        type:"batter",
        effect:"중요 상황 능력 +8"
    },

    {
        name:"수비 장인",
        type:"fielder",
        effect:"수비 +7"
    },

    {
        name:"스피드 스타",
        type:"fielder",
        effect:"주루 +5"
    },

    {
        name:"에이스",
        type:"pitcher",
        effect:"제구 +5"
    },

    {
        name:"강철 체력",
        type:"pitcher",
        effect:"체력 +8"
    },

    {
        name:"탈삼진 머신",
        type:"pitcher",
        effect:"구위 +5"
    },

    {
        name:"위기 관리",
        type:"pitcher",
        effect:"위기 상황 능력 +8"
    }

];





// 랜덤 특성

function getRandomTrait(){


    let random =
    Math.floor(
        Math.random() * traits.length
    );


    return traits[random];


}
