const msg = document.querySelector('.msg')
const turn = document.querySelector('.turn')
const gameBoard = document.querySelector('.container')
const col = document.querySelectorAll('.col')
const gameSound = new Audio("assets/audio/ting.mp3")
const gameOver = new Audio("assets/audio/gameover.mp3")
const img = document.querySelector(".img")

let currentPlayer = "X";
let arr = Array(9).fill(null);
turn.innerText = `${currentPlayer}'s Turn`

function checkWinner() {
    if (
        (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
        (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
        (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
        (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
        (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
        (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
        (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
        (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])



    ) {
        img.classList.add("show");
        msg.innerHTML = `Winner is <span>${currentPlayer}</span>`
        let winnerSpan = msg.querySelector("span");

        if (winnerSpan.innerText.toLowerCase() === "x") {
            winnerSpan.style.color = "green";
        } else {
            winnerSpan.style.color = "red";
        }
        turn.innerText = ""
        gameBoard.style.pointerEvents = "none"
        gameOver.play()
        return true;
    }


    if (!arr.some((e) => e === null)) {
        msg.innerHTML = `<span>DRAW</span>`
        let text = msg.querySelector("span")
        text.style.color = "red"
        turn.innerText = ""
        gameBoard.style.pointerEvents = "none"
        gameOver.play();
        return true;
    }

    return false;

}


function handleClick(el) {
    gameSound.play();

    const id = Number(el.id);
    if (arr[id] !== null) return;
    arr[id] = currentPlayer;
    el.innerText = currentPlayer;


    col.forEach(col => {
        const text = col.textContent.trim().toLowerCase();
        if (text === 'x') {
            col.style.color = 'green';
        } else if (text === 'o') {
            col.style.color = 'red';
        }

    })

    const isGameOver = checkWinner();

    if (isGameOver) return;

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    turn.innerText = `${currentPlayer}'s Turn`


}