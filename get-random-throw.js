export function getRandomThrow() {

    const randomNumber = Math.ceil(Math.random() * 3);

    let computerPlay;

    if (randomNumber === 3) {
        computerPlay = 'rock';

    } else if (randomNumber === 2) {
        computerPlay === 'paper';

    } else if (randomNumber === 1) {
        computerPlay === 'scissors';
    } 

    return computerPlay;
}


export function doesUserWin(playerGuess, computerPlay) {
    if (playerGuess === 'rock' && computerPlay === 'scissors') {
        return true;
    } else if (playerGuess === 'paper' && computerPlay === 'rock') {
        return true;
    } else if (playerGuess === 'scissors' && computerPlay === 'paper') {
        return true;
    }
}