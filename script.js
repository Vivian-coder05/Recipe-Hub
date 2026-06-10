// Grab HTML target control handles
const btnDecrease = document.getElementById('btnDecrease');
const btnIncrease = document.getElementById('btnIncrease');
const servingValue = document.getElementById('servingValue');
const ingredientAmounts = document.querySelectorAll('.amt');

// Baseline tracking reference points
let currentServings = 2; 
const baseServings = 2;

// Master calculator refresh function
function updateIngredients() {
    // Calculate the multiplier factor ratio
    const multiplier = currentServings / baseServings;

    // Loop through each ingredient measurement span element
    ingredientAmounts.forEach(span => {
        const baseAmount = parseFloat(span.getAttribute('data-base'));
        const dynamicAmount = baseAmount * multiplier;
        
        // Output clean integers or float decimals to clean string structures
        span.textContent = Number(dynamicAmount.toFixed(2));
    });
}

// Click Trigger Event Configurations
btnIncrease.addEventListener('click', () => {
    currentServings += 2; // Step counts up by sets of pairs
    servingValue.textContent = currentServings;
    updateIngredients();
});

btnDecrease.addEventListener('click', () => {
    if (currentServings > 2) { // Establish minimum threshold floor limits
        currentServings -= 2;
        servingValue.textContent = currentServings;
        updateIngredients();
    }
});