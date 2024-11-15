


function primeCalc() {
output.innerHTML = ""
let minNum = document.getElementById('minNum').value;
let maxNum = document.getElementById('maxNum').value;
let range = Number(maxNum) - Number(minNum);
    let primeVerifier = false;
    
   
    for (let i = 0; i <= Number(range); i++) {
        
        for(let l = Number(minNum); l <= Number(maxNum); l++) {
            
            if(l % i === 0) {
            primeVerifier = false;

        } else {
            
            primeVerifier = true;   
            let value = output.innerHTML;
            alert(value)
         output.innerHTML = output.innerHTML + `${l} <br>`;

        }
    }
    }
}