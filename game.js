const buttons = document.querySelectorAll('button');
const annonceResultat = document.querySelector('.result-message');
const playerChoiceDisplay = document.querySelector('.player-choice');
const computerChoiceDisplay = document.querySelector('.computer-choice');
const playerScoreDisplay = document.querySelector('.player-score');
const computerScoreDisplay = document.querySelector('.computer-score');
const startAgainDisplay = document.querySelector('.start-again')
const gameResultDisplay = document.querySelector('.game-result')
let computerScore = 0 ;
let playerScore = 0 ;
let result ;


buttons.forEach((button) => {
   button.addEventListener('click', (e) => {
      playRound(button.id, getComputerChoice());
      endGame();
})
})

function getComputerChoice() {
    const choices = ['Paper', 'Rock','Scissors']
    var computerChoice = choices[Math.floor(Math.random()*choices.length)];
    return (computerChoice)
 }

function playRound(playerSelection,computerSelect) {

      const screenPlayerChoice = document.createElement('p');
      screenPlayerChoice.textContent = playerSelection;
      playerChoiceDisplay.appendChild(screenPlayerChoice);

      const screenComputerChoice = document.createElement('p');
      screenComputerChoice.textContent = computerSelect;
      computerChoiceDisplay.appendChild(screenComputerChoice);


         if (playerSelection === computerSelect) {
               const p = document.createElement('p');
               p.textContent= "It's a tie.";
               annonceResultat.appendChild(p);
               
            
            } else {
               if ((playerSelection === 'Rock' && computerSelect === 'Scissors') || (playerSelection === 'Paper' && computerSelect === 'Rock') || (playerSelection === 'Scissors' && computerSelect === 'Paper') ) {
                  const p = document.createElement('p');
                  p.textContent= "You win !";
                  annonceResultat.appendChild(p); 
                  playerScore++
                           
               } else {
                  const p = document.createElement('p');
                  p.textContent= "You loose...";
                  annonceResultat.appendChild(p);    
                  computerScore++
               }
         }

         computerScoreDisplay.textContent = computerScore;
         playerScoreDisplay.textContent = playerScore;
};

function endGame() {
   if (playerScore === 3) {
      gameResultDisplay.textContent="You won !!";
      gameResultDisplay.classList.add('win-txt');
   }

   if (computerScore === 3) {
      gameResultDisplay.textContent="You lost !!";
      gameResultDisplay.classList.add('lost-txt');
   }

   if (computerScore===3 || playerScore===3) {
      playerChoiceDisplay.textContent="";
      annonceResultat.textContent="";
      computerChoiceDisplay.textContent="";

      const startAgainButton = document.createElement('button');
      startAgainButton.innerHTML= "Start again ?" ;
      startAgainDisplay.appendChild(startAgainButton);      
      startAgainButton.addEventListener('click', startAgain);
   }
} 

function startAgain() {
   computerScore = 0;
   playerScore = 0;

   computerScoreDisplay.textContent = computerScore;
   playerScoreDisplay.textContent = playerScore;
   playerChoiceDisplay.textContent="";
   annonceResultat.textContent="";
   computerChoiceDisplay.textContent="";

   gameResultDisplay.textContent="";
   gameResultDisplay.classList.remove('lost-txt');
   gameResultDisplay.classList.remove('win-txt');

   startAgainDisplay.removeChild(startAgainDisplay.firstElementChild);
}