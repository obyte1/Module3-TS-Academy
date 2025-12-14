// calculator-vincent
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function simpleCalculator() {
    console.log("Simple Calculator");
    console.log("Operations: +, -, *, /\n");
    
    readline.question("Enter first number: ", (num1Input) => {
        const num1 = parseFloat(num1Input);
        
        if (isNaN(num1)) {
            console.error("Error: First input must be a valid number");
            readline.close();
            return;
        }
        
        readline.question("Enter operator (+, -, *, /): ", (operator) => {
            if (!['+', '-', '*', '/'].includes(operator)) {
                console.error("Error: Invalid operator. Use +, -, *, or /");
                readline.close();
                return;
            }
            
            readline.question("Enter second number: ", (num2Input) => {
                const num2 = parseFloat(num2Input);
                
                if (isNaN(num2)) {
                    console.error("Error: Second input must be a valid number");
                    readline.close();
                    return;
                }
                
                if (operator === '/' && num2 === 0) {
                    console.error("Error: Division by zero is not allowed");
                    readline.close();
                    return;
                }
                
                let result;
                switch (operator) {
                    case '+':
                        result = num1 + num2;
                        break;
                    case '-':
                        result = num1 - num2;
                        break;
                    case '*':
                        result = num1 * num2;
                        break;
                    case '/':
                        result = num1 / num2;
                        break;
                }
                
                console.log(`\nResult: ${num1} ${operator} ${num2} = ${result}`);
                readline.close();
            });
        });
    });
}

// Export the function
module.exports = { simpleCalculator };

// Run if this file is executed directly
if (require.main === module) {
    simpleCalculator();
}