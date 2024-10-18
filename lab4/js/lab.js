// index.js - Rock-paper-scissors
// Author: Kaiqing Mo
// Date: 10/17/2024

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
function Gamesetup(){
  console.log("Welcome to Rock-Paper-Scissors!");
  console.log("Rules: Scissors beats Paper; Paper beats Rock; Rock beats Scissors")
};

// Player Input Handling
function playerchoice(){
  let choice = prompt("Enter your choice(rock, paper, or scissors)")；
}

// Computer’s Choice
function Computer choice(){
  let Randomly choice = "ROCK, PAPER, or SCISSORS"
}

// Determine the winner
function determine the winner(playerchoice, computerchoice){
  if (playerchoice === computerchoice){
    return "draw";
  }
  if (
      (playerchoice === "rock" && computerchoice === "scissors") ||
      (playerchoice === "scissors" && computerchoice === "paper") ||
      (playerchoice === "paper" && computerchoice === "rock") 
  ) {
      return "win";
  } else{
      return "lose";
  }
}
  // Compare the player’s choice and the computer’s choice
  // Win, Lose, or Draw:
    // Scissors beats Paper
    // Paper beats Rock;
    // Rock beats Scissors
    // If the choice are the same, declare draw

// Display Results
function displayResults(playerChoice, computerChoice, result) {
  console.log(`You chose: ${playerChoice}`);
  console.log(`The computer chose: ${computerChoice}`);
  if (result === "draw") {
      console.log("It's a draw!");
  } else if (result === "win") {
      console.log("You win!");
  } else {
      console.log("You lose!");
  }
}
  // Show both the player’s and the computer’s choice
  // Show the WInner/ Lose/ Draw
// Play again or End game option
function playagain() {
    let playagainchoice = prompt ("Do you wan to play again? (yes or no):")
    if  (playagainchoice === "yes"){
      //restart the game loop from player input handling
    } else if (playagainchoice === "no"){
      // If Player chooses no, display a message thanking the playing then return to Game setup.
      console.log("Thank you for playing!")
    }
}


