// ============================
// system/reward.js
// 보상 시스템
// ============================



// 출석 보상

const attendanceRewards = [

    {
        day:1,
        money:100000000,
        ticket:1
    },

    {
        day:2,
        money:200000000,
        ticket:1
    },

    {
        day:3,
        money:300000000,
        ticket:2
    },

    {
        day:7,
        money:1000000000,
        ticket:5
    },

    {
        day:14,
        money:2000000000,
        ticket:5
    },

    {
        day:30,
        money:5000000000,
        ticket:10
    }

];





// 출석 데이터

let attendanceDay = 0;






// 출석 받기

function getAttendanceReward(){


    attendanceDay++;




    let reward =

    attendanceRewards.find(

        r =>

        r.day === attendanceDay

    );





    if(!reward){


        alert(
            "오늘 출석 보상이 없습니다."
        );


        return;

    }





    gameData.money +=

    reward.money;



    gameData.inventory.normalGachaTicket +=

    reward.ticket;





    alert(

        "🎁 출석 보상!\n\n"

        +

        formatMoney(reward.money)

        +

        "\n일반 뽑기권 "

        +

        reward.ticket

        +

        "개"

    );





    saveGame();

    updateUI();


}








// 주간 미션

const weeklyMission = {


    playMatch:{

        name:"경기 5회 플레이",

        count:0,

        target:5,

        rewardMoney:1000000000,

        rewardTicket:5

    },


    gacha:{

        name:"뽑기 10회",

        count:0,

        target:10,

        rewardMoney:500000000,

        rewardTicket:3

    }


};








// 미션 완료 체크

function checkMission(type){


    let mission =

    weeklyMission[type];



    if(!mission)

        return;





    mission.count++;





    if(mission.count >= mission.target){



        gameData.money +=

        mission.rewardMoney;



        gameData.inventory.normalGachaTicket +=

        mission.rewardTicket;



        alert(

            "🎉 주간 미션 완료!\n"

            +

            mission.name

            +

            "\n"

            +

            formatMoney(
                mission.rewardMoney
            )

            +

            "\n일반 뽑기권 "

            +

            mission.rewardTicket

            +

            "개"

        );



        mission.count=0;



    }



    saveGame();

    updateUI();


}
