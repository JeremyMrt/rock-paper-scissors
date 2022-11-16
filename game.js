const buttons = document.querySelectorAll('button');
const annonceResultat = document.querySelector('.result-message');
const seePlayerChoice = document.querySelector('.player-choice');
const seeComputerChoice = document.querySelector('.computer-choice');
// const playerScore = document.querySelector('player-score');
// const computerScore = document.querySelector('computer-score');

function getComputerChoice() {
    const choices = ['Paper', 'Rock','Scissors']
    var computerChoice = choices[Math.floor(Math.random()*choices.length)];
    return (computerChoice)
 }

buttons.forEach((button) => {
   button.addEventListener('click', (e) => {
      playRound(button.id, getComputerChoice());
})
})

function playRound(playerSelection,computerSelect) {


 const screenPlayerChoice = document.createElement('p');
 screenPlayerChoice.textContent = playerSelection;
 seePlayerChoice.appendChild(screenPlayerChoice);

 const screenComputerChoice = document.createElement('p');
 screenComputerChoice.textContent = computerSelect;
 seeComputerChoice.appendChild(screenComputerChoice);


   if (playerSelection === computerSelect) {
         const p = document.createElement('p');
         p.textContent= "It's a tie.";
         annonceResultat.appendChild(p);
         return result = null
      
      } else {
         if (playerSelection === 'Rock' && computerSelect === 'Scissors') {
            const p = document.createElement('p');
            p.textContent= "You win !";
            annonceResultat.appendChild(p); 
         return result = true
           
          } else if (playerSelection === 'Paper' && computerSelect === 'Rock') {
            const p = document.createElement('p');
            p.textContent= "You win !";
            annonceResultat.appendChild(p);     
          return result = true
           
         } else if (playerSelection === 'Scissors' && computerSelect === 'Paper') {
            const p = document.createElement('p');
            p.textContent= "You win !";
            annonceResultat.appendChild(p);   
            return result = true
           
         } else {
            const p = document.createElement('p');
            p.textContent= "You loose...";
            annonceResultat.appendChild(p);    
           return result = true
           }
   }


      };




// function isWinner() {

//         var computerScore = 0 ; 
//         var playerScore = 0 ;

//     for (let i = 0 ; i < 5 ; i++) {
        
//       var result = buttons.forEach((button) => {
//          button.addEventListener('click', (e) => {
//             playRound(button.id, getComputerChoice());
//       })
//       })

//         console.log(result) ;

//         if (result===true) {
//             playerScore++;
//         } else if (result===false) {
//             computerScore++;
//         } else if (result===null) {
//         }
 
//         console.log('Computer score is '  + computerScore)
//         console.log('Your score is ' + playerScore)
        
//     }

// } 









// SAVING PLAYROUND FUNCTION

// function playRound(playerSelection,computerSelect) {
//    const screenPlayerChoice = document.createElement('p');
//    screenPlayerChoice.textContent = playerSelection;
//    seePlayerChoice.appendChild(screenPlayerChoice);
  
//    const screenComputerChoice = document.createElement('p');
//    screenComputerChoice.textContent = computerSelect;
//    seeComputerChoice.appendChild(screenComputerChoice);
  
//      if (playerSelection === computerSelect) {
//            const p = document.createElement('p');
//            p.textContent= "It's a tie.";
//            annonceResultat.appendChild(p);
//            return null
        
//         } else {
//            if (playerSelection === 'Rock' && computerSelect === 'Scissors') {
//               const p = document.createElement('p');
//               p.textContent= "You win !";
//               annonceResultat.appendChild(p); 
//            return true
             
//             } else if (playerSelection === 'Paper' && computerSelect === 'Rock') {
//               const p = document.createElement('p');
//               p.textContent= "You win !";
//               annonceResultat.appendChild(p);     
//             return true
             
//            } else if (playerSelection === 'Scissors' && computerSelect === 'Paper') {
//               const p = document.createElement('p');
//               p.textContent= "You win !";
//               annonceResultat.appendChild(p);   
//               return true
             
//            } else {
//               const p = document.createElement('p');
//               p.textContent= "You loose...";
//               annonceResultat.appendChild(p);    
//              return true
//              }
//      }
//         };