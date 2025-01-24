// DOM Elements
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultDisplay = document.getElementById('result');
const scoreDisplay = document.getElementById('score');

// Game Variables
let playerScore = 0;
let computerScore = 0;

// Event Listeners for Buttons
rockButton.addEventListener('click', () => playGame('rock'));
paperButton.addEventListener('click', () => playGame('paper'));
scissorsButton.addEventListener('click', () => playGame('scissors'));

// Game Logic
function playGame(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = '';

  if (playerChoice === computerChoice) {
    result = "It's a draw!";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = 'You win!';
    playerScore++;
  } else {
    result = 'You lose!';
    computerScore++;
  }

  // Update Result and Score
  resultDisplay.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
  scoreDisplay.textContent = `Score: Player ${playerScore} - ${computerScore} Computer`;

  // Add Neon Glow to Result
  resultDisplay.style.textShadow = '0 0 5px #00b3ff, 0 0 10px #00b3ff, 0 0 20px #00b3ff';
}