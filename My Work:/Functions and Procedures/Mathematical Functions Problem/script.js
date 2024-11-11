// script1.js

// Function to calculate the area of a trapezium
function trapAreaCalc(base1, base2, height) {
    // TODO: Write the formula to calculate trapezium area
    let trapArea = (Number(base1) + Number(base2)) * height / 2
    outputTrapArea.innerHTML = `The area is ${trapArea}`
    
   
    
}

// Function to calculate the volume of a cylinder
function cylVolumeCalc(radius, height) {
    // TODO: Write the formula for cylinder volume
    let cylVolume = (Math.PI * Number(radius)**2) * Number(height)
    ouputCylVolume.innerHTML = `The volume is ${cylVolume}`

}

// Function to calculate the total surface area of a cylinder
function cylAreaCalc(radius, height) {
    // TODO: Write the formula for cylinder surface area
    radius = document.getElementById('cylRadius').value     
    height = document.getElementById('cylHeight').value
    let cylArea = (Math.PI * radius**2 * 2) + (Math.PI * radius * 2 * height)
    outputCylArea.innerHTML = `The area is ${cylArea}`

}


// Function to calculate the volume of a cone
function _________________________________() {
    // TODO: Write the formula for cone volume
}

// Function to calculate the hypotenuse using Pythagoras' theorem
function _________________________________() {
    // TODO: Write the formula for hypotenuse
}

// Function to calculate the area of a triangle using Hero's formula
function _________________________________() {
    // TODO: Write the formula for Hero's area
}

// Event listeners
document.getElementById("btnTrapezium").addEventListener("click", function(){
    const base1 = parseFloat(document.getElementById("trapBase1").value);
    const base2 = parseFloat(document.getElementById("trapBase2").value);
    const height = parseFloat(document.getElementById("trapHeight").value);
    trapAreaCalc(base1, base2, height)
    // TODO: Call trapezium area function and display the result
});

document.getElementById("btnCylinderVolume").addEventListener("click", function(){
    const radius = document.getElementById("cylRadius").value;
    const height = document.getElementById("cylHeight").value;
    cylVolumeCalc(radius, height)
    // TODO: Call cylinder volume function and display the result
});

// Add similar event listeners for other buttons.
