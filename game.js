const buttons = document.querySelectorAll('button');

function getComputerChoice() {
    const choices = ['Paper', 'Rock','Scissors']
    var computerChoice = choices[Math.floor(Math.random()*choices.length)];
    console.log(computerChoice)
    return (computerChoice)
 }

buttons.forEach((button) => {
   button.addEventListener('click', (e) => {
      console.log(button.id)
      playRound(button.id, getComputerChoice());
})
})

function playRound(playerSelection,computerSelect) {
 
   if (playerSelection === computerSelect) {
         console.log('nul');
         return null
      } else {
         if (playerSelection === 'Rock' && computerSelect === 'Scissors') {
         console.log('win');   
         return true
           } else if (playerSelection === 'Paper' && computerSelect === 'Rock') {
            console.log('win');     
          return true
           } else if (playerSelection === 'Scissors' && computerSelect === 'Paper') {
            console.log('win');     
            return true
           } else {
            console.log('lose');     
           return true
           }
   }
      };




// function game() {

//         var computerScore = 0 ; 
//         var playerScore = 0 ;

//     for (let i = 0 ; i < 5 ; i++) {
        
//         let playerSelection = getPlayerChoice() ;
//         console.log('You chose ' + playerSelection) ;

//         let computerSelection = getComputerChoice();     
//        console.log('The computer chooses ' + computerSelection) ;


//         var result = playRound(playerSelection, computerSelection) ;
//         console.log(result) ;

//         if (result===true) {
//             playerScore++;
//             console.log('Well played !')
//         } else if (result===false) {
//             computerScore++;
//             console.log('Bad choices happen..')
//         } else if (result===null) {
//             console.log('It\s a tie.')
//         }
 
//         console.log('Computer score is '  + computerScore)
//         console.log('Your score is ' + playerScore)
        
//     }

//     if (computerScore > playerScore) {
//         console.log('You loose by ' + (computerScore-playerScore) + (' point(s)... harsh !'))
//     } else if (computerScore < playerScore) {
//         console.log('You win !! You defeated this poor computer by ' + (playerScore-computerScore) + ' point(s)')
//     } else if (computerScore === playerScore) {
//         console.log('It\'s a tie all the way. No luck !')
//     }
// } 

//  game()    

