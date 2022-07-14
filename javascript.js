const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const container = document.querySelector('#container');
const round = document.createElement('h4');
const textResult = document.createElement('div');
const playerPts = document.createElement('p');
const compPts = document.createElement('p');
const winner = document.createElement('div');
winner.classList.add('winner');
const hereResults = document.createElement('div');
const winLoseTie = document.createElement('div');
const afterResult = document.querySelector('.afterResult');
afterResult.append(rockBtn);
afterResult.append(paperBtn);
afterResult.append(scissorsBtn);

rockBtn.addEventListener('click', function() {
    playRound("rock", computerPlay())
    displayResult();
});

paperBtn.addEventListener('click', () => {
    playRound("paper", computerPlay());
    displayResult();
});

scissorsBtn.addEventListener('click', () => {
    playRound("scissors", computerPlay());
    displayResult();
});

function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomNum = Math.floor(Math.random() * 100) % 3;
    return choices[randomNum];
}

let userWin = 0, compWin = 0, i = 0, totGames = 0, roundTimes = 1;

function playRound(playerSelection, computerSelection) {

    round.textContent = "Round " + roundTimes;
    container.append(round);
    roundTimes++;

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    winner.textContent = ""

    let res, str;

    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            textResult.textContent = "Tie! Both are Rock";
        }
        else if (computerSelection == "paper") {
            textResult.textContent = "You Lose! Paper beats Rock";
            compWin++;
        }
        else {
            textResult.textContent = "You win! Rock beats Scissors"
            userWin++;
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            textResult.textContent = "You Win! Paper beats Rock";
            userWin++;
        }
        else if (computerSelection == "paper") {
            textResult.textContent = "Tie! Both are Paper";
        }
        else {
            textResult.textContent = "You Lose! Scissor beats Paper";
            compWin++;
        }
    } else {
        if (computerSelection == "rock") {
            textResult.textContent = "You Lose! Rock beats Scissor";
            compWin++;
        }
        else if (computerSelection == "paper") {
            textResult.textContent = "You Win! Scissor beats Paper";
            userWin++;
        }
        else {
            textResult.textContent = "Tie! Both are Scissor";
        }
    }
    container.append(textResult);
    afterResult.append(container);
    totGames++;
    i++;
}

function displayResult() {
    playerPts.textContent = "Player: " + userWin + " pts";
    compPts.textContent = "Computer: " + compWin + " pts";
    container.append(playerPts);
    container.append(compPts);

    if (userWin == 5 || compWin == 5) {
        afterResult.removeChild(container);
        afterResult.removeChild(rockBtn);
        afterResult.removeChild(paperBtn);
        afterResult.removeChild(scissorsBtn);

        winner.textContent = "The winner of the game is ";
        if (userWin > compWin)
            winner.textContent = winner.textContent + "Player!";
        else
            winner.textContent = winner.textContent + "\nComputer!";

        hereResults.textContent = "Here are your results:";
        winLoseTie.textContent = `Win: ${userWin} Lose: ${compWin} Tie: ${totGames - (userWin + compWin)}`;
        userWin = 0, compWin = 0, i = 0, totGames = 0, roundTimes = 0;
        winner.append(hereResults);
        winner.append(winLoseTie);
        afterResult.append(winner);
    }
}