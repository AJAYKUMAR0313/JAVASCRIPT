'use strict';
console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct Number'
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener
    ('click', function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof (guess));
        //when there is no input
        if (!guess) {
            // document.querySelector('.message').textContent = '😞no number';
            displayMessage('😞no number');
        }
        // when player wins
        else if (guess === secretNumber) {
            // document.querySelector('.message').textContent = '🥳Correct NUmber';
            displayMessage('🥳Correct NUmber');
            document.querySelector('body').style.backgroundColor = '#60b347';

            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.number').textContent = secretNumber;

            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        }
        //when guess is wrong
        else {
            if (score > 1) {
                document.querySelector('.message').textContent = guess > secretNumber ? '📈Too high' : '📉Too Low';
                score--;
                document.querySelector('.score').textContent = score;
            }
            else {
                document.querySelector('.message').textContent = 'you loseeeeeeee';
                document.querySelector('.score').textContent = 0;

            }

        }
    });

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector('.body').style.backgroundColor = '#333';

    // document.querySelector('.message').textContent = 'Start guessing.....';
    displayMessage('Start guessing.....');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})