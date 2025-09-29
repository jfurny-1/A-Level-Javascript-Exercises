// TODO: Create a Pet class with a constructor that takes name and type
// Add a describe() method that returns a string like: "Name is a Type"

// Uncomment and complete below:
 class Pet {
   constructor(name, type) {
     this.name = name;
     this.type = type;
   }
   describe() {
     return `${this.name} is a ${this.type}`
   }
 }

document.getElementById("btnDog").onclick = function() {
   const pet = new Pet("Rex", "dog");
   document.getElementById("output").innerText = pet.describe();
};

document.getElementById("btnCat").onclick = function() {
   const pet = new Pet("Mittens", "cat");
   document.getElementById("output").innerText = pet.describe();
};
