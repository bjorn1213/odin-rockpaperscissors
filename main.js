

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

function playRound(playerSelection, computerSelection=getComputerChoice()){
    playerSelection = playerSelection.toLowerCase();

    let roundResult = '';
    let winText = 'You win. The computer chose ' + computerSelection;
    let drawText = 'The round is a draw. The computer chose ' + computerSelection;
    let loseText = 'You lose. The computer chose ' + computerSelection;

    if (playerSelection === computerSelection){
        roundResult = drawText;
    } else if (playerSelection === 'rock'){
        roundResult = computerSelection === 'paper' ? loseText : winText;
    } else if (playerSelection === 'paper'){
        roundResult = computerSelection === 'scissors' ? loseText : winText;
    } else { // player selection = scisscors
        roundResult = computerSelection === 'rock' ? loseText : winText;
    }

    return roundResult;
}