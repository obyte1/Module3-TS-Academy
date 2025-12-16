const readline = require('readline');

function calculator(operand1, operand2, operator) {
    // Validate operands
    if (typeof operand1 !== 'number' || typeof operand2 !== 'number') {
        return 'Error: Both operands must be numbers.';
    }

    // Validate operator
    if (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/') {
        return 'Error: Invalid operator.';
    }

    // Perform calculation
    let result;
    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            if (operand2 === 0) {
                return 'Error: Division by zero.';
            }
            result = operand1 / operand2;
            break;
    }

    return result;
}
// Example usage:
// Example usage:
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first number: ", (num1) => {
    rl.question("Enter operator (+, -, *, /): ", (op) => {
        rl.question("Enter second number: ", (num2) => {
            const result = calculator(parseFloat(num1), parseFloat(num2), op);
            console.log("Result:", result);
            rl.close();
        });
    });
});
