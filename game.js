const cards = document.querySelectorAll('img');
const resultMessage = document.querySelector('.result-message');
const playerChoiceDisplay = document.querySelector('.player-choice');
const computerChoiceDisplay = document.querySelector('.computer-choice');
const playerScoreDisplay = document.querySelector('.player-score');
const computerScoreDisplay = document.querySelector('.computer-score');
const startAgainDisplay = document.querySelector('.start-again')
const gameResultDisplay = document.querySelector('.game-result')
let computerScore = 0 ;
let playerScore = 0 ;
let result ;


cards.forEach((card) => {
   card.addEventListener('click', (e) => {
      playRound(card.id, getComputerChoice());
      endGame();
})
})

function getComputerChoice() {
    const choices = ['Water', 'Fire','Plant']
    var computerChoice = choices[Math.floor(Math.random()*choices.length)];
    return (computerChoice);
 }

function playRound(playerSelection,computerSelect) {
   
   const imgPlayerChoice = new Image(50,50);
   switch(playerSelection) {
      case 'Water':
         imgPlayerChoice.src = 'images/carapuce-small.png';
         break;
      case 'Fire':
         imgPlayerChoice.src = 'images/salameche-small.png';
         break;
      case 'Plant':
         imgPlayerChoice.src = 'images/bulbizarre-small.png';
         break
   }
   playerChoiceDisplay.appendChild(imgPlayerChoice);

   const imgComputerChoice = new Image(50,50);
   switch(computerSelect) {
      case 'Water':
         imgComputerChoice.src = 'images/carapuce-small.png';
         break;
      case 'Fire':
         imgComputerChoice.src = 'images/salameche-small.png';
         break;
      case 'Plant':
         imgComputerChoice.src = 'images/bulbizarre-small.png';
         break
   }
   computerChoiceDisplay.appendChild(imgComputerChoice);
         
   if (playerSelection === computerSelect) {
               const p = document.createElement('p');
               p.textContent= "We call that a miss.";
               resultMessage.appendChild(p);
               
            
            } else {
               if ((playerSelection === 'Water' && computerSelect === 'Fire') || (playerSelection === 'Fire' && computerSelect === 'Plant') || (playerSelection === 'Plant' && computerSelect === 'Water') ) {
                  const p = document.createElement('p');
                  p.textContent= "It's very effective !";
                  resultMessage.appendChild(p); 
                  playerScore++
                           
               } else {
                  const p = document.createElement('p');
                  p.textContent= "Oh no! Big hit!";
                  resultMessage.appendChild(p);    
                  computerScore++
               }
         }

         computerScoreDisplay.textContent = computerScore;
         playerScoreDisplay.textContent = playerScore;
};

function endGame() {
   if (playerScore === 3) {
      gameResultDisplay.textContent=`You won ${playerScore} to ${computerScore} !`;
      gameResultDisplay.classList.add('win-txt');
   }

   if (computerScore === 3) {
      gameResultDisplay.textContent=`You lost ${computerScore} to ${playerScore} !`;
      gameResultDisplay.classList.add('lost-txt');
   }

   if (computerScore===3 || playerScore===3) {
      playerChoiceDisplay.textContent="";
      resultMessage.textContent="";
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
   resultMessage.textContent="";
   computerChoiceDisplay.textContent="";


   gameResultDisplay.textContent="";
   gameResultDisplay.classList.remove('lost-txt');
   gameResultDisplay.classList.remove('win-txt');

   startAgainDisplay.removeChild(startAgainDisplay.firstElementChild);
}