// The Computer chooses an option randomly
 function getComputerChoice() {
    const choices = ['Paper', 'Rock','Scissors']
    var computerChoice = choices[Math.floor(Math.random()*choices.length)];
    return (computerChoice)
 }
// The option is stored in a variable (not a const (to be verified?)) Scope to be verified as well

 //var computerSelection = getComputerChoice() --  Used before game()
 //console.log(computerSelection) --  Used before game()

 // The player makes a selection, capitalized only on first letter
 function getPlayerChoice () {
    var playerChoice = prompt("What will your choice be ?")
    if (playerChoice===null) {
        console.log('Giving up already ?')
      
    }
    return (playerChoice.charAt(0).toUpperCase() + playerChoice.slice (1).toLowerCase())

}

//var playerSelection = getPlayerChoice() --  Used before game()
//console.log(playerSelection) --  Used before game()

// Game is ON !
function playRound(playerSelection, computerSelection) {
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
}
//console.log (playRound(playerSelection,computerSelection)) --  Used before game()

// Getting to 5 games in a row

function game() {

        var computerScore = 0 ; 
        var playerScore = 0 ;

    for (let i = 0 ; i < 5 ; i++) {
        
        let playerSelection = getPlayerChoice() ;
        console.log('You chose ' + playerSelection) ;

        let computerSelection = getComputerChoice();     
       console.log('The computer chooses ' + computerSelection) ;


        var result = playRound(playerSelection, computerSelection) ;
        console.log(result) ;

        if (result===true) {
            playerScore++;
            console.log('Well played !')
        } else if (result===false) {
            computerScore++;
            console.log('Bad choices happen..')
        } else if (result===null) {
            console.log('It\s a tie.')
        }
 
        console.log('Computer score is '  + computerScore)
        console.log('Your score is ' + playerScore)
        
    }

    if (computerScore > playerScore) {
        console.log('You loose by ' + (computerScore-playerScore) + (' point(s)... harsh !'))
    } else if (computerScore < playerScore) {
        console.log('You win !! You defeated this poor computer by ' + (playerScore-computerScore) + ' point(s)')
    } else if (computerScore === playerScore) {
        console.log('It\'s a tie all the way. No luck !')
    }
} 

 game()    