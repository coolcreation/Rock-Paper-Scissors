To make your code more functional and add unit testing, we can refactor the logic into smaller, reusable functions and use a testing framework like Jest for the unit tests. Here's the updated code with a functional approach:

### Refactored Code

```javascript
const buttonChoices = document.querySelector('.button-choices');
const displayArea = document.querySelector('#display-result');
const scoreBoard = document.querySelector('.score-board');

const choices = ["rock", "paper", "scissors"];
let score = { user: 0, computer: 0 };

buttonChoices.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const userChoice = e.target.innerText.toLowerCase();
        const computerChoice = getComputerChoice();
        const winner = determineWinner(userChoice, computerChoice);
        updateDisplay(userChoice, computerChoice, winner);
        updateScore(winner);
        updateScoreBoard();
    }
});

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(user, computer) {
    if (user === computer) return 'tie';
    if ((user === 'scissors' && computer !== 'rock') || 
        (user === 'paper' && computer !== 'scissors') || 
        (user === 'rock' && computer !== 'paper')) {
        return 'user';
    }
    return 'computer';
}

function updateDisplay(user, computer, winner) {
    const result = `<h3>user: ${user}</h3> <h3>computer: ${computer}</h3>`;
    if (winner === 'tie') {
        displayArea.innerHTML = `<h2>It's a tie</h2> ${result}`;
    } else if (winner === 'user') {
        displayArea.innerHTML = `<h2 class="green">User Wins!</h2> ${result}`;
    } else {
        displayArea.innerHTML = `<h2 class="red">Computer Wins!</h2> ${result}`;
    }
}

function updateScore(winner) {
    if (winner === 'user') {
        score.user += 1;
    } else if (winner === 'computer') {
        score.computer += 1;
    }
}

function updateScoreBoard() {
    scoreBoard.innerHTML = `<h3>user: <span class="green">${score.user}</span></h3> <h3>computer: <span class="red">${score.computer}</span></h3>`;
}
```

### Unit Tests with Jest

First, you need to install Jest if you haven't already:

```bash
npm install --save-dev jest
```

Then, you can create a `__tests__` directory and add your test files. Here's an example test file:

#### `game.test.js`

```javascript
const { getComputerChoice, determineWinner } = require('./game'); // Adjust the path as necessary

describe('Rock Paper Scissors Game', () => {
    test('getComputerChoice should return a valid choice', () => {
        const choice = getComputerChoice();
        expect(['rock', 'paper', 'scissors']).toContain(choice);
    });

    test('determineWinner should correctly identify a tie', () => {
        expect(determineWinner('rock', 'rock')).toBe('tie');
        expect(determineWinner('paper', 'paper')).toBe('tie');
        expect(determineWinner('scissors', 'scissors')).toBe('tie');
    });

    test('determineWinner should correctly identify the user as the winner', () => {
        expect(determineWinner('rock', 'scissors')).toBe('user');
        expect(determineWinner('paper', 'rock')).toBe('user');
        expect(determineWinner('scissors', 'paper')).toBe('user');
    });

    test('determineWinner should correctly identify the computer as the winner', () => {
        expect(determineWinner('rock', 'paper')).toBe('computer');
        expect(determineWinner('paper', 'scissors')).toBe('computer');
        expect(determineWinner('scissors', 'rock')).toBe('computer');
    });
});
```

To run the tests, add a script to your `package.json`:

```json
"scripts": {
    "test": "jest"
}
```

Then you can run the tests using:

```bash
npm test
```

This setup will help you write cleaner code and ensure your game logic is tested and works correctly.