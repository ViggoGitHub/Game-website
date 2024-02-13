const squares = document.querySelectorAll(".molegrid div");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

let result = 0;

function randomSquare(){
    squares.forEach(square => {
        // removes the mole class if it exist in the square
        square.classList.remove("mole");
    })
    // sets the mole to a random square
    let randomPosition = squares[Math.floor(Math.random() * 9)];
    randomPosition.classList.add("mole");

    hitPosition = randomPosition.id;
}

squares.forEach(square => {
    square.addEventListener("mousedown", () => {
        if (square.id == hitPosition) {
            result++;
            score.innerHTML = result;
        }
    })
})

// function that changes the position of the mole after a specific interval
function moveMole(){
    let timerId = null;
    timerId = setInterval(randomSquare, 500)
}

    }
}

// makes the countDowns function execute every 1000 millisecond
function update() {
    location.reload();
}