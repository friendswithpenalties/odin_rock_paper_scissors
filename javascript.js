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
let computerChoice = getComputerChoice();
console.log(computerChoice);

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
let humanChoice = getHumanChoice();
console.log("You threw " + humanChoice);