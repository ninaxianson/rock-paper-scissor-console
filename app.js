let computerScore = 0;
let playerScore = 0;

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
    console.log(`Computer chose ${computerSelection}, you chose ${playerSelection}. 
  The computer wins this round.`);
    computerScore++;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log(`You chose ${playerSelection}, the computer chose ${computerSelection}. 
  You win this round.`);
    playerScore++;
  } else {
    return "You have entered an invalid choice. Please enter rock, paper, or scissors";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      "Choose paper, rock, or scissors"
    ).toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
  if (playerScore > computerScore) {
    return "You've beaten the computer this game!!!";
  } else if (computerScore > playerScore) {
    return "The computer beat you this game. Try again!";
  } else {
    return "You tied the computer this game!";
  }
}
console.log(game());
