const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const body = document.getElementsByTagName('body')[0];
const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const computerScoreDisplay = document.getElementById('computerScoreDisplay');

let playerScore = 0;
let compScore = 0;

function playGame(playerChoice){
    
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    console.log(computerChoice);

    let result = '';

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE";
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN" : "YOU LOSE";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN" : "YOU LOSE";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN" : "YOU LOSE";
                break;
        }
    }
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    body.classList.remove('greenBackground', 'redBackground', 'blueBackground');

    switch(result){
        case "YOU WIN":
            body.classList.add('greenBackground');
            playerScore++;
            break;
        case "YOU LOSE":
            body.classList.add('redBackground');
            compScore++;
            break;
        case "IT'S A TIE":
            body.classList.add('blueBackground');
            break;
    }
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = compScore;
}