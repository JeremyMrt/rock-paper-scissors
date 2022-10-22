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
 function getPlayerChoice () {
    let playerChoice = prompt("What will your choice be ?")
    return (playerChoice.charAt(0).toUpperCase() + playerChoice.slice (1).toLowerCase())
}

let playerSelection = getPlayerChoice()
console.log(playerSelection)

// Game is ON !
function playRound(playerSelection, computerSelection) {
    // If both variables matches, it's a tie (using switch, this would be the default.. ?)
    if (playerSelection === computerSelection) {
        return (null)
    } else {
        if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
            return (true)
            } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
                return (true)
            } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
                return (true)
            } else {
                return (false)
            }
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

// Getting to 5 games in a row
        let computerScore  
        let playerScore

function game() {


    for (let i = 0 ; i < 4 ; i++) {
        
        
        let computerSelection = getComputerChoice();     
       console.log(computerSelection) ;
        let playerSelection = getPlayerChoice() ;
        console.log(playerSelection) ;

        let result = playRound(playerSelection, computerSelection) ;
        console.log(result) ;
    }
    //if (result === true) {
            
    //      return ('You win !')
    // } else if (result === false) {
         
    //        return ('You loose...')
    //    } else if (result === null ) {
    //        return ('It\'s a tie')
    //    }


        // Keeping score by creating 2 variables for computer and player
        // That variable gets increased every win, until it reaches 3

        // After each iteration, console.log the current score
        // Winner gets declared

}        

 game()