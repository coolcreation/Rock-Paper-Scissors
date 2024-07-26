
//  rock beats scissors   -  scissors loses to rock
//  rock loses to paper   -  paper beats rock
//  paper loses to scissors  -  scissors beats paper

let buttonChoices = document.querySelector('.button-choices');
let displayArea = document.querySelector('#display-result');
let scoreBoard = document.querySelector('.score-board');

let choices = ["rock", "paper", "scissors"], score = {user: 0, computer: 0};
let user, computer;

buttonChoices.addEventListener('click', (e) => {
    user = e.target.innerText.toLowerCase()

    const result = choices.map((element) => element)
    computer = choices[Math.floor(Math.random() * result.length)] 

    if (user == computer) {
        updateDisplay('tie')
    } else {
        if (user == 'scissors' && computer != 'rock' || user == 'paper' && computer != 'scissors' || user == 'rock' && computer != 'paper') {
            updateDisplay(user)
        } else {
            updateDisplay(computer)
        }
    } 

});



function updateDisplay(outcome){
    const strEnding = `<h3>user : ${user}</h3> <h3>computer : ${computer}</h3>`

    if(outcome == 'tie'){
        displayArea.innerHTML = `<h2>It's a tie</h2> ${strEnding}`
    } else if (outcome == user ) {
        score.user += 1
        displayArea.innerHTML = `<h2 class="green">User Wins!</h2> ${strEnding}`
    } else {
        score.computer += 1
        displayArea.innerHTML = `<h2 class="red">Computer Wins!</h2> ${strEnding}`
    }
    scoreBoard.innerHTML = `<h3>user: <span class="green">${score.user}</span></h3> <h3>computer: <span class="red">${score.computer}</span></h3>`
    console.log(score);
}

















