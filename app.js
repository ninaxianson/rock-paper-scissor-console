let playerScore = 0;
let computerScore = 0;


let getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
};

function playRound(playerSelection, computerSelection) { 
  if (playerSelection === computerSelection) {
    return `Computer chose ${computerSelection}, you chose ${playerSelection}. 
    It's a tie!`;
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    return `Computer chose ${computerSelection}, you chose ${playerSelection}. 
    The computer wins this round.`;
    computerScore++;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `Computer chose ${computerSelection}, you chose ${playerSelection}. 
    You win this round.`;
    playerScore++
  } else {
    return "You have entered an invalid choice. Please enter rock, paper, or scissors"
  }
  
}
function endGame(playerScore, computerScore) {
  if (playerScore === 5 || computerScore === 5) {
    console.log("Game Over")
  } if (playerScore > computerScore) {
    return "You are the rock, paper, scissors champ!!!"
  } else {
    return "The computer won the game! Try your luck again."
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
  endGame();
}




const playerSelection = prompt("Choose paper, rock, or scissors").toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))

game();