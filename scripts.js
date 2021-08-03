function computerPlay() {
return options[Math.floor(Math.random() * options.length)];
}
const options = ["rock","paper","scissors"];
console.log(computerPlay());

const playerPick = prompt("Choose rock, paper or scissors.").toLowerCase();

const playerSelection = playerPick;
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "rock") {
        return "It's a tie.";
    } if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win, rock beats scissors.";
    } if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose, paper beats rock.";
} if (playerSelection === "scissors" && computerSelection === "scissors") {
    return "It's a tie.";
} if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win, scissors beats paper.";
} if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose, rock beats scissors.";
} if (playerSelection === "paper" && computerSelection === "paper") {
    return "It's a tie.";
} if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win, paper beats rock.";
} if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose, scissors beats paper.";}
}
function game (playerSelection) {
    for (i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
    }
}
let computerScore = 0;
let playerScore = 0;

console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));