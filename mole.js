let currMoleTile;


window.onload = function() {
    setGame();
}

function setGame() {
    for(let i = 0; i < 9; i++){
        let tile = document.createElement("div");
        tile.id = i.toString();
        document.getElementById("board").appendChild(tile);
    }
}



function setMole(){
    let mole = document.createElement("img");
    mole.src = "./images/monty-mole.png";

    let num  = getRandomTile();
}