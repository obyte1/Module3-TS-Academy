const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function startCalculator() {
    rl.question('Enter first number (or "exit" to quit): ', (num1) => {
        let trimmedNum1 = num1.trim();
        if (trimmedNum1.toLowerCase() === 'exit') {
            rl.close();
            return;
        }
        if (trimmedNum1 === '' || isNaN(trimmedNum1)) {
            console.log('Invalid input: Please enter a valid number.');
            startCalculator();
            return;
        }
        rl.question('Enter operator (+, -, *, /): ', (op) => {
            let trimmedOp = op.trim();
            if (trimmedOp === '' || !['+', '-', '*', '/'].includes(trimmedOp)) {
                console.log('Invalid operator: Please enter one of +, -, *, /');
                startCalculator();
                return;
            }
            rl.question('Enter second number: ', (num2) => {
                let trimmedNum2 = num2.trim();
                if (trimmedNum2 === '' || isNaN(trimmedNum2)) {
                    console.log('Invalid input: Please enter a valid number.');
                    startCalculator();
                    return;
                }
                let n1 = parseFloat(trimmedNum1);
                let n2 = parseFloat(trimmedNum2);
                let result;
                switch(trimmedOp) {
                    case '+':
                        result = n1 + n2;
                        break;
                    case '-':
                        result = n1 - n2;
                        break;
                    case '*':
                        result = n1 * n2;
                        break;
                    case '/':
                        if (n2 === 0) {
                            console.log('Error: Cannot divide by zero.');
                            startCalculator();
                            return;
                        }
                        result = n1 / n2;
                        break;
                }
                console.log(`Result: ${result}`);
                startCalculator();
            });
        });
    });
}

startCalculator();