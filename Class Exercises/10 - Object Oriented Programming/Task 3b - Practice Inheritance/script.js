// TODO: Create a Vehicle class with a constructor that takes a make
// Create a Car class that extends Vehicle and adds a honk() method

// Uncomment and complete below:
 class Vehicle {
   constructor(make) {
    this.make = make;
   }
 }
 class Car extends Vehicle {
  constructor(make) {
    super(make)
  }
   honk() {
     return `${this.make} goes beep`
 }
}

document.getElementById("btnCar").onclick = function() {
   const car = new Car("Toyota");
   document.getElementById("output").innerText = car.honk();
};
