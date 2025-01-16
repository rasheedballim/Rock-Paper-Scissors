let humanScore = 0;
let computerScore = 0;
let lastClicked = null;

// Add event listeners to buttons
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        lastClicked = button.id; // Capture the button click
        playRound(lastClicked, getComputerChoice()); // Play a round using the clicked choice
    });
});

// Function to get computer choice
function getComputerChoice() {
    let number = Math.random();
    if (number < 1/3) {
        return "Scissors";
    } else if (number < 2/3) {
        return "Paper";
    } else {
        return "Rock";
    }
}

// Function to play a round
function playRound(x, y) {
    let humanChoice = x.toUpperCase();
    let computerChoice = y.toUpperCase();
    let resultMessage ="";


    if (humanChoice === computerChoice) {
        resultMessage = `It's a tie!!! ${humanChoice} is the same as ${computerChoice}`;
    } else if (
        (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (humanChoice === "PAPER" && computerChoice === "ROCK") ||
        (humanChoice === "SCISSORS" && computerChoice === "PAPER")
    ) {
        humanScore++;
        resultMessage = `Human wins!!! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        resultMessage = `Computer wins!!! ${computerChoice} beats ${humanChoice}`;
    }

    document.querySelector("#result").textContent = resultMessage;

    document.querySelector("#human-score").textContent = `Human Score: ${humanScore}`;

    document.querySelector("#computer-score").textContent = `Computer Score: ${computerScore}`;
    
    document.querySelector("#computer-choice").textContent = `Computer chose ${computerChoice}`;
}




