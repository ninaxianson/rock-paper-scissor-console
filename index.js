const playerChoices = document.getElementById("player-choices");
const roundResult = document.getElementById("round-result");
let playerScore = document.querySelector(".player-score");
let computerScore = document.querySelector(".computer-score");
let pScore = 0;
let cScore = 0;
let playerSelection;
let computerSelection;
let result;

const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
};

// Compares players choice to computer's choice adds pts to winner
const scoreRound = () => {
  if (playerSelection === computerSelection) {
    result = `Computer chose ${computerSelection}, you chose ${playerSelection}. 
      It's a tie! You each win a point!`;
    pScore += 1;
    cScore += 1;
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    result = `Computer chose ${computerSelection}, you chose ${playerSelection}. 
    The computer wins this round.`;
    cScore += 1;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    result = `You chose ${playerSelection}, the computer chose ${computerSelection}. 
    You win this round.`;
    pScore += 1;
  } else {
    result =
      "You have entered an invalid choice. Please enter rock, paper, or scissors";
  }
  roundResult.innerText = result;
  playerScore.innerText = pScore;
  computerScore.innerText = cScore;
};

// Checks to see if 5pts reached...declares winner then calls reset function
const getGameWinner = () => {
  roundResult.innerText = result;
  if (pScore === 5 && cScore === 5) {
    result = "It's a tied game! Play again!"
    reset()
  } else if ( pScore === 5 && cScore < 5) {
    result = "You've won the game!! Make a selection to play again!";
    reset()
  } else if (cScore === 5 && pScore < 5) {
    result = "The computer won! Play again."
    reset()
  } 
}
//  resets scores to zero if 5pts reached
const reset = () => {
  roundResult.innerText = result;
  if (pScore === 5 && cScore === 5) {
    pScore = 0;
    cScore = 0;
  } else if ((pScore === 5 && cScore < 5) || (cScore === 5 && pScore < 5)) {
    pScore = 0;
    cScore = 0;
  } else {
    console.log('error');
  }
}

// This is where the game gets called from
// Gets the player's choice as well as the computer's choice!
playerChoices.addEventListener("click", (event) => {
  playerSelection = event.target.id;
  computerSelection = getComputerChoice();
  scoreRound();
  getGameWinner();
});
