// ============================
// system/traitChange.js
// 특성 변경 시스템
// ============================



// 특성 변경 메뉴

function traitMenu(){


    if(gameData.players.length === 0){


        alert("선수가 없습니다.");

        return;

    }



    let index =

    prompt(

        "특성 변경할 선수 번호\n\n"

        +

        gameData.players

        .map(

            (p,i)=>

            i
            +
            " : "
            +
            p.name
            +
            " / "
            +
            p.trait

        )

        .join("\n")

    );



    if(index === null)
        return;



    changePlayerTrait(
        Number(index)
    );


}







// 특성 변경

function changePlayerTrait(index){


    let player =

    gameData.players[index];



    if(!player)
        return;





    if(gameData.inventory.traitChangeTicket <= 0){


        alert(
            "특성 변경권이 없습니다."
        );


        return;

    }






    gameData.inventory.traitChangeTicket--;





    let oldTrait =

    player.trait;



    let newTrait =

    getRandomTrait();




    player.trait =

    newTrait.name;




    alert(

        player.name
        +
        "\n\n기존 특성 : "
        +
        oldTrait
        +
        "\n변경 특성 : "
        +
        newTrait.name

    );





    saveGame();

    updateUI();


}
