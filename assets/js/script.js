// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener('DOMContentLoaded', () => {
    let buttons = document.querySelectorAll('button');

    for (let button of buttons) {
        button.addEventListener('click', function () {
            if (this.getAttribute('data-type') === 'submit') {
                checkAnswer();
            } else {
                let gameType = this.getAttribute('data-type');
                runGame(gameType);
            }
        })
    }

    document.querySelector('#answer-box').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            checkAnswer();
        }
    })

    runGame('addition');

})

/**
 * The main game 'loop', called when the script is first loaded
 * and after the user's answer has been processed
 */
const runGame = (gameType) => {

    document.querySelector('#answer-box').value = '';
    document.querySelector('#answer-box').focus();

    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === 'addition') {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === 'subtract') {
        displaySubtractQuestion(num1, num2);
    } else if (gameType === 'multiply') {
        displayMultiplyQuestion(num1, num2);
    } else if (gameType === 'division') {
        let result = num1 * num2;
        displayDivisionQuestion(result, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

/**
 * Checks the answer against the first element in
 * the returned calculateCorrectAnswer array
 */
const checkAnswer = () => {

    let userAnswer = +(document.querySelector('#answer-box').value);
    let calculatedAnswer = calculateCorrectAnswer()
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert('Hey! You got it right! :D');
        incrementScore();
    } else {
        alert(`Awwww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);
}

/**
 * Gets the operands (the numbers) and the operator (plus, minus etc)
 * directly from the dom, and returns the correct answer.
 */
const calculateCorrectAnswer = () => {

    let operand1 = +(document.querySelector('#operand1').innerText);
    let operand2 = +(document.querySelector('#operand2').innerText);
    let operator = document.querySelector('#operator').innerText;

    if (operator === '+') {
        return [operand1 + operand2, 'addition']
    } else if (operator === '-') {
        return [operand1 - operand2, 'subtract']
    } else if (operator === 'x') {
        return [operand1 * operand2, 'multiply']
    } else if (operator === '/') {
        return [operand1 / operand2, 'division']
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
}

/**
 * Gets the current score from the DOM and increments it by 1
 */
const incrementScore = () => {

    let oldScore = +(document.querySelector('#score').innerText);
    document.querySelector('#score').innerText = ++oldScore;

}

/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 */
const incrementWrongAnswer = () => {

    let oldScore = +(document.querySelector('#incorrect').innerText);
    document.querySelector('#incorrect').innerText = ++oldScore;

}

const displayAdditionQuestion = (operand1, operand2) => {
    document.querySelector('#operand1').textContent = operand1;
    document.querySelector('#operand2').textContent = operand2;
    document.querySelector('#operator').textContent = '+';
}

const displaySubtractQuestion = (operand1, operand2) => {
    document.querySelector('#operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.querySelector('#operand2').textContent = operand1 > operand2 ? operand2 : operand1;
    document.querySelector('#operator').textContent = '-';
}

const displayMultiplyQuestion = (operand1, operand2) => {
    document.querySelector('#operand1').textContent = operand1;
    document.querySelector('#operand2').textContent = operand2;
    document.querySelector('#operator').textContent = 'x';
}

const displayDivisionQuestion = (operand1, operand2) => {
    document.querySelector('#operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.querySelector('#operand2').textContent = operand1 > operand2 ? operand2 : operand1;
    document.querySelector('#operator').textContent = '/';
}