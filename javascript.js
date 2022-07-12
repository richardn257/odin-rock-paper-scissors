function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomNum = Math.floor(Math.random()*3);
    return choices[randomNum];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let res, str;
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            str = "Tie! Both are Rock";
            console.log(str);
            res = 2;
        }
        else if (computerSelection == "paper") {
            str = "You Lose! Paper beats Rock";
            console.log(str);
            res = 1;
        }
        else {
            str = "You win! Rock beats Scissor";
            console.log(str);
            res = 0;
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            str = "You Win! Paper beats Rock";
            console.log(str);
            res = 0;
        }
        else if (computerSelection == "paper") {
            str = "Tie! Both are Paper";
            console.log(str);
            res = 2;
        }
        else {
            str = "You Lose! Scissor beats Paper";
            console.log(str);
            res = 1;
        }
    } else {
        if (computerSelection == "rock") {
            str = "You Lose! Rock beats Scissor";
            console.log(str);
            res = 1;
        }
        else if (computerSelection == "paper") {
            str = "You Win! Scissor beats Paper";
            console.log(str);
            res = 0;
        }
        else {
            str = "Tie! Both are Scissor";
            console.log(str);
            res = 2;
        }
    }
    return res;
}

function game() {
    let userWin = 0, compWin = 0, totGames = 0;
    while (userWin != 5 && compWin != 5) {
        // let input = prompt("Type in rock, paper, scissor");
        // let res = playRound(input, computerPlay());
        if (!res) {
            console.log("Round " + (i + 1) + ": Player!");
            userWin++;
        }
        else if (res == 1) {
            console.log("Round " + (i + 1) + ": Computer!");
            compWin++;
        }
        else {
            console.log("Round " + (i + 1) + ": Tie!");
        }
        totGames++;
    }

    console.log("The winner of the game is...");
    if (userWin > compWin)
        console.log("Player!");
    else if (compWin > userWin)
        console.log("Computer!");
    else
        console.log("No one!");

    console.log("\nHere are your results:")
    console.log("Win: " + userWin);
    console.log("Lose: " + compWin);
    console.log("Tie: " + (totGames - (userWin + compWin)));
}

const rockButn = document.querySelector('.rock');
rockButn.addEventListener('click', function() {
    playRound("rock", computerPlay())
});

const paperButn = document.querySelector('.paper');
paperButn.addEventListener('click', () => {
    playRound("paper", computerPlay());
});

const scissorsButn = document.querySelector('.scissors');
scissorsButn.addEventListener('click', () => {
    playRound("scissors", computerPlay());
});

// game();
// const playerSelection = "ROCK";
// const computerSelection = computerPlay();
// console.log("Computer chose: " + computerSelection);
// console.log(playRound(playerSelection, computerSelection));