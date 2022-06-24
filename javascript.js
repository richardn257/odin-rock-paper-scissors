function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomNum = Math.floor(Math.random()*3);
    return choices[randomNum];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    return playerSelection == "rock" && computerSelection == "paper";
}

const playerSelection = "ROCK";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));