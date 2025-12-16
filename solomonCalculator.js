const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Ask for a valid number input
 * Keeps asking until user enters a valid number
 */
function askNumber(message, callback) {
    rl.question(message, (input) => {

        // Exit condition
        if (input.toLowerCase() === "exit") {
            console.log("\nCalculator closed.");
            rl.close();
            return;
        }

        const number = parseFloat(input);

        if (isNaN(number)) {
            console.log("Invalid number. Please try again.");
            askNumber(message, callback); // recursive loop
        } else {
            callback(number);
        }
    });
}

/**
 * Ask for a valid operator
 * Loops until a valid operator is entered
 */
function askOperator(callback) {
    rl.question("Enter operator (+, -, *, /): ", (operator) => {

        if (["+", "-", "*", "/"].includes(operator)) {
            callback(operator);
        } else {
            console.log("Invalid operator. Try again.");
            askOperator(callback); // recursive loop
        }
    });
}

// calculator logic

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 === 0) {
                console.log("Division by zero is not allowed.");
                return null;
            }
            return num1 / num2;
        default:
            return null;
    }
}


 // Main calculator flow

function startCalculator() {
    console.log("\n--- Simple Node.js Calculator ---");
    console.log("Type 'exit' at any number prompt to quit.\n");

    askNumber("Enter first number: ", (num1) => {

        askOperator((operator) => {

            askNumber("Enter second number: ", (num2) => {

                const result = calculate(num1, operator, num2);

                if (result !== null) {
                    console.log(num1 + " " + operator + " " + num2 + " " + "=" + " " + result);
                }

                // Restart calculator
                startCalculator();
            });
        });
    });
}

// Start the calculator
startCalculator();
