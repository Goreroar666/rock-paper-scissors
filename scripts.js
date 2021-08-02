function computerPlay() {
return options[Math.floor(Math.random() * options.length)];
}
const options = ["rock","paper","scissors"];
console.log(computerPlay());

let playerPick = prompt ("Choose rock, paper or scissors.").toLowerCase();

const playerSelection = playerPick;
const computerSelection = computerPlay();

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie.";
    } else if ((computerSelection === "scissors" && playerSelection === "rock") || (computerSelection === "paper" && playerSelection === "scissors") || (computerSelection = "rock" && playerSelection === "paper")); {
        return "You win."
    }
}

console.log(playRound (playerSelection, computerSelection));
