document.body.style.backgroundColor = "#AA0000";

function startGame(){

    let choice1 = document.getElementById('player1')
    let choice2 = document.getElementById('player2')

    if (choice1 === "rock") {
        player1Choice.src = "rock.jpg"
    } else if (choice1 === "paper") {
        player1Choice.src = "paper.png" 
    } else if (choice1 === "scissors") {
        player1Choice.src = "scissors.jpg"
    }

    if (choice2 === "rock") {
        player2Choice.src = "rock.jpg"
    }  else if (choice2 === "paper") {
        player2Choice.src = "paper.png" 
    } else if (choice2 === "scissors") {
        player2Choice.src ="scissors.jpg"
    }


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


