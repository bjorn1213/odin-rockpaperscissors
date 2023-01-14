

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

function playGame(playerSelection, computerSelection=getComputerChoice()){
    playerSelection = playerSelection.toLowerCase();

    let gameResult = '';
    let winText = 'You win. The computer chose ' + computerSelection;
    let drawText = 'The game is a draw. The computer chose ' + computerSelection;
    let loseText = 'You lose. The computer chose ' + computerSelection;

    if (playerSelection === computerSelection){
        gameResult = drawText;
    } else if (playerSelection === 'rock'){
        gameResult = computerSelection === 'paper' ? loseText : winText;
    } else if (playerSelection === 'paper'){
        gameResult = computerSelection === 'scissors' ? loseText : winText;
    } else { // player selection = scisscors
        gameResult = computerSelection === 'rock' ? loseText : winText;
    }

    return gameResult;
}