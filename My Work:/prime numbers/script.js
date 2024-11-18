


function primeCalc() {
let minNum = document.getElementById('minNum').value;
let maxNum = document.getElementById('maxNum').value;
let range = Number(maxNum) - Number(minNum);

    
   
    for (let i = 0; i <= Number(range); i++) {
        for(let l = Number(minNum); l <= Number(maxNum); l++) {
            if(l % i === 0) {
        } else {
            let value = output.innerHTML;
            alert(value)
         output.innerHTML = output.innerHTML + `${Number(l)} <br>`;

        }
      }
    }
}