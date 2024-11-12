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
function coneVolumeCalc(radius, height) {
    // TODO: Write the formula for cone volume
    radius = document.getElementById('coneRadius').value
    height = document.getElementById('coneHeight').value
    let coneVolume = (Math.PI * radius**2 * height) / 3
    outputConeVol.innerHTML = `The volume is ${coneVolume}`

}

// Function to calculate the hypotenuse using Pythagoras' theorem
function hypotenuseCalc(sideA, sideB) {
    // TODO: Write the formula for hypotenuse
    sideA = document.getElementById('sideA').value
    sideB = document.getElementById('sideB').value
    let hypotenuse = (Math.sqrt(sideA**2 + sideB**2))
    outputHypotenuse.innerHTML = `The hypotenuse is ${hypotenuse}`
}

// Function to calculate the area of a triangle using Hero's formula
function heronsCalc(sideA, sideB, sideC) {
    // TODO: Write the formula for Hero's area
    alert('ss')
    sideA = document.getElementById('sideA').value
    sideB = document.getElementById('sideB').value
    sideC = document.getElementById('sideC').value
    let perimeter = sideA + sideB + sideC;
    let area = Math.sqrt(perimeter*(perimeter - sideA)*(perimeter - sideB)*(perimeter - sideC));
    outputHerons.innerHTML = `The area is ${area}`
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
let sideA = document.getElementById('sideA').value;
let sideB = document.getElementById('sideB').value;
let sideC = document.getElementById('sideC').value;