const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to perform calculation
function calcuate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if( num2 === 0) {
                return "Error: Division by zero is not allowed.";
            }
            return num1 / num2;
        default:
            return "Error: Invalid operator. Use +, -, *, /.";
    }
}

//Ask for first number
rl.question("Enter the first number: ", (firstInput) => {
const num1 = parseFloat(firstInput);

if (isNaN(num1)) {
    console.log (" Error: first input is not a valid number.");
    rl.close();
    return;
}

    //Ask for second number
rl.question("Enter the second number: ", (secondInput) => {
const num2 = parseFloat(secondInput);

if (isNaN(num2)) {
    console.log(" Error: second input is not a valid number.");
    rl.close();
    return;
}
//Function to perform calculation
rl.question("Enter an operator (+, -, *, /): ", (operator) => {
    const result = calcuate(num1, num2, operator.trim());

    console.log(`Result: ${result}`);
    rl.close();
});
    });
       });

