const resultDisplay = document.querySelector(".result");
const winnerStatement = document.querySelector(".winner");
const loserStatement = document.querySelector(".loser");
const tiedStatement = document.querySelector(".tied");
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

function getGameWinner() {
  if (pScore === 5 && cScore === 5) {
    winnerStatement.style.display = "hidden";
    loserStatement.style.display = "hidden";
    tiedStatement.style.display = "block";
  }
  if (pScore === 5 && cScore < 5) {
    winnerStatement.style.display = "block";
  }
  if (cScore === 5 && pScore < 5) {
    loserStatement.style.display = "block";
  }
}

function reset() {
  if (pScore >= 6 && cScore >= 6) {
    pScore = 0;
    cScore = 0;
    tiedStatement.style.display = "none";
    winnerStatement.style.display = "none";
    loserStatement.style.display = "none";
    result = "";
  } else if ((pScore >= 6 && cScore < 6) || (cScore >= 6 && pScore < 6)) {
    pScore = 0;
    cScore = 0;
    winnerStatement.style.display = "none";
    tiedStatement.style.display = "none";
    loserStatement.style.display = "none";
    result = "Play Again";
  } else {
    console.log("Error");
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
      reset;
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
