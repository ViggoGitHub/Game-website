
let computerChoiceDisplay = document.getElementById("computer-choice");
let playerChoiceDisplay = document.getElementById("player-choice");
let resultDisplay = document.getElementById("result");
let computerPointDisplay = document.getElementById("computer-point");
let playerPointDisplay = document.getElementById("player-point");
let computerChoice;
let playerChoice;
let result;
let computerPoint = 0;
let playerPoint = 0;

function rock(){
    playerChoice = "Sten";
    playerChoiceDisplay.innerHTML = playerChoice;
    getFunctions();
}

function scissors(){
    playerChoice = "Sax";
    playerChoiceDisplay.innerHTML = playerChoice;
    getFunctions();
}

function paper(){
    playerChoice = "Påse";
    playerChoiceDisplay.innerHTML = playerChoice;
    getFunctions();
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
    if (playerChoice === "Sten" && computerChoice === "Sax" || playerChoice === "Sax" && computerChoice === "Påse" || playerChoice === "Påse" && computerChoice === "Sten"){
        result = "Du vann!";
        playerPoint += 1;
    } else if (playerChoice === "Sax" && computerChoice === "Sten" || playerChoice === "Sten" && computerChoice === "Påse" || playerChoice === "Påse" && computerChoice === "Sax"){
        result = "Datorn vann!";
        computerPoint += 1;
    } else {
        result = "Ni valde Samma!"
    }

    resultDisplay.innerHTML = result;
    computerPointDisplay.innerHTML = computerPoint;
    playerPointDisplay.innerHTML = playerPoint;
}

function getFunctions(){
    generateComputerChoice();
    getResult();
    getWinner();
}