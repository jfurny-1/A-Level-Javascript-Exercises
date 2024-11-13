
let range = Number(maxNum) - Number(minNum)

function primeCalc(range, minNum, maxNum) {

    alert(Number(minNum))
let minNum = document.getElementById('minNum');
let maxNum = document.getElementById('maxNum');
    let primeVerifier = false;

    for (let i = 0; i <= Number(range); i++) {
        
        for(let l = Number(minNum); l <= Number(maxNum); l++) {
            
            if(l % i === 0) {
            primeVerifier = false;

        } else {
            
            primeVerifier = true;   
         output.innerHTML = `${l} <br>`;

        }
    }
    }
}