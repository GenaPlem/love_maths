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
                alert(`You clicked ${gameType}`);
            }
        })
    }
})

/**
 * The main game 'loop', called when the script is first loaded
 * and after the user's answer has been processed
 */
const runGame = () => {

    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
}

const checkAnswer = () => {

}

const calculateAnswer = () => {

}

const incrementScore = () => {

}

const incrementWrongAnswer = () => {

}

const displayAdditionQuestion = () => {

}

const displaySubtractQuestion = () => {

}

const displayMultiplyQuestion = () => {

}