console.log("JS Loaded");

const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");

let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];

const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

cells.forEach(cell => {
    cell.addEventListener("click", handleClick);
});

function handleClick() {
    const index = this.dataset.index;

    if (board[index] !== "") return;

    board[index] = currentPlayer;
    this.textContent = currentPlayer;

    if (checkWinner()) {
        statusText.textContent = currentPlayer + " Wins!";
        disableBoard();
        return;
    }

    if (!board.includes("")) {
        statusText.textContent = "Draw!";
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWinner() {
    return winPatterns.some(pattern => {
        return pattern.every(i => board[i] === currentPlayer);
    });
}

function disableBoard() {
    cells.forEach(cell => cell.style.pointerEvents = "none");
}

function restartGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    cells.forEach(cell => {
        cell.textContent = "";
        cell.style.pointerEvents = "auto";
    });
    currentPlayer = "X";
    statusText.textContent = "";
}