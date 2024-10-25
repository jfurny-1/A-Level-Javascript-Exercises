let counter = 0
function square(num){
    if (counter % 2 === 0) {
        if (num === 1) {
            butImg1.src = "X.jpg"
        }
        else if (num === 2) {
            butImg2.src = "X.jpg"
        }
        else if (num === 3) {
            butImg3.src = "X.jpg"
        }
        else if (num === 4) {
            butImg4.src = "X.jpg"
        }
        else if (num === 5) {
            butImg5.src = "X.jpg"
        }
        else if (num === 6) {
            butImg6.src = "X.jpg"
        }
        else if (num === 7) {
            butImg7.src = "X.jpg"
        }
        else if (num === 8) {
            butImg8.src = "X.jpg"
        }
        else if (num === 9) {
            butImg9.src = "X.jpg"
        }
    }   else {
        if (num === 1) {
            butImg1.src = "O.jpg"
        }
        else if (num === 2) {
            butImg2.src = "O.jpg"
        }
        else if (num === 3) {
            butImg3.src = "O.jpg"
        }
        else if (num === 4) {
            butImg4.src = "O.jpg"
        }
        else if (num === 5) {
            butImg5.src = "O.jpg"
        }
        else if (num === 6) {
            butImg6.src = "O.jpg"
        }
        else if (num === 7) {
            butImg7.src = "O.jpg"
        }
        else if (num === 8) {
            butImg8.src = "O.jpg"
        }
        else if (num === 9) {
            butImg9.src = "O.jpg"
        }
    }
    counter++

if (butImg1.src==="X.jpg" && butImg4.src==="X.jpg" && butImg7.src==="X.jpg") {
    winnerOutput.innerHTML = "Player 1 wins!"
 } else if (butImg2.src==="X.jpg" && butImg5.src==="X.jpg" && butImg8.src==="X.jpg") {
    winnerOutput.innerHTML = "Player 1 wins!"
 } else if (butImg3.src==="X.jpg" && butImg6.src==="X.jpg" && butImg9.src==="X.jpg") {
    winnerOutput.innerHTML = "Player 1 wins!"
 }  else if (butImg1.src==="X.jpg" && butImg2.src==="X.jpg" && butImg3.src==="X.jpg") {
    winnerOutput.innerHTML = "Player 1 wins!"
 }  else if (butImg4.src==="X.jpg" && butImg5.src==="X.jpg" && butImg6.src==="X.jpg") {
    winnerOutput.innerHTML = "Player 1 wins!"
 }  else if (butImg7.src==="X.jpg" && butImg8.src==="X.jpg" && butImg9.src==="X.jpg") {
    winnerOutput.innerHTML = "Player 1 wins!"
 }  else if (butImg1.src==="X.jpg" && butImg5.src==="X.jpg" && butImg9.src==="X.jpg") {
    winnerOutput.innerHTML = "Player 1 wins!"
 } else if (butImg3.src==="X.jpg" && butImg5.src==="X.jpg" && butImg7.src==="X.jpg") {
    winnerOutput.innerHTML = "Player 1 wins!"
}

if (butImg1.src==="O.jpg" && butImg4.src==="O.jpg" && butImg7.src==="O.jpg") {
    winnerOutput.innerHTML = "Player 2 wins!"
 } else if (butImg2.src==="O.jpg" && butImg5.src==="O.jpg" && butImg8.src==="O.jpg") {
    winnerOutput.innerHTML = "Player 2 wins!"
 } else if (butImg3.src==="O.jpg" && butImg6.src==="O.jpg" && butImg9.src==="O.jpg") {
    winnerOutput.innerHTML = "Player 2 wins!"
 } else if (butImg1.src==="O.jpg" && butImg2.src==="O.jpg" && butImg3.src==="O.jpg") {
    winnerOutput.innerHTML = "Player 2 wins!"
 } else if (butImg4.src==="O.jpg" && butImg5.src==="O.jpg" && butImg6.src==="O.jpg") {
    winnerOutput.innerHTML = "Player 2 wins!"
 } else if (butImg7.src==="O.jpg" && butImg8.src==="O.jpg" && butImg9.src==="O.jpg") {
    winnerOutput.innerHTML = "Player 2 wins!"
 } else if (butImg1.src==="O.jpg" && butImg5.src==="O.jpg" && butImg9.src==="O.jpg") {
    winnerOutput.innerHTML = "Player 2 wins!"
 } else if (butImg3.src==="O.jpg" && butImg5.src==="O.jpg" && butImg7.src==="O.jpg") {
    winnerOutput.innerHTML = "Player 2 wins!"
}

}