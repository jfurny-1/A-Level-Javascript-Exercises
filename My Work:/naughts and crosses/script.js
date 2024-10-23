let counter = 0
function square(num){
    if (counter % 2 === 0) {
        if (num === 1) {
            button1.src = "x"
        }
        else if (num === 2) {
            button2.src = "x"
        }
        else if (num === 3) {
            button3.src = "x"
        }
        else if (num === 4) {
            button4.src = "x"
        }
        else if (num === 5) {
            button5.src = "x"
        }
        else if (num === 6) {
            button6.src = "x"
        }
        else if (num === 7) {
            button7.src = "x"
        }
        else if (num === 8) {
            button8.src = "x"
        }
        else if (num === 9) {
            button9.src = "x"
        }
    }   else {
        if (num === 1) {
            button1.src = "o"
        }
        else if (num === 2) {
            button2.src = "o"
        }
        else if (num === 3) {
            button3.src = "o"
        }
        else if (num === 4) {
            button4.src = "o"
        }
        else if (num === 5) {
            button5.src = "o"
        }
        else if (num === 6) {
            button6.src = "o"
        }
        else if (num === 7) {
            button7.src = "o"
        }
        else if (num === 8) {
            button8.src = "o"
        }
        else if (num === 9) {
            button9.src = "o"
        }
    }
    counter++
}