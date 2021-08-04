function computerPlay() {
return options[Math.floor(Math.random() * options.length)];
}
const options = ["rock","paper","scissors"];

let playerSelection = prompt("Please choose rock, paper or scissors.").toLowerCase();
let computerSelection = computerPlay();

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie.";
    } if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore ++;
        return "You win, rock beats scissors.";
    } if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore ++;
        return "You lose, paper beats rock.";
} if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore ++;
    return "You win, scissors beats paper.";
} if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore ++;
    return "You lose, rock beats scissors.";
} if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore ++;
        return "You win, paper beats rock.";
} if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore ++;
    return "You lose, scissors beats paper.";}
}

function game () {
    for (i = 0; i < 5; i++) {
        let playerSelection = prompt("Please choose rock, paper or scissors.").toLowerCase();
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log ("Score:", playerScore, "-", computerScore);
        function result() {
            if (playerScore > computerScore) {
                return "You won!"
            } else if (computerScore > playerScore) {
                return "You lost, the computer won!"
            } else {
                return "It is a tie."
            }

        }
    }
    console.log(result());
}
