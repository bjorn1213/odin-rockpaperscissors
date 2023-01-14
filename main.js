

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

    return choice
}