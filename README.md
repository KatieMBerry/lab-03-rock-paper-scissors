# lab-03-rock-paper-scissors

GOAL: Let the user-player choose rock, paper, or scissors to play against the computer. Track total wins, losses and draws.

STATE:
- wins
- losses
- draws
- _(current user selection -- radio button does this)_

How do we SHOW this state?
- display in divs' textContent property

HTML ELES we need to grab:
- State Changers:
    - Rock, Paper, Scissors - radio buttons (to get users' guess)
    - Shoot! button - to confirm users' guess
    - Reset button to reset the game
- State Viewers:
    - result span (message to compare the player's throw and the computer throw)
    - win span (to show number of wins)
    - lose span (to show number of losses)
    - draw span (to show number of draws)

How/When do we CHANGE this state?
- When the user selects a radio button and clicks the 'Shoot' button
    - on click: 
        - computer will generate a throw
        - get the users' throw
        - determine if the user:
            - won and increment the win span (where  the player's throw beats the computer throw) 
            - lost and increment the lose span (where the computer's throw beats the player's throw)
            - draws and increments the draw span (where the throws are identical)
- When the user clicks the reset button to reset the game
