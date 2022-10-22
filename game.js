// Comments are done as a first step Pseudocode

// Definition of games variables

const choices = ['Paper', 'Rock','Scissors']


// The Computer chooses an option randomly
 function getComputerChoice() {
    let computerChoice = choices[Math.floor(Math.random()*choices.length)];
    return (computerChoice)
 }
// The option is stored in a variable (not a const (to be verified?)) Scope to be verified as well
 let computerSelection = getComputerChoice()

 console.log(computerSelection)

 // The player makes a selection
 const playerSelection = prompt("What will your choice be ?")

console.log(playerSelection)

// Game is ON !
function playRound(playerSelection, computerSelection) {
    // If both variables matches, it's a tie (using switch, this would be the default.. ?)
    // If not, then : 
    // If Player is Paper and Computer is Rock, then it's a win
        // If computer is scissors, it's a loose
    // IF Player is Rock and computer is Paper, it's a loose
            // if comptuer is scissors, it's a win
    // If player is scissors and computer paper, it's a win
            // if computer is rock, its a loose
}