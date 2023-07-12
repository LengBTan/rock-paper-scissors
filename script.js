let playerScore = 0;
let computerScore = 0;
let gameDone = false;
let resultBox= document.getElementById("result");
resultBox.style.display = "none";

const rockButton = document.getElementById("rockButton");
rockButton.addEventListener("click", chooseRock);
updateScore();

const paperButton = document.getElementById("paperButton");
paperButton.addEventListener("click", choosePaper);
updateScore();

const scissorsButton = document.getElementById("scissorsButton");
scissorsButton.addEventListener("click", chooseScissors);
updateScore();

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetGame);


function getComputerChoice(){//returns rock paper or scissors
    /**
     * 0 is rock
     * 1 is paper
     * 2 is scissors
     */
    return (Math.floor(Math.random() * (3)));//outputs 0, 1 , or 2
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return("draw")
    }
    else if(playerSelection == 0){//player choose rock
        if(computerSelection == 1){//CPU plays paper
            return("lose");
        }
        if(computerSelection == 2){//CPU plays scissors
            return("win");
        }
    }
    else if(playerSelection == 1){//player choose paper
        if(computerSelection == 0){//CPU plays rock
            return("win");
        }
        if(computerSelection == 2){//CPU plays scissors
            return("lose");
        }
    }
    else if(playerSelection == 2){//player choose scissors
        if(computerSelection == 0){//CPU plays rock
            return("lose");
        }
        if(computerSelection == 1){//CPU plays paper
            return("win");
        }
    }
}

function chooseRock(){
    if(!gameDone){
        if(playRound(0,getComputerChoice()) === "win"){
            playerScore++;
        }
        else{
            computerScore++;
        }
        checkGameOver();
        updateScore();
    }
}

function choosePaper(){
    if(!gameDone){
        if(playRound(1,getComputerChoice()) === "win"){
            playerScore++;
        }
        else{
            computerScore++;
        }
        checkGameOver();
        updateScore();
    }
}

function chooseScissors(){
    if(!gameDone){
        if(playRound(2,getComputerChoice()) === "win"){
            playerScore++;
        }
        else{
            computerScore++;
        }
        checkGameOver();
        updateScore();
    }
}

function updateScore(){
    document.getElementById("pScore").innerHTML = playerScore;
    document.getElementById("cpuScore").innerHTML = computerScore;
}

function checkGameOver(){
    if(playerScore == 5){
        gameDone = true;
        document.getElementById("gameOverResult").innerHTML = "You won";
        resultBox.style.display = "block";
    }
    if(computerScore == 5){
        gameDone = true;
        document.getElementById("gameOverResult").innerHTML = "You lost";
        resultBox.style.display = "block";
    }
}

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    gameDone = false;
    updateScore();
    resultBox.style.display = "none";
}
