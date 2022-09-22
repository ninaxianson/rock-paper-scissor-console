const resultDisplay = document.querySelector(".result");
const winner = document.querySelector(".winner");
const loser = document.querySelector(".loser");
const tied = document.querySelector(".tied");
let pScore = 0;
let cScore = 0;
let result;

let getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
};

const updateScore = () => {
  let computerScore = document.querySelector(".computer-score");
  let playerScore = document.querySelector(".player-score");
  playerScore.textContent = pScore;
  computerScore.textContent = cScore;
};

function getGameWinner(pScore, cScore) {
  if (pScore === 5 && cScore === 5) {
    tied.style.display = "block";
  }
  if (pScore === 5) {
    winner.style.display = "block";
  }
  if (cScore === 5) {
    loser.style.display = "block";
  }
}

function reset() {
  if (pScore > 5 || cScore > 5) {
    pScore = 0;
    cScore = 0;
    loser.style.display = "none";
    winner.style.display = "none";
    tied.style.display = "none";
  }
}

let playerChoices = document
  .querySelectorAll("button")
  .forEach((possibleChoice) => {
    possibleChoice.addEventListener("click", function () {
      const playerSelection = possibleChoice.id;
      const computerSelection = getComputerChoice();

      playRound(playerSelection, computerSelection);
      updateScore();
      getGameWinner(pScore, cScore);
      resultDisplay.innerText = result;
    });
  });

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    result = `Computer chose ${computerSelection}, you chose ${playerSelection}. 
    It's a tie! You each win a point!`;
    pScore++;
    cScore++;
    reset();
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    result = `Computer chose ${computerSelection}, you chose ${playerSelection}. 
  The computer wins this round.`;
    cScore++;
    reset();
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    result = `You chose ${playerSelection}, the computer chose ${computerSelection}. 
  You win this round.`;
    pScore++;
    reset();
  } else {
    result =
      "You have entered an invalid choice. Please enter rock, paper, or scissors";
  }
  resultDisplay.innerText = result;
}
