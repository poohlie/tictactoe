
let gameOver = false;
let turnNumber = 0;
let playerTurn = "X";

const playerMessage = document.querySelector("#tttTurn");
const winMessage = document.querySelector("#gameText");

const startBtn = document.querySelector("#startGame");

const b1 = document.querySelector("#b1");
const b2 = document.querySelector("#b2");
const b3 = document.querySelector("#b3");
const b4 = document.querySelector("#b4");
const b5 = document.querySelector("#b5");
const b6 = document.querySelector("#b6");
const b7 = document.querySelector("#b7");
const b8 = document.querySelector("#b8");
const b9 = document.querySelector("#b9");

const allB = document.querySelectorAll("input");

// game player starts

function resetGame(){
    gameOver = false;
    turnNumber = 0;
    playerTurn = "X";
    b1.value=""; b1.disabled = false;
    b2.value=""; b2.disabled = false;
    b3.value=""; b3.disabled = false;
    b4.value=""; b4.disabled = false;
    b5.value=""; b5.disabled = false;
    b6.value=""; b6.disabled = false;
    b7.value=""; b7.disabled = false;
    b8.value=""; b8.disabled = false;
    b9.value=""; b9.disabled = false;
    playerMessage.innerHTML = `Player X's turn`;
    winMessage.innerHTML = "Game Ongoing";
}

startBtn.addEventListener("click", resetGame);

b1.addEventListener("click", (e) => {
    b1.value = playerTurn;
    b1.disabled = true; 
    checkWin();
});
b2.addEventListener("click", (e) => {
    b2.value = playerTurn;
    b2.disabled = true; 
    checkWin();
});
b3.addEventListener("click", (e) => {
    b3.value = playerTurn;
    b3.disabled = true; 
    checkWin();});
b4.addEventListener("click", (e) => {
    b4.value = playerTurn;
    b4.disabled = true; 
    checkWin();});
b5.addEventListener("click", (e) => {
    b5.value = playerTurn;
    b5.disabled = true; 
    checkWin();});
b6.addEventListener("click", (e) => {
    b6.value = playerTurn;
    b6.disabled = true; 
    checkWin();});
b7.addEventListener("click", (e) => {
    b7.value = playerTurn;
    b7.disabled = true; 
    checkWin();});
b8.addEventListener("click", (e) => {
    b8.value = playerTurn;
    b8.disabled = true; 
    checkWin();});
b9.addEventListener("click", (e) => {
    b9.value = playerTurn;
    b9.disabled = true; 
    checkWin();});

function checkWin(){
    if ((b1.value === playerTurn && ((b2.value === playerTurn && b3.value === playerTurn)  || (b5.value === playerTurn && b9.value === playerTurn) || (b4.value === playerTurn && b7.value === playerTurn)))
    || (b2.value === playerTurn && b5.value === playerTurn && b8.value === playerTurn)
    || (b3.value === playerTurn && ((b5.value === playerTurn && b7.value === playerTurn) || (b6.value === playerTurn && b9.value === playerTurn)))
    || (b4.value === playerTurn && b5.value === playerTurn && b6.value === playerTurn)
    || (b7.value === playerTurn && b8.value === playerTurn && b9.value === playerTurn)) {
        winMessage.innerHTML = `Player ${playerTurn} wins!!`;
        playerMessage.innerHTML = "Please wait while game restarts...";
        allB.disabled = true;
        gameOver = true;
        setTimeout(() => {resetGame()}, 5000);
    }
    else {
        turnNumber += 1;
        if(turnNumber === 9) {
            gameOver = true;
            winMessage.innerHTML = "It's a draw....";
            playerMessage.innerHTML = "Please wait while game restarts...";
            allB.disabled = true;
            setTimeout(() => {resetGame()}, 5000);
        }
        else if (playerTurn === "X"){
            playerTurn = "O";
            playerMessage.innerHTML = "Player O's Turn"
        } else {
            playerTurn = "X";
            playerMessage.innerHTML = "Player X's Turn"
        }
    }
}


