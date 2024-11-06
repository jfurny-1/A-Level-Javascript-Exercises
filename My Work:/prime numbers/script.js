let minNum = document.getElementById('minNum');
let maxNum = document.getElementById('maxNum');
let range = maxNum.value - minNum.value

function primeCalc() {
    let primeVerifier = false;
    for (let i = 0; i <= range.value; i++) {
        for(let l = 2; l <= maxNum.value; l++) {

            
        }
        if(l % i === 0) {
            primeVerifier = false
        } else {
            primeVerifier = true
        }
        if(primeVerifier = true) {
            output.innerHTML = `${i} <br>`
        }
    }
}