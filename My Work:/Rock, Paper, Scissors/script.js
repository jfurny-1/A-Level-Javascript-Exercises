document.body.style.backgroundColor = "#AA0000";

function startGame(){

    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        rotatingImage.src="paper.jpg"
    } else if (choice === 2) { 
        rotatingImage.src="R.png"
    } else {
        rotatingImage.src="rock.jpg"
    }

    let choice2 = Math.floor(Math.random() * 3) + 1;
    if (choice2 === 1) {
        rotatingImage.src="paper.jpg"
    } else if (choice2 === 2) { 
        rotatingImage.src="R.png"
    } else {
        rotatingImage.src="rock.jpg"
    }

    if (choice === 1 && choice2 === 1) { 
        winnerOutput.innerHTML = `DRAW!`
    } else if (choice === 2 && choice2 === 2) { 
        winnerOutput.innerHTML = `DRAW!`
    } else if (choice === 3 && choice2 === 3) { 
        winnerOutput.innerHTML = `DRAW!`
    } 




}


