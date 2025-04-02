document.addEventListener('DOMContentLoaded', () => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    let attempts = 0;

    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const message = document.getElementById('message');
    const attemptsDisplay = document.getElementById('attempts');

    guessButton.addEventListener('click', () => {
        const userGuess = parseInt(guessInput.value, 10);
        attempts++;

        if (userGuess === randomNumber) {
            message.textContent = 'Congratulations! You guessed the number!';
            message.style.color = 'green';
        } else if (userGuess < randomNumber) {
            message.textContent = 'Too low! Try again.';
            message.style.color = 'red';
        } else if (userGuess > randomNumber) {
            message.textContent = 'Too high! Try again.';
            message.style.color = 'red';
        }

        attemptsDisplay.textContent = attempts;
    });
});