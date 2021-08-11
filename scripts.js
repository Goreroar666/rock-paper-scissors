const options = ["rock","paper","scissors"];
const result = document.getElementById('result');
const buttons = document.querySelectorAll('button');
const computerChose = document.getElementById('computerChoice');
const scoreBoard = document.getElementById('scoreboard');
const endOfGame = document.getElementById('finalScore');
let computerSelection = computerPlay();
let computerScore = 0;
let playerScore = 0;

function computerPlay() {
return options[Math.floor(Math.random() * options.length)];
}



function playRound(playerSelection, computerSelection) {

    if (playerSelection === null) {
        result.textContent = "";
    }
    if (playerSelection === computerSelection) {
        result.textContent = "It's a tie.";
    } if (playerSelection === "rock" && computerSelection === "scissors") {
        result.textContent = "You win, rock beats scissors.";
        playerScore ++;
    } if (playerSelection === "rock" && computerSelection === "paper") {
        result.textContent = "You lose, paper beats rock.";
        computerScore ++;
    } if (playerSelection === "scissors" && computerSelection === "paper") {
    result.textContent = "You win, scissors beats paper.";
    playerScore ++;
    } if (playerSelection === "scissors" && computerSelection === "rock") {
    result.textContent = "You lose, rock beats scissors.";
    computerScore ++;
    } if (playerSelection === "paper" && computerSelection === "rock") {
    result.textContent = "You win, paper beats rock.";
    playerScore ++;
    } if (playerSelection === "paper" && computerSelection === "scissors") {
    result.textContent = "You lose, scissors beats paper.";
    computerScore ++;
}
}

function check() {
    if (playerScore === 5) {
      endOfGame.textContent = "You won the game!"
  } if (computerScore === 5) {
      endOfGame.textContent = "You lost, the computer won the game!"
  }
}


    buttons.forEach(button => {
    button.addEventListener('click', function () {
        (playRound(button.value, computerSelection));
        console.log(playRound(button.value, computerSelection));
    )}};
