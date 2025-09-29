// TODO: Create an Animal class with a constructor that takes a name
// Create a Dog class that extends Animal and adds a bark() method

 
 class Animal {
   constructor(name) {
    this.name = name; 
   }
 }
 class Dog extends Animal {
  constructor(name){
  super(name)
  }
   bark() {
     return `${this.name} says woof`
   }
 }

document.getElementById("btnDog").onclick = function() {
   const dog = new Dog("Rex");
   document.getElementById("output").innerText = dog.bark();
};
