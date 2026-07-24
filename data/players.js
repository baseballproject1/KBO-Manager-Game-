// ============================
// data/players.js
// 선수 데이터
// ============================


// 선수 기본 생성 함수

function createPlayer(
    name,
    team,
    grade,
    position,
    stat
){

    return {

        name:name,

        team:team,

        grade:grade,

        position:position,

        enhance:0,

        trait:"없음",

        stat:stat

    };

}




// 시작 지급 선수

const starterPlayers = {



SSG:[

createPlayer("박성한","SSG","A","유격수",85),
createPlayer("최지훈","SSG","A","중견수",84),
createPlayer("에레디아","SSG","A","외야수",84),
createPlayer("고명준","SSG","일반","1루수",75),
createPlayer("김성현","SSG","일반","2루수",74),
createPlayer("하재훈","SSG","일반","외야수",76),
createPlayer("이지영","SSG","일반","포수",74),
createPlayer("추신수","SSG","일반","외야수",73),

createPlayer("오원석","SSG","A","투수",84),
createPlayer("송영진","SSG","일반","투수",76),
createPlayer("백승건","SSG","일반","투수",74),
createPlayer("이로운","SSG","일반","투수",75),
createPlayer("박시후","SSG","일반","투수",73)

],




LG:[

createPlayer("홍창기","LG","A","외야수",86),
createPlayer("문성주","LG","A","외야수",83),
createPlayer("오지환","LG","A","유격수",85),
createPlayer("문보경","LG","A","3루수",84),
createPlayer("박동원","LG","A","포수",84),
createPlayer("김현수","LG","A","외야수",83),
createPlayer("신민재","LG","A","2루수",82),

createPlayer("손주영","LG","A","투수",84),
createPlayer("김윤식","LG","A","투수",83),
createPlayer("이민호","LG","일반","투수",75),
createPlayer("유영찬","LG","A","투수",84),
createPlayer("이우찬","LG","일반","투수",74)

],




삼성:[

createPlayer("구자욱","삼성","A","외야수",86),
createPlayer("김지찬","삼성","A","2루수",82),
createPlayer("이재현","삼성","A","유격수",83),
createPlayer("강민호","삼성","A","포수",82),
createPlayer("김영웅","삼성","A","3루수",83),
createPlayer("박병호","삼성","A","1루수",82),
createPlayer("류지혁","삼성","일반","내야수",75),

createPlayer("원태인","삼성","A","투수",87),
createPlayer("이승현","삼성","A","투수",82),
createPlayer("황동재","삼성","일반","투수",75),
createPlayer("김태훈","삼성","일반","투수",74),
createPlayer("오승환","삼성","A","투수",84)

],




KIA:[

createPlayer("김도영","KIA","A","3루수",90),
createPlayer("박찬호","KIA","A","유격수",83),
createPlayer("최형우","KIA","A","외야수",84),
createPlayer("나성범","KIA","A","외야수",84),
createPlayer("소크라테스","KIA","A","외야수",83),
createPlayer("김태군","KIA","일반","포수",74),
createPlayer("변우혁","KIA","일반","1루수",75),

createPlayer("윤영철","KIA","A","투수",82),
createPlayer("황동하","KIA","일반","투수",75),
createPlayer("김도현","KIA","일반","투수",74),
createPlayer("전상현","KIA","A","투수",83),
createPlayer("장현식","KIA","A","투수",82)

]

};




// 전체 선수 데이터

const allPlayers = [];



Object.values(starterPlayers)
.forEach(team=>{


    team.forEach(player=>{

        allPlayers.push(player);

    });


});
