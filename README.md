# odin_rock_paper_scissors
Created a rock paper and scissors game using Javascript and Html/CSS

PSEUDOCODE:

1. Write a function that randomly returns "rock", "paper", or "scissors" called getComputerChoice.
2. Write a function that takes the user's valid choice and returns it depending on what the user inputs called getHumanChoice.
3. Write two variables that will keep track of each players (user and computer) score in the global scope.
    - variables called humanScore and computerScore
    - initialize them with the value of 0.
4. Write a function that takes human and computer player choices as arguments, plays a single round, increments the round winner's score and logs a winner announcement.
    - Create a function named playRound which take humanChoice and computerChoice parameters as arguments.
    - make humanChoice parameter case-INSENSITIVE.
    - Write code for playRound function to console.log string representing the round winner i.e. "You lose! Paper beats Rock!".
    - Increment the humanScore or computerScore variable based on round winner.
5. Write a function named playGame that calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end. 
    - Create function named playGame
    -Move playRound function and score variables so that they are declared inside of bew playGame function.
    - Play 5 rounds by calling playRound 5 times. 
    - Declare winner at the end.



REVISITING AND ADDING UI:

In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.

1. For now, remove the logic that plays exactly five rounds.

2. Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)

3. Add a div for displaying results and change all of your console.logs into DOM methods.

4. Display the running score, and announce a winner of the game once one player reaches 5 points.

5. You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.
