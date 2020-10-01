import { getRandomThrow, doesUserWin} from './get-random-throw.js';

const shootButton = document.querySelector('#shoot-button');
const resetButton = document.querySelector('#reset-button');
const resultsSpan = document.querySelector('#results-span');
const winSpan = document.querySelector('#wins-span');
const lossesSpan = document.querySelector('#losses-span');
const drawsSpan = document.querySelector('#draws-span');


let wins = 0;
let losses = 0;
let draw = 0;

shootButton.addEventListener('click', () => {
    const computerThrow = getRandomThrow();

    const checkedButton = document.querySelector(':checked');
    const userThrow = checkedButton.value;
    
    if (userThrow === computerThrow) {
        draw++;

        drawsSpan.textContent = draw;
        resultsSpan.textContent = 'You tied with the computer!';

    } else if (doesUserWin(userThrow, computerThrow)) {
        wins++;

        winSpan.textContent = wins;
        resultsSpan.textContent = 'You Won!';

    } else if (!doesUserWin(userThrow, computerThrow)) {
        losses++;

        lossesSpan.textContent = losses;
        resultsSpan.textContent = 'You Lose!';
    } 
    // console.log(userThrow, computerThrow);
});

resetButton.addEventListener('click', () => {
    wins = 0;
    losses = 0;
    draw = 0;

    winSpan.textContent = wins;
    lossesSpan.textContent = losses;
    drawsSpan.textContent = draw;
    resultsSpan.textContent = '';
});