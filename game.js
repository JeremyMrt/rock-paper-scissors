// Comments are done as a first step Pseudocode

// The Computer chooses an option randomly
 function getComputerChoice() {
    const choices = ['Paper', 'Rock','Scissors']
    let computerChoice = choices[Math.floor(Math.random()*choices.length)];
    return (computerChoice)
 }
// The option is stored in a variable (not a const (to be verified?)) Scope to be verified as well
 const computerSelection = getComputerChoice()
 console.log(computerSelection)

 // The player makes a selection, capitalized only on first letter
 let playerChoice = prompt("What will your choice be ?")
 function capitalizeChoice() {
    return (playerChoice.charAt(0).toUpperCase() + playerChoice.slice (1).toLowerCase())
}
let playerSelection = capitalizeChoice()
console.log(playerSelection)

// Game is ON !
function playRound(playerSelection, computerSelection) {
    // If both variables matches, it's a tie (using switch, this would be the default.. ?)
    if (playerSelection === computerSelection) {
        return ("It's a tie !")
    } else {
        return ("Nop !")
    }
    // If not, then : 
    // If Player is Paper and Computer is Rock, then it's a win
        // If computer is scissors, it's a loose
    // IF Player is Rock and computer is Paper, it's a loose
            // if comptuer is scissors, it's a win
    // If player is scissors and computer paper, it's a win
            // if computer is rock, its a loose
}
console.log (playRound(playerSelection,computerSelection))