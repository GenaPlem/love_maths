// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener('DOMContentLoaded', () => {
    let buttons = document.querySelectorAll('button');

    for (let button of buttons) {
        button.addEventListener('click', function () {
            if (this.getAttribute('data-type') === 'submit') {
                alert('You click submit')
            } else {
                let gameType = this.getAttribute('data-type');
                runGame(gameType);
            }
        })
    }

    runGame('addition');

})

/**
 * The main game 'loop', called when the script is first loaded
 * and after the user's answer has been processed
 */
const runGame = (gameType) => {

    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === 'addition') {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

const checkAnswer = () => {

}

const calculateAnswer = () => {

}

const incrementScore = () => {

}

const incrementWrongAnswer = () => {

}

const displayAdditionQuestion = (operand1, operand2) => {
    document.querySelector('#operand1').textContent = operand1;
    document.querySelector('#operand2').textContent = operand2;
    document.querySelector('#operator').textContent = '+';

}

const displaySubtractQuestion = () => {

}

const displayMultiplyQuestion = () => {

}