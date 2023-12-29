
let computerChoiceDisplay = document.getElementById("computer-choice");
let playerChoiceDisplay = document.getElementById("player-choice");
let resultDisplay = document.getElementById("result");
let computerPointDisplay = document.getElementById("computer-point");
let playerPointDisplay = document.getElementById("player-point");
let roundsdisplay = document.getElementById("roundDisplay");
let numberOfRounds = document.getElementById("numberOfRounds");

let rounds;
let computerChoice;
let playerChoice;
let result;
let computerPoint = 0;
let playerPoint = 0;

function choiceClick(num) {
    if (num === 1) {
        playerChoice = "Sten";
        playerChoiceDisplay.innerHTML = playerChoice;
        getFunctions();
    } else if (num === 2) {
        playerChoice = "Sax";
        playerChoiceDisplay.innerHTML = playerChoice;
        getFunctions();
    } else {
        playerChoice = "Påse";
        playerChoiceDisplay.innerHTML = playerChoice;
        getFunctions();
    }
}



function generateComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    
    if (randomNumber === 1){
        computerChoice = "Sten";
    }else if (randomNumber === 2){
        computerChoice = "Sax";
    }else{
        computerChoice = "Påse";
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult(){
    if (playerChoice === "Sten" && computerChoice === "Sax" || 
        playerChoice === "Sax" && computerChoice === "Påse" || 
        playerChoice === "Påse" && computerChoice === "Sten"){
        result = "Du vann!";
        playerPoint += 1;
    } else if (playerChoice === "Sax" && computerChoice === "Sten" || 
        playerChoice === "Sten" && computerChoice === "Påse" || 
        playerChoice === "Påse" && computerChoice === "Sax"){
        result = "Datorn vann!";
        computerPoint += 1;
    } else {
        result = "Ni valde Samma!"
    }

    resultDisplay.innerHTML = result;
    computerPointDisplay.innerHTML = computerPoint;
    playerPointDisplay.innerHTML = playerPoint;
}

document.getElementById("roundsForm").addEventListener("submit", function(event) {
    event.preventDefault();
    rounds = document.getElementById("getRounds").value;
    rounds = parseInt(rounds);
    numberOfRounds.innerHTML = rounds;
});

function getWinner(){
    if (playerPoint === rounds){
        roundsdisplay.innerHTML = "Du vann!";
    } else if (computerPoint === rounds){
        roundsdisplay.innerHTML = "Datorn vann!";
    }
}

function getFunctions(){
    generateComputerChoice();
    getResult();
    getWinner();
}