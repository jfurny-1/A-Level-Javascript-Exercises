// TODO: Create a Safe class with a private #code field
// Add setCode(code) and unlock(guess) methods

// Uncomment and complete below:
 class Safe {
   #code;
   constructor(encode) {
    this.#code = encode;

  }
  setCode(code) {
    this.#code = code;

   }
   unlock(guess) {

   }
 }

const safe = new Safe();
document.getElementById("btnSet").onclick = function() {
  // safe.setCode("1234");
  document.getElementById("output").innerText = "(Code set. Try unlock!)";
};
document.getElementById("btnUnlock").onclick = function() {
  // document.getElementById("output").innerText = safe.unlock("1234");
  document.getElementById("output").innerText = "(Your Safe class output will appear here)";
};
