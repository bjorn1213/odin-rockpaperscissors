function getComputerChoice(){
    let randomInt = Math.floor(Math.random() * 3);
    let choice = ''

    switch(randomInt){
        case 0:
            choice = 'rock';
            break;
        case 1:
            choice = 'paper';
            break;
        default:
            choice = 'scissors';        
    }

    return choice;
}

function playRound(playerChoice, computerChoice=getComputerChoice()){
    playerChoice = playerChoice.toLowerCase();

    let roundResult = '';
    let winText = 'You win. The computer chose ' + computerChoice;
    let drawText = 'The round is a draw. The computer chose ' + computerChoice;
    let loseText = 'You lose. The computer chose ' + computerChoice;

    if (playerChoice === computerChoice){
        roundResult = drawText;
    } else if (playerChoice === 'rock'){
        roundResult = computerChoice === 'paper' ? loseText : winText;
    } else if (playerChoice === 'paper'){
        roundResult = computerChoice === 'scissors' ? loseText : winText;
    } else { // player selection = scisscors
        roundResult = computerChoice === 'rock' ? loseText : winText;
    }

    return roundResult;
}

function getPlayerChoice(){
    let validChoice = false;
    let choice = '';

    while (!validChoice){
        choice = prompt('Pick from rock, paper, or scissors.');
        choice = choice.toLowerCase();

        if (choice != 'scissors' && choice != 'rock' && choice != 'paper'){
            validChoice = false;
        } else {
            validChoice = true;
        }
    }

    return choice;
}

function getDivByID(divID){
    let reqDiv;
    let exists;
    if (document.querySelector(`#${divID}`)){
        reqDiv = document.querySelector(`#${divID}`);
        exists = true;
    } else {
        reqDiv = document.createElement('div');
        reqDiv.id = divID;
        document.querySelector('body').appendChild(reqDiv);
        exists = false;
    }

    return reqDiv;
}

let playerScore = 0;
let computerScore = 0;

function processOutcome(roundOutcome){
    if (roundOutcome.includes('win')){
        playerScore++;
    } else if (roundOutcome.includes('lose')) {
        computerScore++;
    };
    
    const scoreDiv = getDivByID('running-score')

    if (playerScore === 5) {
        scoreDiv.textContent = 'You won 5 times! Click to start over.'
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        scoreDiv.textContent = 'The computer won 5 times! Click to start over.'
        playerScore = 0;
        computerScore = 0;
    } else {
        scoreDiv.textContent = `You won ${playerScore} times, the computer won ${computerScore} times. First to 5 wins, wins the game.`
    }
};

function processBtnPress(playerChoice){
    const resultDiv = getDivByID('round-result');
    const roundOutcome = playRound(playerChoice)
    resultDiv.textContent = roundOutcome;

    processOutcome(roundOutcome);
}

const buttons = document.querySelectorAll('button');

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const playerChoice = btn.textContent.toLowerCase();
        processBtnPress(playerChoice);
    });
});