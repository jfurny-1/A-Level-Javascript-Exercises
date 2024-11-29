document.body.style.backgroundColor = "#AA0000";

function startGame(){

    let choice1 = document.getElementById('player1')
    let choice2 = document.getElementById('player2')

    if (choice1 === choice2) {
        winnerOutput.innerHTML = `DRAW!`
            
    } else if (choice1 === "rock" && choice2 === "paper") {
        winnerOutput.innerHTML = `Player 2 WINS!`
    } else if(choice1 === "rock" && choice2 === "scissors") {
        winnerOutput.innerHTML = `Player 1 WINS!`
    } else if (choice1 === "paper" && choice2 === "rock") {
        winnerOutput.innerHTML = `Player 1 WINS`
    } else if (choice1 === "paper" && choice2 === "scissors") {
        winnerOutput.innerHTMl = `Player 2 WINS!`
    } else if (choice1 === "scissors" && choice2 === "paper") {
        winnerOutput.innerHTML = `Player 1 WINS!`
    } else if(choice1 === "scissors" && choice2 === "rock" ) {
        winnerOutput.innerHTML = `Player 2 WINS!`
    }

}


