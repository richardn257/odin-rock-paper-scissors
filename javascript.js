function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomNum = Math.floor(Math.random() * 100) % 3;
    return choices[randomNum];
}

let userWin = 0, compWin = 0, i = 0, totGames = 0;
function playRound(playerSelection, computerSelection) {
    winner.textContent = ""
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let res, str;
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            // str = "Tie! Both are Rock";
            // console.log(str);
            res = 2;
            result.textContent = "Tie! Both are Rock";
        }
        else if (computerSelection == "paper") {
            // str = "You Lose! Paper beats Rock";
            // console.log(str);
            res = 1;
            result.textContent = "You Lose! Paper beats Rock";
        }
        else {
            // str = "You win! Rock beats Scissor";
            // console.log(str);
            res = 0;
            result.textContent = "You win! Rock beats Scissors"
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            str = "You Win! Paper beats Rock";
            // console.log(str);
            res = 0;
            result.textContent = str;
        }
        else if (computerSelection == "paper") {
            str = "Tie! Both are Paper";
            // console.log(str);
            res = 2;
            result.textContent = str;
        }
        else {
            str = "You Lose! Scissor beats Paper";
            // console.log(str);
            res = 1;
            result.textContent = str;
        }
    } else {
        if (computerSelection == "rock") {
            str = "You Lose! Rock beats Scissor";
            // console.log(str);
            res = 1;
            result.textContent = str;

        }
        else if (computerSelection == "paper") {
            str = "You Win! Scissor beats Paper";
            // console.log(str);
            res = 0;
            result.textContent = str;

        }
        else {
            str = "Tie! Both are Scissor";
            // console.log(str);
            res = 2;
            result.textContent = str;

        }
    }
    container.append(result);

    if (!res) {
        // console.log("Round " + (i + 1) + ": Player!");
        round.textContent = "Round " + (i + 1) + ": Player!";
        userWin++;
    }
    else if (res == 1) {
        // console.log("Round " + (i + 1) + ": Computer!");
        round.textContent = "Round " + (i + 1) + ": Computer!";
        compWin++;
    }
    else {
        // console.log("Round " + (i + 1) + ": Tie!");
        round.textContent = "Round " + (i + 1) + ": Tie!";
    }
    container.append(round);
    totGames++;
    i++;

    playerPts.textContent = "Player: " + userWin;
    compPts.textContent = "Computer: " + compWin;
    container.append(playerPts);
    container.append(compPts);
    if (userWin == 5 || compWin == 5) {
        winner.textContent = "The winner of the game is ";
        if (userWin > compWin)
            winner.textContent = winner.textContent + "Player!";
        else if (compWin > userWin)
            winner.textContent = winner.textContent + "\nComputer!";
        else
            winner.textContent = winner.textContent + "\nNo one!";

        hereResults.textContent = "Here are your results:";
        winner.textContent = winner.textContent + "Win: " + userWin;
        winner.textContent = winner.textContent + "Lose: " + compWin;
        winner.textContent = winner.textContent + "Tie: " + (totGames - (userWin + compWin));
        userWin = 0, compWin = 0, i = 0, totGames = 0;
        winner.append(hereResults);
        container.append(winner);
    }
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

const container = document.querySelector('#container');
const result = document.createElement('div');
result.classList.add('result');
const round = document.createElement('div');
round.classList.add('round');
const playerPts = document.createElement('div');
playerPts.classList.add('playerPts');
const compPts = document.createElement('div');
compPts.classList.add('compPts');
const winner = document.createElement('div');
winner.classList.toggle('winner');
const hereResults = document.createElement('div');
hereResults.classList.toggle('hereResults');