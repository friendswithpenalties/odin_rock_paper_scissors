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
const computerChoice = getComputerChoice();
console.log("Computer threw " + computerChoice);

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
const humanChoice = getHumanChoice();
console.log("You threw " + humanChoice);

/*Write variables that will keep track of the players score
Initializing them from 0*/

var humanScore = 0;
var computerScore = 0;


/*Write function takes human and comp player choices as 
arguments, play single round, increment the round winner's 
score and logs a winner announcement*/

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Paper") {
        return computerScore++;
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        return humanScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        return humanScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        return computerScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        return computerScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        return humanScore++;
    } else {
        // do nothing
    }
}

playRound(humanChoice, computerChoice);
console.log(humanScore);
console.log(computerScore);