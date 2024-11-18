// taxCalculator.js

// Function to calculate tax based on income
function calculateTax(annualSalary, personalAllowance) {
    // TODO: Calculate taxable income (Annual Salary - Personal Allowance)
    let annualSalary = document.getElementById("annualSalary").value
    let personalAllowance = document.getElementById("personalAllowance").value
let taxableIncome = (annualSalary - personalAllowance);
    // TODO: Use tax bands and rates to calculate total tax
    let totalTax = 0
    if (taxableIncome < 12570) {
        totalTax === 0
    } else if (taxableIncome > 12570 && taxableIncome < 14877){
        totalTax = taxableIncome * 0.19
    } else if (taxableIncome > 14876 && taxableIncome < 26563){
        totalTax = taxableIncome * 0.2
    } else if (taxableIncome > 27562 && taxableIncome < 43663){
        totalTax = taxableIncome * 0.21
    } else if (taxableIncome > 43662 && taxableIncome < 75001){
        totalTax = taxableIncome * 0.42
    } else if (taxableIncome > 75000 && taxableIncome < 125141){
        totalTaxe = taxableIncome * 0.45
    } else (taxableIncome > 125140);{
        totalTax = taxableIncome * 0.48
    }
    outputTax.innerHTML = `The total tax is ${totalTax}`
}

// Event listener for the button
    
    // TODO: Validate inputs and call the tax calculation function
    // TODO: Display the result in "taxResult" div

