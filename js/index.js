
//  rock beats scissors   -  scissors loses to rock
//  rock loses to paper   -  paper beats rock
//  paper loses to scissors  -  scissors beats paper

let buttonChoices = document.querySelector('.button-choices');
let displayArea = document.querySelector('#display-result');
let scoreBoard = document.querySelector('.score-board');
let resetButton = document.querySelector('.reset-game');

const choices = ["rock", "paper", "scissors"];
let player, computer, score = {playerScore: 0, computerScore: 0};

buttonChoices.addEventListener('click', (e) => {
    player = e.target.id

    displayArea.classList.add('active')
    resetButton.classList.add('active')

    const result = choices.map((element) => element)
    computer = choices[Math.floor(Math.random() * result.length)] 

    if (player == computer) {
        updateDisplay('tie')
    } else {
        if (player == 'scissors' && computer != 'rock' || player == 'paper' && computer != 'scissors' || player == 'rock' && computer != 'paper') {
            updateDisplay(player)
        } else {
            updateDisplay(computer)
        }
    } 

});

resetButton.addEventListener('click', (e) => {
    resetDisplay();
});

function updateDisplay(outcome){
    const strEnding = `<h3>player : ${player}</h3> <h3>computer : ${computer}</h3>`

    if(outcome == 'tie'){
        displayArea.innerHTML = `<h2>It's a tie</h2> ${strEnding}`
    } else if (outcome == player ) {
        score.playerScore += 1
        displayArea.innerHTML = `<h2 class="green">Player Wins!</h2> ${strEnding}`
    } else {
        score.computerScore += 1
        displayArea.innerHTML = `<h2 class="red">Computer Wins!</h2> ${strEnding}`
    }
    scoreBoard.innerHTML = `<h3>player: <span class="green">${score.playerScore}</span></h3> <h3>computer: <span class="red">${score.computerScore}</span></h3>`
    console.log(score);
};

function resetDisplay(){
    score.computerScore = 0;
    score.playerScore = 0;
    scoreBoard.innerHTML = ''
    displayArea.classList.toggle('active')
    resetButton.classList.toggle('active')
}










let ver = `<meta description="Rock-Paper-Scissors Game, learning GIT, and implementing a functional approach allowing for unit tests">`

console.log(ver.length);




