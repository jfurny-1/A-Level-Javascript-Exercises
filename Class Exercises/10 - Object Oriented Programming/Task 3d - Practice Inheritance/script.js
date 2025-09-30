// TODO: Create a Shape class with a constructor that takes a name
// Create a Circle class that extends Shape and adds an area() method (area = πr²)

// Uncomment and complete below:
 class Shape {
   constructor(name) {
    this.name = name;
  }
 }
 class Circle extends Shape {
   constructor(name, radius) {
    super(name);
    this.radius = radius;
   }
   area() {
     return
   }
 }

document.getElementById("btnCircle").onclick = function() {
   const circle = new Circle("Circle", 5);
   document.getElementById("output").innerText = `Area: ${circle.area().toFixed(2)}`;
};
