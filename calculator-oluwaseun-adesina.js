const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function question(prompt) {
    return new Promise((resolve) => rl.question(prompt, resolve));
}

async function calculator() {
    console.log('This is a simple calculator');
    console.log('You can perform addition, subtraction, multiplication, and division');
    console.log('Please select an operation:');
    console.log('1. Addition');
    console.log('2. Subtraction');
    console.log('3. Multiplication');
    console.log('4. Division');

    try {
        const num1Raw = await question('enter the first number: ');
        const number1 = parseFloat(num1Raw);

        const num2Raw = await question('enter the second number: ');
        const number2 = parseFloat(num2Raw);

        const opRaw = await question('which operation do you want to perform (1-4): ');
        const operator = parseInt(opRaw, 10);

        let result;
        switch (operator) {
            case 1:
                result = number1 + number2;
                break;
            case 2:
                result = number1 - number2;
                break;
            case 3:
                result = number1 * number2;
                break;
            case 4:
                result = number1 / number2;
                break;
            default:
                console.log('Invalid Entry');
                rl.close();
                return;
        }

        console.log(`your answer is: ${result}`);
    } catch (err) {
        console.error('Error running calculator:', err);
    } finally {
        rl.close();
    }
}

calculator();