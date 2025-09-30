// TODO: Create a Counter class with a private #value field
// Add increment() and getValue() methods

// Uncomment and complete below:
 class Counter {
   #value;
   constructor(value = 0) {
     this.#value = value;
   }
   increment(one = 1) {
     this.#value += one
   }
   getValue() {
     return this.#value
   }
 }

const counter = new Counter();
document.getElementById("btnInc").onclick = function() {
   counter.increment();
  document.getElementById("output").innerText = "(Increment method called. Check value!)";
};
document.getElementById("btnShow").onclick = function() {
   document.getElementById("output").innerText = `Value: ${counter.getValue()}`;
  
};
