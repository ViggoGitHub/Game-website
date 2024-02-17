const squares = document.querySelectorAll(".tictactoegrid div");
const currentPlayerDisplay = document.querySelector("#current-player");
const resultDisplay = document.querySelector("#result");

let currentPlayer = 1;

const winninArrays = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function winner() {
    for (let j = 0; j < winninArrays.length; j++){
        let sqr1 = squares[winninArrays[j][0]];
        let sqr2 = squares[winninArrays[j][1]];
        let sqr3 = squares[winninArrays[j][2]];

        if (sqr1.classList.contains("x") &&
            sqr2.classList.contains("x") &&
            sqr3.classList.contains("x")
        ) {
            resultDisplay.innerHTML = "Spelare 1 vann!";
        }

        if (sqr1.classList.contains("o") &&
            sqr2.classList.contains("o") &&
            sqr3.classList.contains("o")
        ) {
            resultDisplay.innerHTML = "Spelare 2 vann!";
        }
    }
}

for (let i = 0; i < squares.length; i++){
    squares[i].onclick = () => {
        if (currentPlayer == 1) {
            squares[i].classList.add("x");
            currentPlayer = 2;
            currentPlayerDisplay.innerHTML = currentPlayer;
        } else if (currentPlayer == 2) {
            squares[i].classList.add("o")
            currentPlayer = 1;
            currentPlayerDisplay.innerHTML = currentPlayer;
        }
        winner();
    }
}

function update() {
    location.reload();
}