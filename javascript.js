/*Write function that randomly returns "rock", "paper"
or "scissors".*/

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    switch (randomNumber) {
        case 1:
            return "Rock";
        case 2: 
            return "Paper";
        case 3:
            return "Scissors";
        default:
            return "Computer didn't throw hands";
    }
}

/*Write a function that will take user choice and return it.
Make sure it is not case-sensitive.
Assume that the user always enters a valid choice for now*/

function getHumanChoice() {
    let yourChoice = prompt("Rock, Paper, or Scissors?");

    let rock = "Rock", paper = "Paper", scissors = "Scissors";

    if (yourChoice.toLowerCase() === rock.toLowerCase()) {
        return rock;
    } else if (yourChoice.toLowerCase() === paper.toLowerCase()) {
        return paper;
    } else if (yourChoice.toLowerCase() === scissors.toLowerCase()) {
        return scissors;
    } else {
        return "nothing";
    }
}

/*Write variables that will keep track of the players score
Initializing them from 0*/

var humanScore = 0;
var computerScore = 0;

/*Write function takes human and comp player choices as 
arguments, play single round, increment the round winner's 
score and logs a winner announcement*/

function playRound(humanChoice, computerChoice) {


    if (humanChoice === "Rock" && computerChoice === "Paper") {
        computerScore++;
        console.log("You lose! Paper beats rock.");
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        humanScore++;
        console.log("You win! Rock beats scissors.");
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        humanScore++;
        console.log("You win! Paper beats rock.");
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        computerScore++;
        console.log("You lose! Scissors beats paper.");
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        computerScore++;
        console.log("You lose! Rock beats scissors.");
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        humanScore++;
        console.log("You win! Scissors beats paper.");
    } else {
        console.log("It's a tie!");
    }
}


/*Write function named playGame that calls playRound to play 5 rounds, 
keeps track of the scores and declares a winner at the end */

function playGame() {

    
    
    for (let round = 0; round <5; round++) {
        let computerChoice = getComputerChoice();
        console.log("Computer threw " + computerChoice);
        let humanChoice = getHumanChoice();
        console.log("You threw " + humanChoice);

        playRound(humanChoice, computerChoice);
    }
    if (humanScore > computerScore) {
        console.log("CONGRADULATIONS! YOU WIN!");
    } else {
        console.log("TOO BAD! YOU LOSE!");
    }

}
let gamePlayed = playGame();
console.log(gamePlayed);