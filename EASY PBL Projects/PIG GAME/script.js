'use strict';
// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let currentScore, activePlayer, scores, playing;
//starting conditions
const init = function () {
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player1El.classList.remove('player--active');
    player0El.classList.add('player--active');
    diceEl.classList.add('hidden');
    currentScore = 0;
    activePlayer = 0;
    scores = [0, 0];
    playing = true;
    diceEl.classList.add('hidden');
}
const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}
init();
//Rolling dice functionality
btnRoll.addEventListener('click', function () {
    if (playing) {
        //1.Generate a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1

        //2.Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        //3.Check for rolled 1:if true switch to next player
        if (dice != 1) {
            //add dice to the current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }
        else {
            //Switch to next player
            switchPlayer();

        }
    }
});

btnHold.addEventListener('click', function () {
    if (playing) {
        //1.add current score to active players score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        //2.Check score is >=100
        if (scores[activePlayer] >= 100) {
            playing = false
            diceEl.classList.add('hidden')
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }

        //finish the game

        //switch to next Player
        switchPlayer();
    }
})

btnNew.addEventListener('click', init)


