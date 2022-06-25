function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomNum = Math.floor(Math.random()*3);
    return choices[randomNum];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let res = "";
    if (playerSelection == "rock") {
        if (computerSelection == "rock")
            res = "Tie! Both are Rock";
        else if (computerSelection == "paper")
            res = "You Lose! Paper beats Rock";
        else
            res = "You win! Rock beats Scissor"
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock")
            res = "You Win! Paper beats Rock";
        else if (computerSelection == "paper")
            res = "Tie! Both are Paper";
        else
            res = "You Lose! Scissor beats Paper"
    } else {
        if (computerSelection == "rock")
            res = "You Lose! Rock beats Scissor";
        else if (computerSelection == "paper")
            res = "You Win! Scissor beats Paper";
        else
            res = "Tie! Both are Scissor";
    }
    return res;
}

function game() {
    let userWin = 0, compWin = 0;
    for (let i = 0; i < 5; i++) {
        let input = prompt("Type in rock, paper, scissor");
        playRound(input, computerPlay());
    }
}

game();

// const playerSelection = "ROCK";
// const computerSelection = computerPlay();
// console.log("Computer chose: " + computerSelection);
// console.log(playRound(playerSelection, computerSelection));