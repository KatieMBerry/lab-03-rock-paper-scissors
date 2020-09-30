// import functions and grab DOM elements
const shootButton = document.querySelector('#shoot-button');
const resetButton = document.querySelector('#reset-button');
const resultsSpan = document.querySelector('#results-span');
const winSpan = document.querySelector('#wins-span');
const lossesSpan = document.querySelector('#losses-span');
const drawsSpan = document.querySelector('#draws-span');

// initialize state
let wins = 0;
let losses = 0;
let draws = 0;

// set event listeners to update state and DOM
shootButton.addEventListener('click', () => {
//computer will generate a throw
    const randomThrow = Math.ceil(Math.random() * 3);

//I need to compare this number to rock, paper, scissors.  Need to assign a numeric value to these values

    let computerThrow;
//If getRandomThrow is 1, will call it scissors
//If it's 2, it's paper
//If it's 3, it's rock

    if (randomThrow === 1) {
        computerThrow = 'scissors';
    } else if (randomThrow === 2) {
        computerThrow = 'paper';
    } else {
        computerThrow = 'rock';
    }
    
//get the user's throw by seeing which radio button is checked
    const checkedButton = document.querySelector(':checked');
    const userThrow = checkedButton.value;
    
//determine if the user draws
    if (userThrow === computerThrow) {
        draws++;
        resultsSpan.textContent = 'You tied with the computer!';
    }   console.log(userThrow, computerThrow);
    //If the uer doesn't draw, then they won or lost:
    // return doesUserWin;
});

resetButton.addEventListener('click', () => {
    wins = 0;
    losses = 0;
    draws = 0;

    winSpan.textContent = wins;
    lossesSpan.textContent = losses;
    drawsSpan.textContent = draws;
    resultsSpan.textContent = '';
});