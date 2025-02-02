const boardElement = document.getElementById("chessboard");
let selectedPiece = null;
let currentPlayer = "white";

let board = [
    ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
    ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
    ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"]
];

function drawBoard() {
    boardElement.innerHTML = "";
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            let square = document.createElement("div");
            square.classList.add("square", (row + col) % 2 === 0 ? "light" : "dark");
            square.textContent = board[row][col];
            square.dataset.row = row;
            square.dataset.col = col;
            square.addEventListener("click", onSquareClick);
            boardElement.appendChild(square);
        }
    }
}

function onSquareClick(event) {
    const row = parseInt(event.target.dataset.row);
    const col = parseInt(event.target.dataset.col);
    const piece = board[row][col];

    if (selectedPiece) {
        const { piece: selected, row: fromRow, col: fromCol } = selectedPiece;
        
        if (isMoveValid(selected, fromRow, fromCol, row, col)) {
            board[row][col] = selected;
            board[fromRow][fromCol] = "";
            selectedPiece = null;
            currentPlayer = currentPlayer === "white" ? "black" : "white";
            updateStatus();
            drawBoard();
        }
    } else if (piece !== "") {
        selectedPiece = { piece, row, col };
    }
}

function updateStatus() {
    document.getElementById("status").textContent = `Twój ruch: ${currentPlayer === "white" ? "białe" : "czarne"}`;
}

document.getElementById("reset").addEventListener("click", () => {
    location.reload();
});

drawBoard();
