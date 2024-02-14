const squares = document.querySelectorAll(".molegrid div");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

let result = 0;
let hitPosition;
let currentTime = 10;
let timerId = null;

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
    timerId = setInterval(randomSquare, 1000)
}

function countDown(){
    currentTime --;
    timeLeft.innerHTML = currentTime;

    if (currentTime == 0){
        clearInterval(countDowntimerId);
        clearInterval(timerId);
        alert("GAME OVER! Du fick " + result + " poäng")
    }
}

// makes the countDowns function execute every 1000 millisecond
let countDowntimerId = setInterval(countDown, 1000);

moveMole();

function update() {
    location.reload();
}