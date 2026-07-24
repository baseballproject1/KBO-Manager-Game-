// ============================
// data/players.js
// 프로야구 카드게임 최종 선수 데이터
// 1/10 : 기본 구조 + SSG 랜더스
// ============================



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

        stat:{

            power:stat.power || 0,

            contact:stat.contact || 0,

            speed:stat.speed || 0,

            defense:stat.defense || 0,

            pitch:stat.pitch || 0

        },

        enhance:0,

        trait:"없음"

    };

}





const allPlayers = [];





// ============================
// SSG 랜더스
// ============================


const SSGPlayers = [



createPlayer(
"김광현",
"SSG",
"레전드",
"투수",
{
power:90,
contact:60,
speed:60,
defense:80,
pitch:105
}),



createPlayer(
"김광현",
"SSG",
"시그니처",
"투수",
{
power:85,
contact:55,
speed:55,
defense:75,
pitch:95
}),



createPlayer(
"최정",
"SSG",
"레전드",
"3루수",
{
power:105,
contact:90,
speed:70,
defense:95,
pitch:0
}),



createPlayer(
"최정",
"SSG",
"시그니처",
"3루수",
{
power:95,
contact:85,
speed:65,
defense:88,
pitch:0
}),



createPlayer(
"박성한",
"SSG",
"레전드",
"유격수",
{
power:85,
contact:100,
speed:95,
defense:100,
pitch:0
}),



createPlayer(
"박성한",
"SSG",
"시그니처",
"유격수",
{
power:75,
contact:90,
speed:90,
defense:92,
pitch:0
}),



createPlayer(
"에레디아",
"SSG",
"S",
"외야수",
{
power:85,
contact:90,
speed:80,
defense:85,
pitch:0
}),



createPlayer(
"한유섬",
"SSG",
"S",
"외야수",
{
power:90,
contact:80,
speed:65,
defense:80,
pitch:0
}),



createPlayer(
"최지훈",
"SSG",
"A",
"외야수",
{
power:70,
contact:80,
speed:95,
defense:90,
pitch:0
}),



createPlayer(
"추신수",
"SSG",
"골든글러브",
"외야수",
{
power:85,
contact:95,
speed:65,
defense:75,
pitch:0
}),



createPlayer(
"노경은",
"SSG",
"S",
"투수",
{
power:40,
contact:30,
speed:40,
defense:75,
pitch:85
}),



createPlayer(
"서진용",
"SSG",
"S",
"투수",
{
power:35,
contact:30,
speed:45,
defense:80,
pitch:88
}),



createPlayer(
"문승원",
"SSG",
"A",
"투수",
{
power:40,
contact:30,
speed:40,
defense:75,
pitch:82
}),



createPlayer(
"오원석",
"SSG",
"A",
"투수",
{
power:45,
contact:30,
speed:45,
defense:70,
pitch:80
}),



createPlayer(
"이로운",
"SSG",
"A",
"투수",
{
power:35,
contact:25,
speed:40,
defense:70,
pitch:78
}),



createPlayer(
"이지영",
"SSG",
"A",
"포수",
{
power:60,
contact:75,
speed:40,
defense:85,
pitch:0
}),



createPlayer(
"김민식",
"SSG",
"A",
"포수",
{
power:55,
contact:70,
speed:40,
defense:80,
pitch:0
}),



createPlayer(
"고명준",
"SSG",
"A",
"1루수",
{
power:80,
contact:70,
speed:55,
defense:70,
pitch:0
}),



createPlayer(
"김성현",
"SSG",
"A",
"2루수",
{
power:65,
contact:75,
speed:65,
defense:80,
pitch:0
}),



createPlayer(
"하재훈",
"SSG",
"S",
"외야수",
{
power:80,
contact:75,
speed:70,
defense:75,
pitch:0
})

];





allPlayers.push(
    ...SSGPlayers
);// ============================
// SSG 랜더스 추가 선수
// 1/10 계속
// ============================


SSGPlayers.push(



createPlayer(
"오태곤",
"SSG",
"A",
"외야수",
{
power:75,
contact:70,
speed:70,
defense:75,
pitch:0
}),



createPlayer(
"전의산",
"SSG",
"A",
"1루수",
{
power:80,
contact:65,
speed:55,
defense:65,
pitch:0
}),



createPlayer(
"안상현",
"SSG",
"일반",
"내야수",
{
power:55,
contact:65,
speed:70,
defense:70,
pitch:0
}),



createPlayer(
"최항",
"SSG",
"일반",
"내야수",
{
power:60,
contact:65,
speed:60,
defense:65,
pitch:0
}),



createPlayer(
"김찬형",
"SSG",
"일반",
"내야수",
{
power:55,
contact:60,
speed:65,
defense:65,
pitch:0
}),



createPlayer(
"박지환",
"SSG",
"A",
"2루수",
{
power:70,
contact:75,
speed:80,
defense:75,
pitch:0
}),



createPlayer(
"정준재",
"SSG",
"A",
"내야수",
{
power:60,
contact:70,
speed:85,
defense:70,
pitch:0
}),



createPlayer(
"김민준",
"SSG",
"일반",
"외야수",
{
power:55,
contact:60,
speed:70,
defense:65,
pitch:0
}),



createPlayer(
"류효승",
"SSG",
"일반",
"외야수",
{
power:65,
contact:60,
speed:65,
defense:60,
pitch:0
}),



createPlayer(
"김정민",
"SSG",
"일반",
"포수",
{
power:50,
contact:60,
speed:35,
defense:65,
pitch:0
}),



createPlayer(
"조형우",
"SSG",
"A",
"포수",
{
power:65,
contact:65,
speed:40,
defense:75,
pitch:0
}),



createPlayer(
"신헌민",
"SSG",
"A",
"투수",
{
power:35,
contact:25,
speed:40,
defense:65,
pitch:76
}),



createPlayer(
"박종훈",
"SSG",
"A",
"투수",
{
power:30,
contact:25,
speed:40,
defense:70,
pitch:78
}),



createPlayer(
"이기순",
"SSG",
"일반",
"투수",
{
power:25,
contact:20,
speed:35,
defense:60,
pitch:70
}),



createPlayer(
"백승건",
"SSG",
"일반",
"투수",
{
power:30,
contact:20,
speed:35,
defense:65,
pitch:72
}),



createPlayer(
"최민준",
"SSG",
"A",
"투수",
{
power:35,
contact:25,
speed:40,
defense:70,
pitch:75
}),



createPlayer(
"장지훈",
"SSG",
"일반",
"투수",
{
power:30,
contact:20,
speed:35,
defense:60,
pitch:70
}),



createPlayer(
"임준섭",
"SSG",
"일반",
"투수",
{
power:25,
contact:20,
speed:35,
defense:65,
pitch:71
}),



createPlayer(
"이기용",
"SSG",
"일반",
"투수",
{
power:25,
contact:20,
speed:30,
defense:60,
pitch:69
}),



createPlayer(
"김택형",
"SSG",
"A",
"투수",
{
power:35,
contact:25,
speed:40,
defense:70,
pitch:77
}),




// 레전드 추가

createPlayer(
"박경완",
"SSG",
"레전드",
"포수",
{
power:95,
contact:90,
speed:40,
defense:105,
pitch:0
}),



createPlayer(
"김성근",
"SSG",
"레전드",
"감독",
{
power:100,
contact:100,
speed:100,
defense:100,
pitch:100
}),



createPlayer(
"김강민",
"SSG",
"레전드",
"외야수",
{
power:80,
contact:85,
speed:90,
defense:100,
pitch:0
}),



createPlayer(
"이진영",
"SSG",
"레전드",
"외야수",
{
power:85,
contact:90,
speed:80,
defense:85,
pitch:0
}),



createPlayer(
"정근우",
"SSG",
"레전드",
"2루수",
{
power:80,
contact:95,
speed:95,
defense:90,
pitch:0
})



);
// ============================
// 삼성 라이온즈
// 2/10
// ============================


const SamsungPlayers = [



createPlayer(
"오승환",
"삼성",
"레전드",
"투수",
{
power:40,
contact:30,
speed:35,
defense:90,
pitch:105
}),



createPlayer(
"오승환",
"삼성",
"시그니처",
"투수",
{
power:35,
contact:25,
speed:35,
defense:85,
pitch:95
}),



createPlayer(
"이승엽",
"삼성",
"레전드",
"1루수",
{
power:110,
contact:100,
speed:60,
defense:80,
pitch:0
}),



createPlayer(
"이승엽",
"삼성",
"시그니처",
"1루수",
{
power:100,
contact:95,
speed:55,
defense:75,
pitch:0
}),



createPlayer(
"강민호",
"삼성",
"골든글러브",
"포수",
{
power:85,
contact:85,
speed:45,
defense:90,
pitch:0
}),



createPlayer(
"구자욱",
"삼성",
"시그니처",
"외야수",
{
power:90,
contact:95,
speed:85,
defense:85,
pitch:0
}),



createPlayer(
"김지찬",
"삼성",
"S",
"내야수",
{
power:60,
contact:85,
speed:100,
defense:90,
pitch:0
}),



createPlayer(
"원태인",
"삼성",
"S",
"투수",
{
power:40,
contact:30,
speed:40,
defense:80,
pitch:90
}),



createPlayer(
"백정현",
"삼성",
"A",
"투수",
{
power:35,
contact:25,
speed:35,
defense:75,
pitch:82
}),



createPlayer(
"최채흥",
"삼성",
"A",
"투수",
{
power:35,
contact:25,
speed:40,
defense:70,
pitch:78
}),



createPlayer(
"김태훈",
"삼성",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:70,
pitch:76
}),



createPlayer(
"임창민",
"삼성",
"S",
"투수",
{
power:30,
contact:20,
speed:35,
defense:80,
pitch:85
}),



createPlayer(
"김재윤",
"삼성",
"S",
"투수",
{
power:35,
contact:25,
speed:35,
defense:80,
pitch:86
}),



createPlayer(
"류지혁",
"삼성",
"A",
"내야수",
{
power:65,
contact:80,
speed:70,
defense:75,
pitch:0
}),



createPlayer(
"전병우",
"삼성",
"A",
"내야수",
{
power:70,
contact:65,
speed:60,
defense:70,
pitch:0
}),



createPlayer(
"김영웅",
"삼성",
"A",
"내야수",
{
power:75,
contact:70,
speed:75,
defense:70,
pitch:0
}),



createPlayer(
"이재현",
"삼성",
"S",
"유격수",
{
power:75,
contact:80,
speed:80,
defense:85,
pitch:0
}),



createPlayer(
"박병호",
"삼성",
"골든글러브",
"1루수",
{
power:100,
contact:75,
speed:40,
defense:70,
pitch:0
}),



createPlayer(
"김헌곤",
"삼성",
"A",
"외야수",
{
power:60,
contact:70,
speed:70,
defense:80,
pitch:0
}),



createPlayer(
"김현준",
"삼성",
"A",
"외야수",
{
power:65,
contact:75,
speed:80,
defense:85,
pitch:0
})

];



allPlayers.push(
    ...SamsungPlayers
);// ============================
// 삼성 라이온즈 추가 선수
// 2/10 계속
// ============================


SamsungPlayers.push(



createPlayer(
"최형우",
"삼성",
"레전드",
"외야수",
{
power:100,
contact:100,
speed:55,
defense:75,
pitch:0
}),



createPlayer(
"박석민",
"삼성",
"레전드",
"3루수",
{
power:95,
contact:90,
speed:50,
defense:85,
pitch:0
}),



createPlayer(
"배영수",
"삼성",
"레전드",
"투수",
{
power:40,
contact:30,
speed:40,
defense:90,
pitch:100
}),



createPlayer(
"장원삼",
"삼성",
"레전드",
"투수",
{
power:35,
contact:30,
speed:35,
defense:85,
pitch:92
}),



createPlayer(
"진갑용",
"삼성",
"레전드",
"포수",
{
power:85,
contact:85,
speed:35,
defense:100,
pitch:0
}),



createPlayer(
"김상수",
"삼성",
"A",
"유격수",
{
power:60,
contact:80,
speed:80,
defense:85,
pitch:0
}),



createPlayer(
"강한울",
"삼성",
"A",
"내야수",
{
power:55,
contact:75,
speed:75,
defense:70,
pitch:0
}),



createPlayer(
"안주형",
"삼성",
"일반",
"내야수",
{
power:50,
contact:60,
speed:65,
defense:65,
pitch:0
}),



createPlayer(
"김재상",
"삼성",
"일반",
"내야수",
{
power:55,
contact:65,
speed:70,
defense:65,
pitch:0
}),



createPlayer(
"양도근",
"삼성",
"일반",
"내야수",
{
power:50,
contact:60,
speed:65,
defense:60,
pitch:0
}),



createPlayer(
"김동엽",
"삼성",
"A",
"외야수",
{
power:85,
contact:65,
speed:50,
defense:60,
pitch:0
}),



createPlayer(
"이성규",
"삼성",
"A",
"외야수",
{
power:75,
contact:65,
speed:65,
defense:70,
pitch:0
}),



createPlayer(
"윤정빈",
"삼성",
"A",
"외야수",
{
power:65,
contact:70,
speed:75,
defense:70,
pitch:0
}),



createPlayer(
"김성윤",
"삼성",
"A",
"외야수",
{
power:55,
contact:70,
speed:90,
defense:80,
pitch:0
}),



createPlayer(
"이병헌",
"삼성",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:65,
pitch:75
}),



createPlayer(
"최하늘",
"삼성",
"일반",
"투수",
{
power:25,
contact:20,
speed:30,
defense:60,
pitch:68
}),



createPlayer(
"황동재",
"삼성",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:65,
pitch:73
}),



createPlayer(
"이승현",
"삼성",
"S",
"투수",
{
power:35,
contact:25,
speed:40,
defense:75,
pitch:85
}),



createPlayer(
"김윤수",
"삼성",
"A",
"투수",
{
power:35,
contact:20,
speed:40,
defense:65,
pitch:78
}),



createPlayer(
"박준영",
"삼성",
"일반",
"투수",
{
power:25,
contact:20,
speed:30,
defense:60,
pitch:70
})


);// ============================
// LG 트윈스
// 3/10
// ============================


const LGPlayers = [


createPlayer(
"김용수",
"LG",
"레전드",
"투수",
{
power:40,
contact:30,
speed:35,
defense:100,
pitch:105
}),


createPlayer(
"김용수",
"LG",
"시그니처",
"투수",
{
power:35,
contact:25,
speed:35,
defense:90,
pitch:95
}),


createPlayer(
"박용택",
"LG",
"레전드",
"외야수",
{
power:90,
contact:100,
speed:70,
defense:85,
pitch:0
}),


createPlayer(
"박용택",
"LG",
"시그니처",
"외야수",
{
power:85,
contact:95,
speed:70,
defense:80,
pitch:0
}),


createPlayer(
"류지현",
"LG",
"레전드",
"유격수",
{
power:70,
contact:95,
speed:85,
defense:95,
pitch:0
}),


createPlayer(
"이병규",
"LG",
"레전드",
"외야수",
{
power:90,
contact:100,
speed:85,
defense:95,
pitch:0
}),


createPlayer(
"김현수",
"LG",
"골든글러브",
"외야수",
{
power:90,
contact:95,
speed:60,
defense:80,
pitch:0
}),


createPlayer(
"오지환",
"LG",
"시그니처",
"유격수",
{
power:85,
contact:80,
speed:80,
defense:100,
pitch:0
}),


createPlayer(
"홍창기",
"LG",
"S",
"외야수",
{
power:70,
contact:95,
speed:85,
defense:90,
pitch:0
}),


createPlayer(
"문성주",
"LG",
"A",
"외야수",
{
power:65,
contact:85,
speed:80,
defense:75,
pitch:0
}),


createPlayer(
"문보경",
"LG",
"S",
"3루수",
{
power:85,
contact:85,
speed:70,
defense:80,
pitch:0
}),


createPlayer(
"김주성",
"LG",
"A",
"내야수",
{
power:65,
contact:70,
speed:75,
defense:80,
pitch:0
}),


createPlayer(
"박동원",
"LG",
"S",
"포수",
{
power:90,
contact:75,
speed:45,
defense:85,
pitch:0
}),


createPlayer(
"허도환",
"LG",
"A",
"포수",
{
power:55,
contact:70,
speed:35,
defense:80,
pitch:0
}),


createPlayer(
"임찬규",
"LG",
"S",
"투수",
{
power:35,
contact:25,
speed:35,
defense:80,
pitch:88
}),


createPlayer(
"최원태",
"LG",
"S",
"투수",
{
power:40,
contact:30,
speed:40,
defense:80,
pitch:87
}),


createPlayer(
"손주영",
"LG",
"A",
"투수",
{
power:35,
contact:25,
speed:35,
defense:70,
pitch:80
}),


createPlayer(
"김진성",
"LG",
"S",
"투수",
{
power:30,
contact:20,
speed:35,
defense:85,
pitch:86
}),


createPlayer(
"유영찬",
"LG",
"S",
"투수",
{
power:35,
contact:25,
speed:40,
defense:80,
pitch:88
}),


createPlayer(
"이정용",
"LG",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:70,
pitch:78
})


];


allPlayers.push(
    ...LGPlayers
);// ============================
// LG 트윈스 추가 선수
// 3/10 계속
// ============================


LGPlayers.push(



createPlayer(
"이상훈",
"LG",
"레전드",
"투수",
{
power:45,
contact:30,
speed:35,
defense:95,
pitch:105
}),



createPlayer(
"서용빈",
"LG",
"레전드",
"1루수",
{
power:80,
contact:90,
speed:60,
defense:85,
pitch:0
}),



createPlayer(
"정성훈",
"LG",
"레전드",
"3루수",
{
power:85,
contact:90,
speed:55,
defense:85,
pitch:0
}),



createPlayer(
"봉중근",
"LG",
"레전드",
"투수",
{
power:40,
contact:35,
speed:40,
defense:90,
pitch:100
}),



createPlayer(
"조인성",
"LG",
"레전드",
"포수",
{
power:85,
contact:75,
speed:35,
defense:95,
pitch:0
}),



createPlayer(
"김기연",
"LG",
"A",
"포수",
{
power:60,
contact:65,
speed:40,
defense:75,
pitch:0
}),



createPlayer(
"신민재",
"LG",
"S",
"2루수",
{
power:55,
contact:85,
speed:100,
defense:90,
pitch:0
}),



createPlayer(
"손호영",
"LG",
"A",
"내야수",
{
power:75,
contact:75,
speed:80,
defense:70,
pitch:0
}),



createPlayer(
"김민성",
"LG",
"A",
"3루수",
{
power:70,
contact:75,
speed:60,
defense:80,
pitch:0
}),



createPlayer(
"정주현",
"LG",
"A",
"2루수",
{
power:60,
contact:70,
speed:75,
defense:75,
pitch:0
}),



createPlayer(
"이천웅",
"LG",
"A",
"외야수",
{
power:60,
contact:80,
speed:75,
defense:80,
pitch:0
}),



createPlayer(
"채은성",
"LG",
"골든글러브",
"외야수",
{
power:90,
contact:85,
speed:55,
defense:70,
pitch:0
}),



createPlayer(
"이형종",
"LG",
"A",
"외야수",
{
power:80,
contact:70,
speed:60,
defense:70,
pitch:0
}),



createPlayer(
"김현종",
"LG",
"일반",
"외야수",
{
power:55,
contact:60,
speed:70,
defense:65,
pitch:0
}),



createPlayer(
"김윤식",
"LG",
"A",
"투수",
{
power:35,
contact:25,
speed:35,
defense:70,
pitch:78
}),



createPlayer(
"이민호",
"LG",
"A",
"투수",
{
power:35,
contact:25,
speed:35,
defense:70,
pitch:76
}),



createPlayer(
"정우영",
"LG",
"S",
"투수",
{
power:30,
contact:20,
speed:35,
defense:85,
pitch:90
}),



createPlayer(
"고우석",
"LG",
"S",
"투수",
{
power:35,
contact:25,
speed:35,
defense:85,
pitch:92
}),



createPlayer(
"진해수",
"LG",
"A",
"투수",
{
power:25,
contact:20,
speed:30,
defense:70,
pitch:75
}),



createPlayer(
"최동환",
"LG",
"일반",
"투수",
{
power:25,
contact:20,
speed:30,
defense:60,
pitch:70
})


);// ============================
// KIA 타이거즈
// 4/10
// ============================


const KIAPlayers = [


createPlayer(
"선동열",
"KIA",
"레전드",
"투수",
{
power:45,
contact:30,
speed:40,
defense:105,
pitch:110
}),


createPlayer(
"선동열",
"KIA",
"시그니처",
"투수",
{
power:40,
contact:25,
speed:35,
defense:95,
pitch:100
}),


createPlayer(
"이종범",
"KIA",
"레전드",
"유격수",
{
power:95,
contact:105,
speed:105,
defense:100,
pitch:0
}),


createPlayer(
"이종범",
"KIA",
"시그니처",
"유격수",
{
power:90,
contact:100,
speed:100,
defense:95,
pitch:0
}),


createPlayer(
"양현종",
"KIA",
"시그니처",
"투수",
{
power:45,
contact:30,
speed:35,
defense:80,
pitch:95
}),


createPlayer(
"양현종",
"KIA",
"레전드",
"투수",
{
power:50,
contact:35,
speed:40,
defense:90,
pitch:105
}),


createPlayer(
"김도영",
"KIA",
"S",
"3루수",
{
power:90,
contact:90,
speed:100,
defense:80,
pitch:0
}),


createPlayer(
"나성범",
"KIA",
"골든글러브",
"외야수",
{
power:100,
contact:90,
speed:60,
defense:75,
pitch:0
}),


createPlayer(
"최형우",
"KIA",
"골든글러브",
"외야수",
{
power:95,
contact:100,
speed:45,
defense:70,
pitch:0
}),


createPlayer(
"박찬호",
"KIA",
"A",
"유격수",
{
power:65,
contact:80,
speed:95,
defense:90,
pitch:0
}),


createPlayer(
"김태군",
"KIA",
"A",
"포수",
{
power:60,
contact:75,
speed:40,
defense:85,
pitch:0
}),


createPlayer(
"한승택",
"KIA",
"A",
"포수",
{
power:55,
contact:65,
speed:45,
defense:80,
pitch:0
}),


createPlayer(
"정해영",
"KIA",
"S",
"투수",
{
power:35,
contact:25,
speed:35,
defense:80,
pitch:90
}),


createPlayer(
"전상현",
"KIA",
"S",
"투수",
{
power:35,
contact:25,
speed:35,
defense:80,
pitch:88
}),


createPlayer(
"이의리",
"KIA",
"A",
"투수",
{
power:40,
contact:25,
speed:40,
defense:70,
pitch:82
}),


createPlayer(
"윤영철",
"KIA",
"A",
"투수",
{
power:35,
contact:25,
speed:35,
defense:70,
pitch:80
}),


createPlayer(
"황동하",
"KIA",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:65,
pitch:75
}),


createPlayer(
"소크라테스",
"KIA",
"S",
"외야수",
{
power:85,
contact:85,
speed:85,
defense:85,
pitch:0
}),


createPlayer(
"김선빈",
"KIA",
"S",
"2루수",
{
power:65,
contact:95,
speed:70,
defense:90,
pitch:0
}),


createPlayer(
"안치홍",
"KIA",
"골든글러브",
"2루수",
{
power:85,
contact:90,
speed:65,
defense:85,
pitch:0
})


];


allPlayers.push(
    ...KIAPlayers
);// ============================
// KIA 타이거즈 추가 선수
// 4/10 계속
// ============================


KIAPlayers.push(



createPlayer(
"김원섭",
"KIA",
"레전드",
"외야수",
{
power:75,
contact:90,
speed:85,
defense:90,
pitch:0
}),



createPlayer(
"장성호",
"KIA",
"레전드",
"1루수",
{
power:90,
contact:95,
speed:55,
defense:80,
pitch:0
}),



createPlayer(
"홍세완",
"KIA",
"레전드",
"유격수",
{
power:80,
contact:85,
speed:70,
defense:85,
pitch:0
}),



createPlayer(
"김상현",
"KIA",
"레전드",
"3루수",
{
power:95,
contact:80,
speed:55,
defense:70,
pitch:0
}),



createPlayer(
"서재응",
"KIA",
"레전드",
"투수",
{
power:35,
contact:25,
speed:35,
defense:90,
pitch:95
}),



createPlayer(
"최원준",
"KIA",
"A",
"외야수",
{
power:70,
contact:75,
speed:85,
defense:75,
pitch:0
}),



createPlayer(
"김규성",
"KIA",
"일반",
"내야수",
{
power:50,
contact:60,
speed:70,
defense:65,
pitch:0
}),



createPlayer(
"변우혁",
"KIA",
"A",
"1루수",
{
power:75,
contact:65,
speed:50,
defense:65,
pitch:0
}),



createPlayer(
"황대인",
"KIA",
"A",
"1루수",
{
power:70,
contact:65,
speed:45,
defense:60,
pitch:0
}),



createPlayer(
"류지혁",
"KIA",
"A",
"내야수",
{
power:65,
contact:75,
speed:70,
defense:75,
pitch:0
}),



createPlayer(
"김호령",
"KIA",
"A",
"외야수",
{
power:55,
contact:65,
speed:90,
defense:95,
pitch:0
}),



createPlayer(
"이창진",
"KIA",
"A",
"외야수",
{
power:65,
contact:70,
speed:70,
defense:75,
pitch:0
}),



createPlayer(
"김석환",
"KIA",
"일반",
"외야수",
{
power:65,
contact:55,
speed:55,
defense:60,
pitch:0
}),



createPlayer(
"김유신",
"KIA",
"일반",
"투수",
{
power:25,
contact:20,
speed:30,
defense:60,
pitch:70
}),



createPlayer(
"김기훈",
"KIA",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:65,
pitch:75
}),



createPlayer(
"장현식",
"KIA",
"S",
"투수",
{
power:35,
contact:25,
speed:35,
defense:85,
pitch:87
}),



createPlayer(
"임기영",
"KIA",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:75,
pitch:80
}),



createPlayer(
"곽도규",
"KIA",
"A",
"투수",
{
power:30,
contact:20,
speed:40,
defense:70,
pitch:78
}),



createPlayer(
"김도현",
"KIA",
"일반",
"투수",
{
power:25,
contact:20,
speed:30,
defense:60,
pitch:68
}),



createPlayer(
"김현수",
"KIA",
"일반",
"포수",
{
power:45,
contact:55,
speed:30,
defense:60,
pitch:0
})


);// ==================================
// data/players.js
// 프로야구 카드게임 선수 데이터
// 최종 버전
// 1/10 : 기본 구조 + SSG 랜더스
// ==================================


// 선수 생성 함수

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

        stat:{
            power:stat.power || 0,
            contact:stat.contact || 0,
            speed:stat.speed || 0,
            defense:stat.defense || 0,
            pitch:stat.pitch || 0
        },

        enhance:0,

        trait:"없음"

    };

}



// 전체 선수 배열

const allPlayers = [];



// ==================================
// SSG 랜더스
// ==================================


const SSGPlayers = [

    // ==================
    // 레전드 + 시그니처
    // ==================


createPlayer(
"김광현",
"SSG",
"레전드",
"투수",
{
power:45,
contact:30,
speed:40,
defense:100,
pitch:110
}),


createPlayer(
"김광현",
"SSG",
"시그니처",
"투수",
{
power:40,
contact:25,
speed:35,
defense:90,
pitch:100
}),



createPlayer(
"최정",
"SSG",
"레전드",
"3루수",
{
power:110,
contact:95,
speed:70,
defense:100,
pitch:0
}),


createPlayer(
"최정",
"SSG",
"시그니처",
"3루수",
{
power:100,
contact:90,
speed:65,
defense:90,
pitch:0
}),



createPlayer(
"박경완",
"SSG",
"레전드",
"포수",
{
power:95,
contact:90,
speed:40,
defense:110,
pitch:0
}),


createPlayer(
"박경완",
"SSG",
"시그니처",
"포수",
{
power:85,
contact:85,
speed:35,
defense:100,
pitch:0
}),



createPlayer(
"김강민",
"SSG",
"레전드",
"외야수",
{
power:85,
contact:85,
speed:95,
defense:110,
pitch:0
}),


createPlayer(
"김강민",
"SSG",
"시그니처",
"외야수",
{
power:80,
contact:80,
speed:90,
defense:100,
pitch:0
}),



createPlayer(
"정근우",
"SSG",
"레전드",
"2루수",
{
power:85,
contact:100,
speed:100,
defense:95,
pitch:0
}),


createPlayer(
"정근우",
"SSG",
"시그니처",
"2루수",
{
power:80,
contact:95,
speed:95,
defense:90,
pitch:0
}),



// ==================
// 주요 선수
// ==================


createPlayer(
"박성한",
"SSG",
"시그니처",
"유격수",
{
power:75,
contact:95,
speed:90,
defense:95,
pitch:0
}),



createPlayer(
"한유섬",
"SSG",
"S",
"외야수",
{
power:90,
contact:80,
speed:60,
defense:80,
pitch:0
}),



createPlayer(
"에레디아",
"SSG",
"S",
"외야수",
{
power:85,
contact:90,
speed:80,
defense:85,
pitch:0
}),



createPlayer(
"최지훈",
"SSG",
"A",
"외야수",
{
power:70,
contact:80,
speed:95,
defense:90,
pitch:0
}),



createPlayer(
"노경은",
"SSG",
"S",
"투수",
{
power:35,
contact:25,
speed:35,
defense:80,
pitch:90
}),



createPlayer(
"서진용",
"SSG",
"S",
"투수",
{
power:30,
contact:20,
speed:35,
defense:85,
pitch:92
}),



createPlayer(
"문승원",
"SSG",
"A",
"투수",
{
power:35,
contact:25,
speed:35,
defense:75,
pitch:82
}),



createPlayer(
"오원석",
"SSG",
"A",
"투수",
{
power:40,
contact:25,
speed:40,
defense:70,
pitch:80
}),



createPlayer(
"이로운",
"SSG",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:70,
pitch:78
}),



createPlayer(
"이지영",
"SSG",
"A",
"포수",
{
power:60,
contact:75,
speed:40,
defense:85,
pitch:0
}),



createPlayer(
"김민식",
"SSG",
"A",
"포수",
{
power:55,
contact:70,
speed:40,
defense:80,
pitch:0
})

];



// 등록

allPlayers.push(
    ...SSGPlayers
);// ==================================
// SSG 랜더스 추가 선수
// 1/10 계속
// ==================================


SSGPlayers.push(



createPlayer(
"고명준",
"SSG",
"A",
"1루수",
{
power:80,
contact:70,
speed:55,
defense:70,
pitch:0
}),



createPlayer(
"김성현",
"SSG",
"A",
"2루수",
{
power:65,
contact:75,
speed:65,
defense:85,
pitch:0
}),



createPlayer(
"전의산",
"SSG",
"A",
"1루수",
{
power:80,
contact:65,
speed:50,
defense:65,
pitch:0
}),



createPlayer(
"박지환",
"SSG",
"A",
"2루수",
{
power:70,
contact:75,
speed:85,
defense:75,
pitch:0
}),



createPlayer(
"정준재",
"SSG",
"A",
"내야수",
{
power:60,
contact:75,
speed:85,
defense:70,
pitch:0
}),



createPlayer(
"안상현",
"SSG",
"일반",
"내야수",
{
power:55,
contact:65,
speed:70,
defense:70,
pitch:0
}),



createPlayer(
"최항",
"SSG",
"일반",
"내야수",
{
power:60,
contact:65,
speed:60,
defense:65,
pitch:0
}),



createPlayer(
"오태곤",
"SSG",
"A",
"외야수",
{
power:75,
contact:70,
speed:70,
defense:75,
pitch:0
}),



createPlayer(
"하재훈",
"SSG",
"S",
"외야수",
{
power:80,
contact:75,
speed:70,
defense:75,
pitch:0
}),



createPlayer(
"추신수",
"SSG",
"골든글러브",
"외야수",
{
power:85,
contact:95,
speed:65,
defense:75,
pitch:0
}),



createPlayer(
"조형우",
"SSG",
"A",
"포수",
{
power:65,
contact:65,
speed:40,
defense:75,
pitch:0
}),



createPlayer(
"김찬형",
"SSG",
"일반",
"내야수",
{
power:55,
contact:60,
speed:65,
defense:65,
pitch:0
}),



createPlayer(
"류효승",
"SSG",
"일반",
"외야수",
{
power:65,
contact:60,
speed:65,
defense:60,
pitch:0
}),



createPlayer(
"김민준",
"SSG",
"일반",
"외야수",
{
power:55,
contact:60,
speed:70,
defense:65,
pitch:0
}),



createPlayer(
"박종훈",
"SSG",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:75,
pitch:78
}),



createPlayer(
"김택형",
"SSG",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:70,
pitch:77
}),



createPlayer(
"최민준",
"SSG",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:70,
pitch:76
}),



createPlayer(
"신헌민",
"SSG",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:65,
pitch:75
}),



createPlayer(
"장지훈",
"SSG",
"일반",
"투수",
{
power:25,
contact:20,
speed:30,
defense:60,
pitch:70
}),



createPlayer(
"이기순",
"SSG",
"일반",
"투수",
{
power:25,
contact:20,
speed:30,
defense:60,
pitch:68
}),



createPlayer(
"백승건",
"SSG",
"일반",
"투수",
{
power:25,
contact:20,
speed:35,
defense:60,
pitch:70
}),



createPlayer(
"임준섭",
"SSG",
"일반",
"투수",
{
power:25,
contact:20,
speed:30,
defense:65,
pitch:72
}),



createPlayer(
"김정민",
"SSG",
"일반",
"포수",
{
power:45,
contact:55,
speed:35,
defense:65,
pitch:0
}),



createPlayer(
"이현석",
"SSG",
"일반",
"포수",
{
power:50,
contact:60,
speed:35,
defense:65,
pitch:0
}),



createPlayer(
"김규남",
"SSG",
"일반",
"외야수",
{
power:55,
contact:60,
speed:70,
defense:65,
pitch:0
}),



createPlayer(
"최상민",
"SSG",
"일반",
"외야수",
{
power:50,
contact:55,
speed:75,
defense:70,
pitch:0
}),



createPlayer(
"강진성",
"SSG",
"A",
"1루수",
{
power:75,
contact:70,
speed:55,
defense:70,
pitch:0
}),



createPlayer(
"김성민",
"SSG",
"일반",
"투수",
{
power:25,
contact:20,
speed:30,
defense:60,
pitch:69
}),



createPlayer(
"박시후",
"SSG",
"일반",
"투수",
{
power:25,
contact:20,
speed:30,
defense:60,
pitch:68
})



);// ==================================
// 삼성 라이온즈
// 2/10
// ==================================


const SamsungPlayers = [



// ==========================
// 레전드 + 시그니처
// ==========================


createPlayer(
"이승엽",
"삼성",
"레전드",
"1루수",
{
power:110,
contact:100,
speed:60,
defense:85,
pitch:0
}),


createPlayer(
"이승엽",
"삼성",
"시그니처",
"1루수",
{
power:100,
contact:95,
speed:55,
defense:80,
pitch:0
}),



createPlayer(
"오승환",
"삼성",
"레전드",
"투수",
{
power:40,
contact:25,
speed:35,
defense:105,
pitch:110
}),


createPlayer(
"오승환",
"삼성",
"시그니처",
"투수",
{
power:35,
contact:25,
speed:35,
defense:95,
pitch:100
}),



createPlayer(
"양준혁",
"삼성",
"레전드",
"외야수",
{
power:100,
contact:105,
speed:65,
defense:85,
pitch:0
}),


createPlayer(
"양준혁",
"삼성",
"시그니처",
"외야수",
{
power:95,
contact:100,
speed:60,
defense:80,
pitch:0
}),



createPlayer(
"배영수",
"삼성",
"레전드",
"투수",
{
power:40,
contact:25,
speed:35,
defense:90,
pitch:100
}),


createPlayer(
"배영수",
"삼성",
"시그니처",
"투수",
{
power:35,
contact:25,
speed:35,
defense:85,
pitch:92
}),



createPlayer(
"진갑용",
"삼성",
"레전드",
"포수",
{
power:85,
contact:85,
speed:35,
defense:105,
pitch:0
}),


createPlayer(
"진갑용",
"삼성",
"시그니처",
"포수",
{
power:80,
contact:80,
speed:30,
defense:95,
pitch:0
}),




// ==========================
// 주요 선수
// ==========================


createPlayer(
"구자욱",
"삼성",
"시그니처",
"외야수",
{
power:90,
contact:95,
speed:85,
defense:85,
pitch:0
}),



createPlayer(
"강민호",
"삼성",
"골든글러브",
"포수",
{
power:85,
contact:85,
speed:45,
defense:90,
pitch:0
}),



createPlayer(
"김지찬",
"삼성",
"S",
"2루수",
{
power:60,
contact:85,
speed:100,
defense:90,
pitch:0
}),



createPlayer(
"이재현",
"삼성",
"S",
"유격수",
{
power:75,
contact:80,
speed:80,
defense:85,
pitch:0
}),



createPlayer(
"김영웅",
"삼성",
"A",
"3루수",
{
power:80,
contact:70,
speed:75,
defense:75,
pitch:0
}),



createPlayer(
"원태인",
"삼성",
"S",
"투수",
{
power:40,
contact:30,
speed:40,
defense:85,
pitch:92
}),



createPlayer(
"백정현",
"삼성",
"A",
"투수",
{
power:35,
contact:25,
speed:35,
defense:75,
pitch:82
}),



createPlayer(
"김재윤",
"삼성",
"S",
"투수",
{
power:35,
contact:25,
speed:35,
defense:85,
pitch:88
}),



createPlayer(
"임창민",
"삼성",
"S",
"투수",
{
power:30,
contact:20,
speed:35,
defense:85,
pitch:86
}),



createPlayer(
"박병호",
"삼성",
"골든글러브",
"1루수",
{
power:100,
contact:75,
speed:40,
defense:70,
pitch:0
})

];



allPlayers.push(
...SamsungPlayers
);// ==================================
// 삼성 라이온즈 추가 선수
// 2/10 계속
// ==================================


SamsungPlayers.push(



createPlayer(
"최형우",
"삼성",
"레전드",
"외야수",
{
power:100,
contact:105,
speed:55,
defense:80,
pitch:0
}),



createPlayer(
"최형우",
"삼성",
"시그니처",
"외야수",
{
power:95,
contact:100,
speed:50,
defense:75,
pitch:0
}),



createPlayer(
"박석민",
"삼성",
"레전드",
"3루수",
{
power:95,
contact:90,
speed:50,
defense:85,
pitch:0
}),



createPlayer(
"박석민",
"삼성",
"시그니처",
"3루수",
{
power:90,
contact:85,
speed:45,
defense:80,
pitch:0
}),



createPlayer(
"김상수",
"삼성",
"시그니처",
"유격수",
{
power:65,
contact:85,
speed:80,
defense:90,
pitch:0
}),



createPlayer(
"류지혁",
"삼성",
"A",
"내야수",
{
power:65,
contact:80,
speed:70,
defense:75,
pitch:0
}),



createPlayer(
"전병우",
"삼성",
"A",
"내야수",
{
power:70,
contact:65,
speed:60,
defense:70,
pitch:0
}),



createPlayer(
"김재상",
"삼성",
"A",
"내야수",
{
power:55,
contact:70,
speed:75,
defense:70,
pitch:0
}),



createPlayer(
"강한울",
"삼성",
"A",
"내야수",
{
power:55,
contact:75,
speed:75,
defense:75,
pitch:0
}),



createPlayer(
"김헌곤",
"삼성",
"A",
"외야수",
{
power:60,
contact:70,
speed:70,
defense:80,
pitch:0
}),



createPlayer(
"김현준",
"삼성",
"A",
"외야수",
{
power:65,
contact:75,
speed:80,
defense:85,
pitch:0
}),



createPlayer(
"김동엽",
"삼성",
"A",
"외야수",
{
power:85,
contact:65,
speed:50,
defense:60,
pitch:0
}),



createPlayer(
"이성규",
"삼성",
"A",
"외야수",
{
power:75,
contact:65,
speed:65,
defense:70,
pitch:0
}),



createPlayer(
"김성윤",
"삼성",
"A",
"외야수",
{
power:55,
contact:70,
speed:90,
defense:80,
pitch:0
}),



createPlayer(
"이병헌",
"삼성",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:70,
pitch:78
}),



createPlayer(
"이승현",
"삼성",
"S",
"투수",
{
power:35,
contact:25,
speed:40,
defense:80,
pitch:88
}),



createPlayer(
"황동재",
"삼성",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:65,
pitch:75
}),



createPlayer(
"김윤수",
"삼성",
"A",
"투수",
{
power:30,
contact:20,
speed:40,
defense:65,
pitch:78
}),



createPlayer(
"최채흥",
"삼성",
"A",
"투수",
{
power:35,
contact:25,
speed:35,
defense:70,
pitch:80
}),



createPlayer(
"장필준",
"삼성",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:75,
pitch:80
}),



createPlayer(
"우규민",
"삼성",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:80,
pitch:82
}),



createPlayer(
"김태훈",
"삼성",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:70,
pitch:76
}),



createPlayer(
"최하늘",
"삼성",
"일반",
"투수",
{
power:25,
contact:20,
speed:30,
defense:60,
pitch:68
}),



createPlayer(
"김재성",
"삼성",
"A",
"포수",
{
power:55,
contact:65,
speed:40,
defense:75,
pitch:0
}),



createPlayer(
"이병헌",
"삼성",
"일반",
"포수",
{
power:45,
contact:55,
speed:35,
defense:60,
pitch:0
}),



createPlayer(
"안주형",
"삼성",
"일반",
"내야수",
{
power:50,
contact:60,
speed:65,
defense:65,
pitch:0
}),



createPlayer(
"양도근",
"삼성",
"일반",
"내야수",
{
power:50,
contact:60,
speed:60,
defense:60,
pitch:0
}),



createPlayer(
"윤정빈",
"삼성",
"A",
"외야수",
{
power:65,
contact:70,
speed:75,
defense:70,
pitch:0
}),



createPlayer(
"박준영",
"삼성",
"일반",
"투수",
{
power:25,
contact:20,
speed:30,
defense:60,
pitch:70
}),



createPlayer(
"김서준",
"삼성",
"일반",
"투수",
{
power:25,
contact:20,
speed:30,
defense:60,
pitch:69
})


);// ==================================
// LG 트윈스
// 3/10
// ==================================


const LGPlayers = [



// ==========================
// 레전드 + 시그니처
// ==========================


createPlayer(
"김용수",
"LG",
"레전드",
"투수",
{
power:40,
contact:25,
speed:35,
defense:105,
pitch:110
}),


createPlayer(
"김용수",
"LG",
"시그니처",
"투수",
{
power:35,
contact:25,
speed:35,
defense:95,
pitch:100
}),



createPlayer(
"박용택",
"LG",
"레전드",
"외야수",
{
power:90,
contact:105,
speed:75,
defense:90,
pitch:0
}),


createPlayer(
"박용택",
"LG",
"시그니처",
"외야수",
{
power:85,
contact:100,
speed:70,
defense:85,
pitch:0
}),



createPlayer(
"이병규",
"LG",
"레전드",
"외야수",
{
power:95,
contact:105,
speed:90,
defense:100,
pitch:0
}),


createPlayer(
"이병규",
"LG",
"시그니처",
"외야수",
{
power:90,
contact:100,
speed:85,
defense:95,
pitch:0
}),



createPlayer(
"봉중근",
"LG",
"레전드",
"투수",
{
power:40,
contact:30,
speed:35,
defense:95,
pitch:100
}),


createPlayer(
"봉중근",
"LG",
"시그니처",
"투수",
{
power:35,
contact:25,
speed:35,
defense:85,
pitch:92
}),



createPlayer(
"조인성",
"LG",
"레전드",
"포수",
{
power:85,
contact:80,
speed:35,
defense:105,
pitch:0
}),


createPlayer(
"조인성",
"LG",
"시그니처",
"포수",
{
power:80,
contact:75,
speed:30,
defense:95,
pitch:0
}),




// ==========================
// 주요 선수
// ==========================


createPlayer(
"김현수",
"LG",
"골든글러브",
"외야수",
{
power:90,
contact:100,
speed:60,
defense:85,
pitch:0
}),



createPlayer(
"오지환",
"LG",
"시그니처",
"유격수",
{
power:85,
contact:85,
speed:80,
defense:105,
pitch:0
}),



createPlayer(
"홍창기",
"LG",
"S",
"외야수",
{
power:70,
contact:95,
speed:85,
defense:90,
pitch:0
}),



createPlayer(
"문보경",
"LG",
"S",
"3루수",
{
power:85,
contact:85,
speed:70,
defense:85,
pitch:0
}),



createPlayer(
"박동원",
"LG",
"S",
"포수",
{
power:90,
contact:80,
speed:45,
defense:90,
pitch:0
}),



createPlayer(
"문성주",
"LG",
"A",
"외야수",
{
power:65,
contact:85,
speed:80,
defense:75,
pitch:0
}),



createPlayer(
"신민재",
"LG",
"S",
"2루수",
{
power:55,
contact:85,
speed:100,
defense:90,
pitch:0
}),



createPlayer(
"임찬규",
"LG",
"S",
"투수",
{
power:35,
contact:25,
speed:35,
defense:85,
pitch:90
}),



createPlayer(
"최원태",
"LG",
"S",
"투수",
{
power:40,
contact:25,
speed:35,
defense:85,
pitch:88
}),



createPlayer(
"정우영",
"LG",
"S",
"투수",
{
power:30,
contact:20,
speed:35,
defense:90,
pitch:92
})

];



allPlayers.push(
...LGPlayers
);// ==================================
// LG 트윈스 추가 선수
// 3/10 계속
// ==================================


LGPlayers.push(



createPlayer(
"류지현",
"LG",
"레전드",
"유격수",
{
power:75,
contact:95,
speed:85,
defense:100,
pitch:0
}),


createPlayer(
"류지현",
"LG",
"시그니처",
"유격수",
{
power:70,
contact:90,
speed:80,
defense:95,
pitch:0
}),



createPlayer(
"이상훈",
"LG",
"레전드",
"투수",
{
power:45,
contact:30,
speed:35,
defense:100,
pitch:110
}),


createPlayer(
"이상훈",
"LG",
"시그니처",
"투수",
{
power:40,
contact:25,
speed:35,
defense:90,
pitch:100
}),



createPlayer(
"정성훈",
"LG",
"레전드",
"3루수",
{
power:85,
contact:95,
speed:60,
defense:90,
pitch:0
}),


createPlayer(
"정성훈",
"LG",
"시그니처",
"3루수",
{
power:80,
contact:90,
speed:55,
defense:85,
pitch:0
}),



createPlayer(
"서용빈",
"LG",
"레전드",
"1루수",
{
power:85,
contact:90,
speed:60,
defense:85,
pitch:0
}),


createPlayer(
"서용빈",
"LG",
"시그니처",
"1루수",
{
power:80,
contact:85,
speed:55,
defense:80,
pitch:0
}),



createPlayer(
"김민성",
"LG",
"A",
"3루수",
{
power:70,
contact:75,
speed:60,
defense:85,
pitch:0
}),



createPlayer(
"김주성",
"LG",
"A",
"내야수",
{
power:65,
contact:70,
speed:75,
defense:80,
pitch:0
}),



createPlayer(
"정주현",
"LG",
"A",
"2루수",
{
power:60,
contact:70,
speed:75,
defense:75,
pitch:0
}),



createPlayer(
"손호영",
"LG",
"A",
"내야수",
{
power:75,
contact:75,
speed:80,
defense:70,
pitch:0
}),



createPlayer(
"채은성",
"LG",
"골든글러브",
"외야수",
{
power:90,
contact:85,
speed:55,
defense:75,
pitch:0
}),



createPlayer(
"이천웅",
"LG",
"A",
"외야수",
{
power:60,
contact:80,
speed:75,
defense:80,
pitch:0
}),



createPlayer(
"이형종",
"LG",
"A",
"외야수",
{
power:80,
contact:70,
speed:60,
defense:70,
pitch:0
}),



createPlayer(
"허도환",
"LG",
"A",
"포수",
{
power:55,
contact:70,
speed:35,
defense:80,
pitch:0
}),



createPlayer(
"김기연",
"LG",
"A",
"포수",
{
power:60,
contact:65,
speed:40,
defense:75,
pitch:0
}),



createPlayer(
"고우석",
"LG",
"S",
"투수",
{
power:35,
contact:25,
speed:35,
defense:90,
pitch:95
}),



createPlayer(
"김진성",
"LG",
"S",
"투수",
{
power:30,
contact:20,
speed:35,
defense:85,
pitch:88
}),



createPlayer(
"유영찬",
"LG",
"S",
"투수",
{
power:35,
contact:25,
speed:40,
defense:85,
pitch:90
}),



createPlayer(
"손주영",
"LG",
"A",
"투수",
{
power:35,
contact:25,
speed:35,
defense:75,
pitch:82
}),



createPlayer(
"김윤식",
"LG",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:70,
pitch:78
}),



createPlayer(
"이민호",
"LG",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:70,
pitch:76
}),



createPlayer(
"최동환",
"LG",
"일반",
"투수",
{
power:25,
contact:20,
speed:30,
defense:60,
pitch:70
}),



createPlayer(
"진해수",
"LG",
"A",
"투수",
{
power:25,
contact:20,
speed:30,
defense:70,
pitch:75
}),



createPlayer(
"김현종",
"LG",
"일반",
"외야수",
{
power:55,
contact:60,
speed:70,
defense:65,
pitch:0
}),



createPlayer(
"안익훈",
"LG",
"일반",
"외야수",
{
power:50,
contact:65,
speed:80,
defense:75,
pitch:0
}),



createPlayer(
"이재원",
"LG",
"A",
"외야수",
{
power:75,
contact:60,
speed:55,
defense:65,
pitch:0
}),



createPlayer(
"강효종",
"LG",
"일반",
"투수",
{
power:25,
contact:20,
speed:30,
defense:60,
pitch:70
}),



createPlayer(
"배재준",
"LG",
"일반",
"투수",
{
power:25,
contact:20,
speed:30,
defense:60,
pitch:68
})



);// ==================================
// KIA 타이거즈
// 4/10
// ==================================


const KIAPlayers = [



// ==========================
// 레전드 + 시그니처
// ==========================


createPlayer(
"선동열",
"KIA",
"레전드",
"투수",
{
power:45,
contact:30,
speed:40,
defense:110,
pitch:115
}),


createPlayer(
"선동열",
"KIA",
"시그니처",
"투수",
{
power:40,
contact:25,
speed:35,
defense:100,
pitch:105
}),



createPlayer(
"이종범",
"KIA",
"레전드",
"유격수",
{
power:100,
contact:110,
speed:110,
defense:105,
pitch:0
}),


createPlayer(
"이종범",
"KIA",
"시그니처",
"유격수",
{
power:95,
contact:105,
speed:105,
defense:100,
pitch:0
}),



createPlayer(
"양현종",
"KIA",
"레전드",
"투수",
{
power:50,
contact:35,
speed:40,
defense:95,
pitch:105
}),


createPlayer(
"양현종",
"KIA",
"시그니처",
"투수",
{
power:45,
contact:30,
speed:35,
defense:85,
pitch:95
}),



createPlayer(
"김성한",
"KIA",
"레전드",
"1루수",
{
power:100,
contact:95,
speed:65,
defense:90,
pitch:0
}),


createPlayer(
"김성한",
"KIA",
"시그니처",
"1루수",
{
power:95,
contact:90,
speed:60,
defense:85,
pitch:0
}),



createPlayer(
"장성호",
"KIA",
"레전드",
"1루수",
{
power:90,
contact:100,
speed:60,
defense:85,
pitch:0
}),


createPlayer(
"장성호",
"KIA",
"시그니처",
"1루수",
{
power:85,
contact:95,
speed:55,
defense:80,
pitch:0
}),




// ==========================
// 주요 선수
// ==========================


createPlayer(
"김도영",
"KIA",
"시그니처",
"3루수",
{
power:95,
contact:95,
speed:105,
defense:85,
pitch:0
}),



createPlayer(
"나성범",
"KIA",
"골든글러브",
"외야수",
{
power:100,
contact:90,
speed:65,
defense:80,
pitch:0
}),



createPlayer(
"최형우",
"KIA",
"골든글러브",
"외야수",
{
power:100,
contact:105,
speed:45,
defense:75,
pitch:0
}),



createPlayer(
"소크라테스",
"KIA",
"S",
"외야수",
{
power:85,
contact:85,
speed:85,
defense:85,
pitch:0
}),



createPlayer(
"박찬호",
"KIA",
"A",
"유격수",
{
power:65,
contact:80,
speed:95,
defense:90,
pitch:0
}),



createPlayer(
"김선빈",
"KIA",
"S",
"2루수",
{
power:65,
contact:100,
speed:70,
defense:95,
pitch:0
}),



createPlayer(
"안치홍",
"KIA",
"골든글러브",
"2루수",
{
power:85,
contact:90,
speed:65,
defense:85,
pitch:0
}),



createPlayer(
"박동원",
"KIA",
"S",
"포수",
{
power:90,
contact:80,
speed:45,
defense:85,
pitch:0
}),



createPlayer(
"정해영",
"KIA",
"S",
"투수",
{
power:35,
contact:25,
speed:35,
defense:85,
pitch:92
}),



createPlayer(
"전상현",
"KIA",
"S",
"투수",
{
power:35,
contact:25,
speed:35,
defense:85,
pitch:88
})

];



allPlayers.push(
...KIAPlayers
);// ==================================
// KIA 타이거즈 추가 선수
// 4/10 계속
// ==================================


KIAPlayers.push(



createPlayer(
"김원섭",
"KIA",
"레전드",
"외야수",
{
power:75,
contact:90,
speed:85,
defense:95,
pitch:0
}),


createPlayer(
"김원섭",
"KIA",
"시그니처",
"외야수",
{
power:70,
contact:85,
speed:80,
defense:90,
pitch:0
}),



createPlayer(
"홍세완",
"KIA",
"레전드",
"유격수",
{
power:80,
contact:85,
speed:70,
defense:90,
pitch:0
}),


createPlayer(
"홍세완",
"KIA",
"시그니처",
"유격수",
{
power:75,
contact:80,
speed:65,
defense:85,
pitch:0
}),



createPlayer(
"김상현",
"KIA",
"레전드",
"3루수",
{
power:100,
contact:80,
speed:55,
defense:75,
pitch:0
}),


createPlayer(
"김상현",
"KIA",
"시그니처",
"3루수",
{
power:95,
contact:75,
speed:50,
defense:70,
pitch:0
}),



createPlayer(
"서재응",
"KIA",
"레전드",
"투수",
{
power:35,
contact:25,
speed:35,
defense:95,
pitch:95
}),


createPlayer(
"서재응",
"KIA",
"시그니처",
"투수",
{
power:30,
contact:20,
speed:35,
defense:85,
pitch:88
}),



createPlayer(
"이의리",
"KIA",
"A",
"투수",
{
power:40,
contact:25,
speed:40,
defense:75,
pitch:82
}),



createPlayer(
"윤영철",
"KIA",
"A",
"투수",
{
power:35,
contact:25,
speed:35,
defense:75,
pitch:80
}),



createPlayer(
"임기영",
"KIA",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:80,
pitch:82
}),



createPlayer(
"장현식",
"KIA",
"S",
"투수",
{
power:35,
contact:25,
speed:35,
defense:85,
pitch:88
}),



createPlayer(
"곽도규",
"KIA",
"A",
"투수",
{
power:30,
contact:20,
speed:40,
defense:70,
pitch:78
}),



createPlayer(
"황동하",
"KIA",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:70,
pitch:75
}),



createPlayer(
"최원준",
"KIA",
"A",
"외야수",
{
power:70,
contact:75,
speed:85,
defense:80,
pitch:0
}),



createPlayer(
"김호령",
"KIA",
"A",
"외야수",
{
power:55,
contact:65,
speed:95,
defense:100,
pitch:0
}),



createPlayer(
"이창진",
"KIA",
"A",
"외야수",
{
power:65,
contact:70,
speed:70,
defense:75,
pitch:0
}),



createPlayer(
"김태군",
"KIA",
"A",
"포수",
{
power:60,
contact:75,
speed:40,
defense:85,
pitch:0
}),



createPlayer(
"한승택",
"KIA",
"A",
"포수",
{
power:55,
contact:65,
speed:45,
defense:80,
pitch:0
}),



createPlayer(
"변우혁",
"KIA",
"A",
"1루수",
{
power:75,
contact:65,
speed:50,
defense:65,
pitch:0
}),



createPlayer(
"황대인",
"KIA",
"A",
"1루수",
{
power:70,
contact:65,
speed:45,
defense:60,
pitch:0
}),



createPlayer(
"류지혁",
"KIA",
"A",
"내야수",
{
power:65,
contact:75,
speed:70,
defense:75,
pitch:0
}),



createPlayer(
"김규성",
"KIA",
"일반",
"내야수",
{
power:50,
contact:60,
speed:70,
defense:65,
pitch:0
}),



createPlayer(
"김석환",
"KIA",
"일반",
"외야수",
{
power:65,
contact:55,
speed:55,
defense:60,
pitch:0
}),



createPlayer(
"김유신",
"KIA",
"일반",
"투수",
{
power:25,
contact:20,
speed:30,
defense:60,
pitch:70
}),



createPlayer(
"김기훈",
"KIA",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:65,
pitch:75
}),



createPlayer(
"김도현",
"KIA",
"일반",
"투수",
{
power:25,
contact:20,
speed:30,
defense:60,
pitch:68
}),



createPlayer(
"이준영",
"KIA",
"A",
"투수",
{
power:25,
contact:20,
speed:35,
defense:70,
pitch:75
}),



createPlayer(
"김현수",
"KIA",
"일반",
"포수",
{
power:45,
contact:55,
speed:30,
defense:60,
pitch:0
})



);// ==================================
// KT 위즈
// 5/10
// ==================================


const KTPlayers = [



// ==========================
// 레전드 + 시그니처
// ==========================


createPlayer(
"이강철",
"KT",
"레전드",
"투수",
{
power:40,
contact:25,
speed:35,
defense:105,
pitch:110
}),


createPlayer(
"이강철",
"KT",
"시그니처",
"투수",
{
power:35,
contact:25,
speed:35,
defense:95,
pitch:100
}),



createPlayer(
"박경수",
"KT",
"레전드",
"2루수",
{
power:80,
contact:90,
speed:55,
defense:105,
pitch:0
}),


createPlayer(
"박경수",
"KT",
"시그니처",
"2루수",
{
power:75,
contact:85,
speed:50,
defense:95,
pitch:0
}),



createPlayer(
"황재균",
"KT",
"시그니처",
"3루수",
{
power:90,
contact:85,
speed:70,
defense:85,
pitch:0
}),



createPlayer(
"강백호",
"KT",
"시그니처",
"외야수",
{
power:100,
contact:95,
speed:70,
defense:70,
pitch:0
}),



createPlayer(
"강백호",
"KT",
"레전드",
"외야수",
{
power:110,
contact:105,
speed:75,
defense:80,
pitch:0
}),



createPlayer(
"유한준",
"KT",
"레전드",
"외야수",
{
power:85,
contact:95,
speed:55,
defense:90,
pitch:0
}),


createPlayer(
"유한준",
"KT",
"시그니처",
"외야수",
{
power:80,
contact:90,
speed:50,
defense:85,
pitch:0
}),




// ==========================
// 주요 선수
// ==========================


createPlayer(
"고영표",
"KT",
"S",
"투수",
{
power:35,
contact:25,
speed:35,
defense:90,
pitch:95
}),



createPlayer(
"소형준",
"KT",
"S",
"투수",
{
power:40,
contact:30,
speed:35,
defense:85,
pitch:90
}),



createPlayer(
"쿠에바스",
"KT",
"S",
"투수",
{
power:40,
contact:25,
speed:35,
defense:90,
pitch:92
}),



createPlayer(
"벤자민",
"KT",
"S",
"투수",
{
power:40,
contact:25,
speed:35,
defense:85,
pitch:90
}),



createPlayer(
"엄상백",
"KT",
"A",
"투수",
{
power:35,
contact:25,
speed:35,
defense:75,
pitch:82
}),



createPlayer(
"장성우",
"KT",
"S",
"포수",
{
power:85,
contact:80,
speed:40,
defense:90,
pitch:0
}),



createPlayer(
"김상수",
"KT",
"A",
"유격수",
{
power:60,
contact:80,
speed:80,
defense:85,
pitch:0
}),



createPlayer(
"배정대",
"KT",
"S",
"외야수",
{
power:70,
contact:75,
speed:90,
defense:95,
pitch:0
}),



createPlayer(
"오재일",
"KT",
"A",
"1루수",
{
power:85,
contact:70,
speed:35,
defense:70,
pitch:0
}),



createPlayer(
"문상철",
"KT",
"A",
"1루수",
{
power:80,
contact:70,
speed:50,
defense:65,
pitch:0
})

];



allPlayers.push(
...KTPlayers
);// ==================================
// KT 위즈 추가 선수
// 5/10 계속
// ==================================


KTPlayers.push(



createPlayer(
"김민수",
"KT",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:70,
pitch:78
}),



createPlayer(
"박세진",
"KT",
"일반",
"투수",
{
power:25,
contact:20,
speed:30,
defense:60,
pitch:70
}),



createPlayer(
"김재윤",
"KT",
"S",
"투수",
{
power:35,
contact:25,
speed:35,
defense:85,
pitch:88
}),



createPlayer(
"주권",
"KT",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:80,
pitch:82
}),



createPlayer(
"손동현",
"KT",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:70,
pitch:78
}),



createPlayer(
"박영현",
"KT",
"S",
"투수",
{
power:35,
contact:25,
speed:40,
defense:90,
pitch:92
}),



createPlayer(
"김민혁",
"KT",
"A",
"외야수",
{
power:60,
contact:75,
speed:80,
defense:80,
pitch:0
}),



createPlayer(
"조용호",
"KT",
"A",
"외야수",
{
power:60,
contact:75,
speed:75,
defense:75,
pitch:0
}),



createPlayer(
"천성호",
"KT",
"A",
"내야수",
{
power:60,
contact:75,
speed:80,
defense:75,
pitch:0
}),



createPlayer(
"류현인",
"KT",
"A",
"내야수",
{
power:65,
contact:70,
speed:70,
defense:75,
pitch:0
}),



createPlayer(
"오윤석",
"KT",
"A",
"2루수",
{
power:65,
contact:70,
speed:65,
defense:75,
pitch:0
}),



createPlayer(
"신본기",
"KT",
"A",
"내야수",
{
power:55,
contact:65,
speed:60,
defense:85,
pitch:0
}),



createPlayer(
"김준태",
"KT",
"A",
"포수",
{
power:55,
contact:65,
speed:35,
defense:75,
pitch:0
}),



createPlayer(
"허도환",
"KT",
"A",
"포수",
{
power:50,
contact:70,
speed:35,
defense:80,
pitch:0
}),



createPlayer(
"박병호",
"KT",
"골든글러브",
"1루수",
{
power:100,
contact:75,
speed:40,
defense:70,
pitch:0
}),



createPlayer(
"김도현",
"KT",
"일반",
"투수",
{
power:25,
contact:20,
speed:30,
defense:60,
pitch:68
}),



createPlayer(
"한차현",
"KT",
"일반",
"투수",
{
power:25,
contact:20,
speed:30,
defense:60,
pitch:69
}),



createPlayer(
"이상동",
"KT",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:70,
pitch:75
}),



createPlayer(
"전용주",
"KT",
"일반",
"투수",
{
power:25,
contact:20,
speed:30,
defense:60,
pitch:70
}),



createPlayer(
"강건",
"KT",
"일반",
"투수",
{
power:25,
contact:20,
speed:30,
defense:60,
pitch:68
}),



createPlayer(
"안현민",
"KT",
"A",
"포수",
{
power:70,
contact:65,
speed:45,
defense:70,
pitch:0
}),



createPlayer(
"김병준",
"KT",
"일반",
"외야수",
{
power:50,
contact:60,
speed:75,
defense:70,
pitch:0
}),



createPlayer(
"정준영",
"KT",
"일반",
"외야수",
{
power:50,
contact:60,
speed:70,
defense:65,
pitch:0
}),



createPlayer(
"이시원",
"KT",
"일반",
"외야수",
{
power:55,
contact:60,
speed:70,
defense:65,
pitch:0
}),



createPlayer(
"강민성",
"KT",
"일반",
"내야수",
{
power:50,
contact:60,
speed:65,
defense:65,
pitch:0
}),



createPlayer(
"이호연",
"KT",
"A",
"내야수",
{
power:65,
contact:75,
speed:70,
defense:70,
pitch:0
}),



createPlayer(
"김영현",
"KT",
"일반",
"투수",
{
power:25,
contact:20,
speed:30,
defense:60,
pitch:70
}),



createPlayer(
"조대현",
"KT",
"일반",
"투수",
{
power:25,
contact:20,
speed:30,
defense:60,
pitch:68
}),



createPlayer(
"박준영",
"KT",
"일반",
"투수",
{
power:25,
contact:20,
speed:30,
defense:60,
pitch:70
}),



createPlayer(
"김민호",
"KT",
"일반",
"내야수",
{
power:50,
contact:60,
speed:60,
defense:65,
pitch:0
})



);// ==================================
// 두산 베어스
// 6/10
// ==================================


const DoosanPlayers = [



// ==========================
// 레전드 + 시그니처
// ==========================


createPlayer(
"박철순",
"두산",
"레전드",
"투수",
{
power:45,
contact:30,
speed:35,
defense:110,
pitch:110
}),


createPlayer(
"박철순",
"두산",
"시그니처",
"투수",
{
power:40,
contact:25,
speed:35,
defense:100,
pitch:100
}),



createPlayer(
"김동주",
"두산",
"레전드",
"3루수",
{
power:105,
contact:95,
speed:55,
defense:85,
pitch:0
}),


createPlayer(
"김동주",
"두산",
"시그니처",
"3루수",
{
power:100,
contact:90,
speed:50,
defense:80,
pitch:0
}),



createPlayer(
"홍성흔",
"두산",
"레전드",
"포수",
{
power:90,
contact:95,
speed:45,
defense:90,
pitch:0
}),


createPlayer(
"홍성흔",
"두산",
"시그니처",
"포수",
{
power:85,
contact:90,
speed:40,
defense:85,
pitch:0
}),



createPlayer(
"니퍼트",
"두산",
"레전드",
"투수",
{
power:45,
contact:30,
speed:35,
defense:100,
pitch:110
}),


createPlayer(
"니퍼트",
"두산",
"시그니처",
"투수",
{
power:40,
contact:25,
speed:35,
defense:90,
pitch:100
}),



createPlayer(
"양의지",
"두산",
"레전드",
"포수",
{
power:95,
contact:100,
speed:45,
defense:105,
pitch:0
}),


createPlayer(
"양의지",
"두산",
"시그니처",
"포수",
{
power:90,
contact:95,
speed:40,
defense:95,
pitch:0
}),




// ==========================
// 주요 선수
// ==========================


createPlayer(
"허경민",
"두산",
"시그니처",
"3루수",
{
power:80,
contact:90,
speed:70,
defense:95,
pitch:0
}),



createPlayer(
"정수빈",
"두산",
"S",
"외야수",
{
power:60,
contact:85,
speed:100,
defense:100,
pitch:0
}),



createPlayer(
"김재환",
"두산",
"골든글러브",
"외야수",
{
power:100,
contact:85,
speed:45,
defense:70,
pitch:0
}),



createPlayer(
"양석환",
"두산",
"S",
"1루수",
{
power:90,
contact:80,
speed:50,
defense:75,
pitch:0
}),



createPlayer(
"곽빈",
"두산",
"S",
"투수",
{
power:40,
contact:25,
speed:35,
defense:85,
pitch:95
}),



createPlayer(
"최원준",
"두산",
"S",
"투수",
{
power:35,
contact:25,
speed:35,
defense:80,
pitch:88
}),



createPlayer(
"이영하",
"두산",
"A",
"투수",
{
power:35,
contact:25,
speed:35,
defense:75,
pitch:82
}),



createPlayer(
"김택연",
"두산",
"S",
"투수",
{
power:35,
contact:25,
speed:40,
defense:90,
pitch:92
}),



createPlayer(
"강승호",
"두산",
"A",
"2루수",
{
power:75,
contact:75,
speed:70,
defense:75,
pitch:0
}),



createPlayer(
"전민재",
"두산",
"A",
"내야수",
{
power:55,
contact:70,
speed:80,
defense:75,
pitch:0
})

];



allPlayers.push(
...DoosanPlayers
);// ==================================
// 두산 베어스 추가 선수
// 6/10 계속
// ==================================


DoosanPlayers.push(



createPlayer(
"이종욱",
"두산",
"레전드",
"외야수",
{
power:75,
contact:90,
speed:100,
defense:95,
pitch:0
}),


createPlayer(
"이종욱",
"두산",
"시그니처",
"외야수",
{
power:70,
contact:85,
speed:95,
defense:90,
pitch:0
}),



createPlayer(
"장원준",
"두산",
"레전드",
"투수",
{
power:40,
contact:25,
speed:35,
defense:95,
pitch:100
}),


createPlayer(
"장원준",
"두산",
"시그니처",
"투수",
{
power:35,
contact:25,
speed:35,
defense:85,
pitch:92
}),



createPlayer(
"오재원",
"두산",
"레전드",
"2루수",
{
power:75,
contact:85,
speed:90,
defense:100,
pitch:0
}),


createPlayer(
"오재원",
"두산",
"시그니처",
"2루수",
{
power:70,
contact:80,
speed:85,
defense:95,
pitch:0
}),



createPlayer(
"김강률",
"두산",
"S",
"투수",
{
power:35,
contact:20,
speed:35,
defense:85,
pitch:88
}),



createPlayer(
"정철원",
"두산",
"S",
"투수",
{
power:35,
contact:25,
speed:40,
defense:85,
pitch:90
}),



createPlayer(
"홍건희",
"두산",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:80,
pitch:82
}),



createPlayer(
"박치국",
"두산",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:75,
pitch:80
}),



createPlayer(
"이병헌",
"두산",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:70,
pitch:78
}),



createPlayer(
"브랜든",
"두산",
"S",
"투수",
{
power:40,
contact:25,
speed:35,
defense:85,
pitch:90
}),



createPlayer(
"알칸타라",
"두산",
"S",
"투수",
{
power:45,
contact:30,
speed:35,
defense:90,
pitch:95
}),



createPlayer(
"김재호",
"두산",
"A",
"유격수",
{
power:60,
contact:80,
speed:70,
defense:95,
pitch:0
}),



createPlayer(
"박준영",
"두산",
"A",
"내야수",
{
power:65,
contact:65,
speed:75,
defense:70,
pitch:0
}),



createPlayer(
"서예일",
"두산",
"일반",
"내야수",
{
power:50,
contact:60,
speed:65,
defense:65,
pitch:0
}),



createPlayer(
"김기연",
"두산",
"A",
"포수",
{
power:60,
contact:65,
speed:40,
defense:75,
pitch:0
}),



createPlayer(
"장승현",
"두산",
"A",
"포수",
{
power:55,
contact:65,
speed:35,
defense:75,
pitch:0
}),



createPlayer(
"김인태",
"두산",
"A",
"외야수",
{
power:60,
contact:70,
speed:75,
defense:75,
pitch:0
}),



createPlayer(
"조수행",
"두산",
"A",
"외야수",
{
power:55,
contact:70,
speed:95,
defense:85,
pitch:0
}),



createPlayer(
"안재석",
"두산",
"A",
"유격수",
{
power:55,
contact:65,
speed:70,
defense:80,
pitch:0
}),



createPlayer(
"김대한",
"두산",
"일반",
"외야수",
{
power:55,
contact:55,
speed:70,
defense:65,
pitch:0
}),



createPlayer(
"이유찬",
"두산",
"A",
"내야수",
{
power:60,
contact:70,
speed:80,
defense:70,
pitch:0
}),



createPlayer(
"김민혁",
"두산",
"A",
"내야수",
{
power:65,
contact:70,
speed:60,
defense:70,
pitch:0
}),



createPlayer(
"박계범",
"두산",
"A",
"내야수",
{
power:60,
contact:65,
speed:65,
defense:75,
pitch:0
}),



createPlayer(
"최승용",
"두산",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:70,
pitch:78
}),



createPlayer(
"김유성",
"두산",
"일반",
"투수",
{
power:25,
contact:20,
speed:30,
defense:60,
pitch:70
}),



createPlayer(
"이주엽",
"두산",
"일반",
"투수",
{
power:25,
contact:20,
speed:30,
defense:60,
pitch:68
}),



createPlayer(
"박웅",
"두산",
"일반",
"투수",
{
power:25,
contact:20,
speed:30,
defense:60,
pitch:68
}),



createPlayer(
"윤수호",
"두산",
"일반",
"투수",
{
power:25,
contact:20,
speed:30,
defense:60,
pitch:70
})


);// ==================================
// 롯데 자이언츠 추가 선수
// 7/10 계속
// ==================================


LottePlayers.push(



createPlayer(
"김주찬",
"롯데",
"레전드",
"외야수",
{
power:80,
contact:95,
speed:90,
defense:85,
pitch:0
}),


createPlayer(
"김주찬",
"롯데",
"시그니처",
"외야수",
{
power:75,
contact:90,
speed:85,
defense:80,
pitch:0
}),



createPlayer(
"홍성흔",
"롯데",
"레전드",
"포수",
{
power:90,
contact:95,
speed:45,
defense:90,
pitch:0
}),


createPlayer(
"홍성흔",
"롯데",
"시그니처",
"포수",
{
power:85,
contact:90,
speed:40,
defense:85,
pitch:0
}),



createPlayer(
"강민호",
"롯데",
"레전드",
"포수",
{
power:90,
contact:90,
speed:45,
defense:100,
pitch:0
}),


createPlayer(
"강민호",
"롯데",
"시그니처",
"포수",
{
power:85,
contact:85,
speed:40,
defense:95,
pitch:0
}),



createPlayer(
"구승민",
"롯데",
"S",
"투수",
{
power:35,
contact:25,
speed:35,
defense:85,
pitch:88
}),



createPlayer(
"진승현",
"롯데",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:70,
pitch:76
}),



createPlayer(
"최준용",
"롯데",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:75,
pitch:82
}),



createPlayer(
"김상수",
"롯데",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:75,
pitch:80
}),



createPlayer(
"이인복",
"롯데",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:70,
pitch:76
}),



createPlayer(
"심재민",
"롯데",
"A",
"투수",
{
power:25,
contact:20,
speed:30,
defense:70,
pitch:75
}),



createPlayer(
"이민석",
"롯데",
"A",
"투수",
{
power:35,
contact:20,
speed:35,
defense:65,
pitch:78
}),



createPlayer(
"김민석",
"롯데",
"A",
"외야수",
{
power:55,
contact:75,
speed:90,
defense:70,
pitch:0
}),



createPlayer(
"황성빈",
"롯데",
"A",
"외야수",
{
power:55,
contact:70,
speed:100,
defense:75,
pitch:0
}),



createPlayer(
"나승엽",
"롯데",
"A",
"내야수",
{
power:75,
contact:70,
speed:65,
defense:70,
pitch:0
}),



createPlayer(
"한동희",
"롯데",
"A",
"3루수",
{
power:80,
contact:70,
speed:55,
defense:70,
pitch:0
}),



createPlayer(
"김민성",
"롯데",
"A",
"내야수",
{
power:70,
contact:75,
speed:60,
defense:80,
pitch:0
}),



createPlayer(
"노진혁",
"롯데",
"A",
"유격수",
{
power:75,
contact:75,
speed:55,
defense:80,
pitch:0
}),



createPlayer(
"박승욱",
"롯데",
"A",
"내야수",
{
power:60,
contact:70,
speed:75,
defense:75,
pitch:0
}),



createPlayer(
"이학주",
"롯데",
"A",
"유격수",
{
power:65,
contact:65,
speed:70,
defense:80,
pitch:0
}),



createPlayer(
"손성빈",
"롯데",
"A",
"포수",
{
power:60,
contact:60,
speed:40,
defense:75,
pitch:0
}),



createPlayer(
"정훈",
"롯데",
"A",
"1루수",
{
power:70,
contact:75,
speed:55,
defense:70,
pitch:0
}),



createPlayer(
"오선진",
"롯데",
"일반",
"내야수",
{
power:55,
contact:65,
speed:55,
defense:70,
pitch:0
}),



createPlayer(
"최항",
"롯데",
"일반",
"내야수",
{
power:55,
contact:65,
speed:60,
defense:65,
pitch:0
}),



createPlayer(
"김동혁",
"롯데",
"일반",
"투수",
{
power:25,
contact:20,
speed:30,
defense:60,
pitch:70
}),



createPlayer(
"이태연",
"롯데",
"일반",
"투수",
{
power:25,
contact:20,
speed:30,
defense:60,
pitch:68
}),



createPlayer(
"박진",
"롯데",
"일반",
"투수",
{
power:25,
contact:20,
speed:30,
defense:60,
pitch:69
}),



createPlayer(
"강태율",
"롯데",
"일반",
"포수",
{
power:45,
contact:55,
speed:35,
defense:60,
pitch:0
})



);// ==================================
// 한화 이글스 추가 선수
// 8/10 계속
// ==================================


HanwhaPlayers.push(



createPlayer(
"이정훈",
"한화",
"레전드",
"외야수",
{
power:80,
contact:95,
speed:80,
defense:90,
pitch:0
}),


createPlayer(
"이정훈",
"한화",
"시그니처",
"외야수",
{
power:75,
contact:90,
speed:75,
defense:85,
pitch:0
}),



createPlayer(
"이영우",
"한화",
"레전드",
"외야수",
{
power:75,
contact:90,
speed:85,
defense:90,
pitch:0
}),


createPlayer(
"이영우",
"한화",
"시그니처",
"외야수",
{
power:70,
contact:85,
speed:80,
defense:85,
pitch:0
}),



createPlayer(
"정민철",
"한화",
"레전드",
"투수",
{
power:40,
contact:25,
speed:35,
defense:105,
pitch:110
}),


createPlayer(
"정민철",
"한화",
"시그니처",
"투수",
{
power:35,
contact:25,
speed:35,
defense:95,
pitch:100
}),



createPlayer(
"양성우",
"한화",
"A",
"외야수",
{
power:60,
contact:70,
speed:75,
defense:80,
pitch:0
}),



createPlayer(
"이진영",
"한화",
"A",
"외야수",
{
power:65,
contact:75,
speed:70,
defense:75,
pitch:0
}),



createPlayer(
"김인환",
"한화",
"A",
"1루수",
{
power:75,
contact:65,
speed:45,
defense:65,
pitch:0
}),



createPlayer(
"노수광",
"한화",
"A",
"외야수",
{
power:60,
contact:75,
speed:85,
defense:75,
pitch:0
}),



createPlayer(
"이도윤",
"한화",
"A",
"내야수",
{
power:55,
contact:70,
speed:75,
defense:80,
pitch:0
}),



createPlayer(
"김태균",
"한화",
"골든글러브",
"1루수",
{
power:95,
contact:100,
speed:40,
defense:80,
pitch:0
}),



createPlayer(
"박상언",
"한화",
"A",
"포수",
{
power:55,
contact:65,
speed:35,
defense:75,
pitch:0
}),



createPlayer(
"이성원",
"한화",
"일반",
"포수",
{
power:45,
contact:55,
speed:35,
defense:60,
pitch:0
}),



createPlayer(
"황영묵",
"한화",
"A",
"내야수",
{
power:60,
contact:75,
speed:75,
defense:70,
pitch:0
}),



createPlayer(
"김건",
"한화",
"일반",
"투수",
{
power:25,
contact:20,
speed:30,
defense:60,
pitch:70
}),



createPlayer(
"한승주",
"한화",
"일반",
"투수",
{
power:25,
contact:20,
speed:30,
defense:60,
pitch:68
}),



createPlayer(
"김규연",
"한화",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:70,
pitch:75
}),



createPlayer(
"장민재",
"한화",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:75,
pitch:78
}),



createPlayer(
"김범수",
"한화",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:80,
pitch:82
}),



createPlayer(
"박상원",
"한화",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:80,
pitch:82
}),



createPlayer(
"김종수",
"한화",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:75,
pitch:80
}),



createPlayer(
"윤대경",
"한화",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:75,
pitch:80
}),



createPlayer(
"김민우",
"한화",
"S",
"투수",
{
power:35,
contact:25,
speed:35,
defense:85,
pitch:88
}),



createPlayer(
"배지환",
"한화",
"일반",
"내야수",
{
power:55,
contact:65,
speed:80,
defense:65,
pitch:0
}),



createPlayer(
"문현빈",
"한화",
"A",
"내야수",
{
power:65,
contact:75,
speed:75,
defense:70,
pitch:0
}),



createPlayer(
"오선진",
"한화",
"A",
"내야수",
{
power:55,
contact:65,
speed:55,
defense:75,
pitch:0
}),



createPlayer(
"김강민",
"한화",
"골든글러브",
"외야수",
{
power:70,
contact:75,
speed:65,
defense:100,
pitch:0
}),



createPlayer(
"이원석",
"한화",
"일반",
"내야수",
{
power:55,
contact:60,
speed:50,
defense:65,
pitch:0
})



);// ==================================
// 키움 히어로즈
// 10/10
// ==================================


const KiwoomPlayers = [


// ==========================
// 레전드 + 시그니처
// ==========================


createPlayer(
"이택근",
"키움",
"레전드",
"외야수",
{
power:85,
contact:95,
speed:75,
defense:90,
pitch:0
}),


createPlayer(
"이택근",
"키움",
"시그니처",
"외야수",
{
power:80,
contact:90,
speed:70,
defense:85,
pitch:0
}),



createPlayer(
"서건창",
"키움",
"레전드",
"2루수",
{
power:75,
contact:105,
speed:95,
defense:90,
pitch:0
}),


createPlayer(
"서건창",
"키움",
"시그니처",
"2루수",
{
power:70,
contact:100,
speed:90,
defense:85,
pitch:0
}),



createPlayer(
"박병호",
"키움",
"레전드",
"1루수",
{
power:115,
contact:85,
speed:40,
defense:80,
pitch:0
}),


createPlayer(
"박병호",
"키움",
"시그니처",
"1루수",
{
power:110,
contact:80,
speed:35,
defense:75,
pitch:0
}),



createPlayer(
"강정호",
"키움",
"레전드",
"유격수",
{
power:110,
contact:100,
speed:75,
defense:95,
pitch:0
}),


createPlayer(
"강정호",
"키움",
"시그니처",
"유격수",
{
power:105,
contact:95,
speed:70,
defense:90,
pitch:0
}),



createPlayer(
"김하성",
"키움",
"레전드",
"유격수",
{
power:95,
contact:95,
speed:100,
defense:110,
pitch:0
}),


createPlayer(
"김하성",
"키움",
"시그니처",
"유격수",
{
power:90,
contact:90,
speed:95,
defense:105,
pitch:0
}),




// ==========================
// 주요 선수
// ==========================


createPlayer(
"이정후",
"키움",
"골든글러브",
"외야수",
{
power:85,
contact:110,
speed:90,
defense:100,
pitch:0
}),



createPlayer(
"송성문",
"키움",
"S",
"내야수",
{
power:80,
contact:85,
speed:65,
defense:80,
pitch:0
}),



createPlayer(
"김혜성",
"키움",
"S",
"2루수",
{
power:70,
contact:90,
speed:105,
defense:100,
pitch:0
}),



createPlayer(
"안우진",
"키움",
"시그니처",
"투수",
{
power:45,
contact:25,
speed:40,
defense:100,
pitch:110
}),



createPlayer(
"후라도",
"키움",
"S",
"투수",
{
power:40,
contact:25,
speed:35,
defense:85,
pitch:90
}),



createPlayer(
"헤이수스",
"키움",
"S",
"투수",
{
power:40,
contact:25,
speed:35,
defense:85,
pitch:90
}),



createPlayer(
"조상우",
"키움",
"S",
"투수",
{
power:35,
contact:25,
speed:35,
defense:90,
pitch:95
}),



createPlayer(
"주승우",
"키움",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:75,
pitch:80
}),



createPlayer(
"김재현",
"키움",
"A",
"포수",
{
power:55,
contact:70,
speed:40,
defense:80,
pitch:0
}),



createPlayer(
"전준표",
"키움",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:70,
pitch:78
})

];


allPlayers.push(
...KiwoomPlayers
);// ==================================
// 키움 히어로즈 추가 선수
// ==================================


KiwoomPlayers.push(



createPlayer(
"이숭용",
"키움",
"레전드",
"1루수",
{
power:80,
contact:90,
speed:55,
defense:85,
pitch:0
}),



createPlayer(
"이숭용",
"키움",
"시그니처",
"1루수",
{
power:75,
contact:85,
speed:50,
defense:80,
pitch:0
}),



createPlayer(
"마정길",
"키움",
"레전드",
"투수",
{
power:35,
contact:25,
speed:35,
defense:90,
pitch:95
}),



createPlayer(
"마정길",
"키움",
"시그니처",
"투수",
{
power:30,
contact:20,
speed:35,
defense:80,
pitch:85
}),



createPlayer(
"김웅빈",
"키움",
"A",
"내야수",
{
power:65,
contact:65,
speed:55,
defense:70,
pitch:0
}),



createPlayer(
"임병욱",
"키움",
"A",
"외야수",
{
power:70,
contact:65,
speed:80,
defense:75,
pitch:0
}),



createPlayer(
"박준태",
"키움",
"A",
"외야수",
{
power:55,
contact:70,
speed:85,
defense:80,
pitch:0
}),



createPlayer(
"이주형",
"키움",
"S",
"외야수",
{
power:75,
contact:85,
speed:90,
defense:75,
pitch:0
}),



createPlayer(
"도슨",
"키움",
"S",
"외야수",
{
power:80,
contact:85,
speed:80,
defense:75,
pitch:0
}),



createPlayer(
"김태진",
"키움",
"A",
"내야수",
{
power:55,
contact:75,
speed:80,
defense:75,
pitch:0
}),



createPlayer(
"전병우",
"키움",
"A",
"내야수",
{
power:70,
contact:65,
speed:55,
defense:70,
pitch:0
}),



createPlayer(
"김휘집",
"키움",
"A",
"내야수",
{
power:65,
contact:70,
speed:65,
defense:75,
pitch:0
}),



createPlayer(
"신준우",
"키움",
"A",
"유격수",
{
power:55,
contact:60,
speed:70,
defense:75,
pitch:0
}),



createPlayer(
"박동원",
"키움",
"A",
"포수",
{
power:80,
contact:75,
speed:40,
defense:85,
pitch:0
}),



createPlayer(
"이지영",
"키움",
"A",
"포수",
{
power:55,
contact:75,
speed:40,
defense:85,
pitch:0
}),



createPlayer(
"김동헌",
"키움",
"A",
"포수",
{
power:60,
contact:70,
speed:45,
defense:75,
pitch:0
}),



createPlayer(
"최원태",
"키움",
"S",
"투수",
{
power:35,
contact:25,
speed:35,
defense:85,
pitch:90
}),



createPlayer(
"장재영",
"키움",
"A",
"투수",
{
power:35,
contact:20,
speed:40,
defense:70,
pitch:80
}),



createPlayer(
"김선기",
"키움",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:75,
pitch:80
}),



createPlayer(
"하영민",
"키움",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:75,
pitch:78
}),



createPlayer(
"문성현",
"키움",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:75,
pitch:78
}),



createPlayer(
"양지율",
"키움",
"일반",
"투수",
{
power:25,
contact:20,
speed:30,
defense:60,
pitch:70
}),



createPlayer(
"박윤",
"키움",
"일반",
"내야수",
{
power:50,
contact:60,
speed:55,
defense:60,
pitch:0
}),



createPlayer(
"김수환",
"키움",
"일반",
"내야수",
{
power:55,
contact:55,
speed:45,
defense:60,
pitch:0
}),



createPlayer(
"주성원",
"키움",
"일반",
"외야수",
{
power:50,
contact:60,
speed:65,
defense:60,
pitch:0
}),



createPlayer(
"박주홍",
"키움",
"일반",
"외야수",
{
power:55,
contact:55,
speed:60,
defense:60,
pitch:0
}),



createPlayer(
"김건희",
"키움",
"A",
"포수",
{
power:65,
contact:65,
speed:45,
defense:70,
pitch:0
}),



createPlayer(
"오상원",
"키움",
"일반",
"투수",
{
power:25,
contact:20,
speed:30,
defense:60,
pitch:68
}),



createPlayer(
"김동욱",
"키움",
"일반",
"투수",
{
power:25,
contact:20,
speed:30,
defense:60,
pitch:68
}),



createPlayer(
"김병휘",
"키움",
"일반",
"내야수",
{
power:50,
contact:60,
speed:60,
defense:65,
pitch:0
})



);// ==================================
// NC 다이노스
// 레전드 + 시그니처
// ==================================


const NCPlayers = [


// ==========================
// 레전드 + 시그니처
// ==========================


createPlayer(
"이호준",
"NC",
"레전드",
"1루수",
{
power:95,
contact:95,
speed:45,
defense:85,
pitch:0
}),


createPlayer(
"이호준",
"NC",
"시그니처",
"1루수",
{
power:90,
contact:90,
speed:40,
defense:80,
pitch:0
}),



createPlayer(
"손민한",
"NC",
"레전드",
"투수",
{
power:40,
contact:25,
speed:35,
defense:105,
pitch:105
}),


createPlayer(
"손민한",
"NC",
"시그니처",
"투수",
{
power:35,
contact:20,
speed:35,
defense:95,
pitch:95
}),



createPlayer(
"나성범",
"NC",
"레전드",
"외야수",
{
power:105,
contact:95,
speed:65,
defense:85,
pitch:0
}),


createPlayer(
"나성범",
"NC",
"시그니처",
"외야수",
{
power:100,
contact:90,
speed:60,
defense:80,
pitch:0
}),



createPlayer(
"박민우",
"NC",
"레전드",
"2루수",
{
power:75,
contact:100,
speed:95,
defense:100,
pitch:0
}),


createPlayer(
"박민우",
"NC",
"시그니처",
"2루수",
{
power:70,
contact:95,
speed:90,
defense:95,
pitch:0
}),



createPlayer(
"양의지",
"NC",
"레전드",
"포수",
{
power:100,
contact:100,
speed:45,
defense:105,
pitch:0
}),


createPlayer(
"양의지",
"NC",
"시그니처",
"포수",
{
power:95,
contact:95,
speed:40,
defense:100,
pitch:0
}),




// ==========================
// 주요 선수
// ==========================


createPlayer(
"구창모",
"NC",
"S",
"투수",
{
power:40,
contact:25,
speed:35,
defense:90,
pitch:95
}),



createPlayer(
"루친스키",
"NC",
"S",
"투수",
{
power:45,
contact:30,
speed:35,
defense:90,
pitch:95
}),



createPlayer(
"페디",
"NC",
"골든글러브",
"투수",
{
power:45,
contact:30,
speed:35,
defense:95,
pitch:100
}),



createPlayer(
"김형준",
"NC",
"A",
"포수",
{
power:65,
contact:70,
speed:45,
defense:80,
pitch:0
}),



createPlayer(
"서호철",
"NC",
"A",
"내야수",
{
power:65,
contact:80,
speed:75,
defense:75,
pitch:0
}),



createPlayer(
"김주원",
"NC",
"S",
"유격수",
{
power:70,
contact:75,
speed:85,
defense:95,
pitch:0
}),



createPlayer(
"권희동",
"NC",
"A",
"외야수",
{
power:70,
contact:75,
speed:60,
defense:75,
pitch:0
}),



createPlayer(
"박건우",
"NC",
"S",
"외야수",
{
power:90,
contact:90,
speed:70,
defense:85,
pitch:0
}),



createPlayer(
"손아섭",
"NC",
"골든글러브",
"외야수",
{
power:80,
contact:105,
speed:80,
defense:85,
pitch:0
}),



createPlayer(
"임정호",
"NC",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:80,
pitch:82
})

];


allPlayers.push(
...NCPlayers
);// ==================================
// NC 다이노스 추가 선수
// 최종
// ==================================


NCPlayers.push(



createPlayer(
"이재학",
"NC",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:80,
pitch:82
}),



createPlayer(
"최성영",
"NC",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:75,
pitch:78
}),



createPlayer(
"김영규",
"NC",
"S",
"투수",
{
power:35,
contact:25,
speed:35,
defense:85,
pitch:88
}),



createPlayer(
"류진욱",
"NC",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:75,
pitch:80
}),



createPlayer(
"이용찬",
"NC",
"A",
"투수",
{
power:35,
contact:25,
speed:35,
defense:85,
pitch:85
}),



createPlayer(
"하준영",
"NC",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:70,
pitch:75
}),



createPlayer(
"한석현",
"NC",
"A",
"외야수",
{
power:55,
contact:70,
speed:80,
defense:70,
pitch:0
}),



createPlayer(
"천재환",
"NC",
"A",
"외야수",
{
power:60,
contact:70,
speed:85,
defense:75,
pitch:0
}),



createPlayer(
"김성욱",
"NC",
"A",
"외야수",
{
power:70,
contact:65,
speed:70,
defense:80,
pitch:0
}),



createPlayer(
"오영수",
"NC",
"A",
"1루수",
{
power:75,
contact:65,
speed:45,
defense:65,
pitch:0
}),



createPlayer(
"도태훈",
"NC",
"A",
"내야수",
{
power:60,
contact:70,
speed:65,
defense:75,
pitch:0
}),



createPlayer(
"박세혁",
"NC",
"A",
"포수",
{
power:60,
contact:75,
speed:40,
defense:85,
pitch:0
}),



createPlayer(
"김한별",
"NC",
"일반",
"내야수",
{
power:50,
contact:60,
speed:65,
defense:65,
pitch:0
}),



createPlayer(
"최정원",
"NC",
"A",
"내야수",
{
power:55,
contact:70,
speed:85,
defense:75,
pitch:0
}),



createPlayer(
"박영빈",
"NC",
"일반",
"외야수",
{
power:50,
contact:60,
speed:75,
defense:65,
pitch:0
}),



createPlayer(
"김시훈",
"NC",
"일반",
"투수",
{
power:25,
contact:20,
speed:30,
defense:60,
pitch:70
}),



createPlayer(
"이준호",
"NC",
"일반",
"투수",
{
power:25,
contact:20,
speed:30,
defense:60,
pitch:68
}),



createPlayer(
"신영우",
"NC",
"A",
"투수",
{
power:30,
contact:20,
speed:35,
defense:70,
pitch:78
}),



createPlayer(
"김태현",
"NC",
"일반",
"투수",
{
power:25,
contact:20,
speed:30,
defense:60,
pitch:68
}),



createPlayer(
"박주현",
"NC",
"일반",
"투수",
{
power:25,
contact:20,
speed:30,
defense:60,
pitch:70
})



);


// ==================================
// 전체 선수 등록 완료
// ==================================

allPlayers.push(
...NCPlayers
);


// 선수 수 확인
console.log(
"전체 선수 수:",
allPlayers.length
);
