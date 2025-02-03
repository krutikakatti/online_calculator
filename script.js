// Append clicked button value to display
function appendValue(value) {
    document.getElementById('display').value += value;
}

// Clear the calculator display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Perform square operation
function squareNumber() {
    let currentValue = document.getElementById('display').value;
    if (currentValue !== '') {
        document.getElementById('display').value = Math.pow(parseFloat(currentValue), 2);
    }
}

// Evaluate the expression in the display
function calculateResult() {
    try {
        let expression = document.getElementById('display').value;
        let result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

// ✅ Handle keyboard inputs
document.addEventListener("keydown", function(event) {
    let key = event.key;
    let validKeys = "0123456789+-*/.%";

    if (validKeys.includes(key)) {
        appendValue(key);
    } else if (key === "Enter") {
        calculateResult();
    } else if (key === "Backspace") {
        // Remove last character
        let display = document.getElementById('display');
        display.value = display.value.slice(0, -1);
    } else if (key === "Escape") {
        clearDisplay();
    }
});
