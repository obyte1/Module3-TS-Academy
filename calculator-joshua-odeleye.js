const readline = require('readline');
const r3 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Welcome to the simple calculator!');

r3.question('Enter first number: ', (value1) => {
    r3.question('Enter operator (+, -): ', (operator) => {
        r3.question('Enter second number: ', (value2) => {
            let num1 = parseInt(value1);
            let num2 = parseInt(value2);
            let result = null;

            // Validate inputs
            if (isNaN(num1) || isNaN(num2)) {
                console.log('Error: Please enter a valid number.');
            } else if (operator !== '+' && operator !== '-') {
                console.log('Error: Invalid operator. Please use + or -.');
            } else {
                // Perform calculation
                if (operator === '+') {
                    result = num1 + num2;
                } else if (operator === '-') {
                    result = num1 - num2;
                }
                console.log(`Result: ${result}`);
            }

            console.log('Thank you for using the calculator!');
            r3.close();
        });
    });
});
// run calculator-joshua-odeleye.js to use the calculator



    
    
