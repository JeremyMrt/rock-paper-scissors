const cards = document.querySelectorAll('.cards > img');
const resultMessage = document.querySelector('.result-message');
const playerChoiceDisplay = document.querySelector('.player-choice');
const computerChoiceDisplay = document.querySelector('.computer-choice');
const playerScoreDisplay = document.querySelector('.player-score');
const computerScoreDisplay = document.querySelector('.computer-score');
const startAgainDisplay = document.querySelector('.start-again')
const gameResultDisplay = document.querySelector('.game-result')
const resultBlock = document.querySelector('.annonce-resultat');
const scoreBlock = document.querySelector('.score');
const startMessage = document.querySelector('.start');
const dialogBlock = document.querySelector('.dialog');
let computerScore = 0 ;
let playerScore = 0 ;
let result ;
const controller = new AbortController();

resultBlock.style.visibility='hidden';
scoreBlock.style.visibility="hidden";


// TYPEWRITER EFFECT TRYOUTS
var str = "Beat your rival Gary, and reach 3 points before he does!"
var interval;
var index= 0;

interval = setInterval(typewriter, 100);

function typewriter() {
   if (index >= str.length) {
      clearInterval(interval);
   } else {
      $('.dialog').append(str[index]);
      index++;
   }
}

// GAME ITSELF

var clickActive = 1; // To prevent clicking within a 3 seconde span

cards.forEach((card) => {
   card.addEventListener('click', (e) => {
      if (clickActive) {
      playRound(card.id, getComputerChoice());
      // Waiting for round 3 to be showned, and then showing the end results        
      endTimer = setTimeout(endGame, 3900);
      // Prevent click
      clickActive = 0;
      setTimeout (function() {
         clickActive = 1;
      }, 3300);
      }
      // Stoping click when game is over
      if (computerScore===3 || playerScore===3) {
         controller.abort()
      }
}, {signal : controller.signal})
})


function getComputerChoice() {
    const choices = ['Carapuce', 'Salameche','Bulbizarre']
    var computerChoice = choices[Math.floor(Math.random()*choices.length)];
    return (computerChoice);
 }

function playRound(playerSelection,computerSelect) {

   resultBlock.style.visibility='visible';
   scoreBlock.style.visibility="visible";
   startMessage.style.display="none";
   dialogBlock.style.display="none";


   
   const imgPlayerChoice = new Image(50,50);
   switch(playerSelection) {
      case 'Carapuce':
         imgPlayerChoice.src = 'images/carapuce-small.png';
         break;
      case 'Salameche':
         imgPlayerChoice.src = 'images/salameche-small.png';
         break;
      case 'Bulbizarre':
         imgPlayerChoice.src = 'images/bulbizarre-small.png';
         break
   }
   playerChoiceDisplay.insertAdjacentElement('afterbegin', imgPlayerChoice);
   imgPlayerChoice.classList.add('animation-player-choice');

   const imgComputerChoice = new Image(50,50);
   switch(computerSelect) {
      case 'Carapuce':
         imgComputerChoice.src = 'images/carapuce-small.png';
         break;
      case 'Salameche':
         imgComputerChoice.src = 'images/salameche-small.png';
         break;
      case 'Bulbizarre':
         imgComputerChoice.src = 'images/bulbizarre-small.png';
         break
   }
   computerChoiceDisplay.insertAdjacentElement('afterbegin', imgComputerChoice);
   imgComputerChoice.classList.add('animation-ia-choice');
         
   if (playerSelection === computerSelect) {
               const p = document.createElement('p');
               p.textContent= "No effect!";
               resultMessage.insertAdjacentElement('afterbegin', p);
               p.classList.add('animation-result-message')  
            
            } else {
               if ((playerSelection === 'Carapuce' && computerSelect === 'Salameche') || (playerSelection === 'Salameche' && computerSelect === 'Bulbizarre') || (playerSelection === 'Bulbizarre' && computerSelect === 'Carapuce') ) {
                  const p = document.createElement('p');
                  p.textContent= "Effective !";
                  resultMessage.insertAdjacentElement('afterbegin', p);
                  p.classList.add('animation-result-message')  
                  playerScore++
                           
               } else {
                  const p = document.createElement('p');
                  p.textContent= "Oh no!";
                  resultMessage.insertAdjacentElement('afterbegin', p);
                  p.classList.add('animation-result-message')   
                  computerScore++
               }
         }
         
         setTimeout(scoreUp,2800);
};

function scoreUp() {
   computerScoreDisplay.textContent = computerScore;
   playerScoreDisplay.textContent = playerScore;
}

function endGame() {
   if (playerScore === 3) {
      gameResultDisplay.innerHTML="You defeated Gary!";
      gameResultDisplay.classList.add('win-txt');
   }

   if (computerScore === 3) {
      gameResultDisplay.textContent=`GAME OVER...`;
      gameResultDisplay.classList.add('lost-txt');
   }

   if (computerScore===3 || playerScore===3) {
      playerChoiceDisplay.textContent="";
      resultMessage.textContent="";
      computerChoiceDisplay.textContent="";
      resultBlock.style.display='none';
    
      const startAgainButton = document.createElement('button');
      startAgainButton.innerHTML= "Fight again" ;
      startAgainDisplay.appendChild(startAgainButton);      
      startAgainButton.addEventListener('click', startAgain);
   }
   clearTimeout(endTimer);
} 

function startAgain() {
   computerScore = 0;
   playerScore = 0;

   computerScoreDisplay.textContent = computerScore;
   playerScoreDisplay.textContent = playerScore;
   resultMessage.textContent="";

   resultBlock.style.display='flex';


   gameResultDisplay.textContent="";
   gameResultDisplay.classList.remove('lost-txt');
   gameResultDisplay.classList.remove('win-txt');

   startAgainDisplay.removeChild(startAgainDisplay.firstElementChild);



// Not very elegant. Need another solution to restart the loop after
// having aborting it!
   const controller = new AbortController();
   cards.forEach((card) => {
      card.addEventListener('click', (e) => {
         if (clickActive) {
         playRound(card.id, getComputerChoice());
         // Waiting for round 3 to be showned, and then showing the end results        
         endTimer = setTimeout(endGame, 3900);
         // Prevent click
         clickActive = 0;
         setTimeout (function() {
            clickActive = 1;
         }, 3300);
         }
         // Stoping click when game is over
         if (computerScore===3 || playerScore===3) {
            controller.abort()
         }
   }, {signal : controller.signal})
   })
}