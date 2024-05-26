// Selects input element and stores it in a variable
let outputScreen = document.getElementById("output-screen");

function display(num) { // num is a parameter
    if (num == '%') {
        outputScreen.value = outputScreen.value / 100;
    } else {
    outputScreen.value += num; // Updates the displayed value on screen
    }
}

function Calculate() {
    try {
        let result = eval(outputScreen.value); // Function that evaluates arithmetic expressions (+, -, /, *)
        if (outputScreen.value.includes('/0')) {
            throw new Error("Division by zero");
        }
        outputScreen.value = result.toFixed(3);
    }
    catch (err) 
    {
        outputScreen.value = 'Invalid';
    }
}

function Clear() {
    outputScreen.value = "";
}

function del() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}