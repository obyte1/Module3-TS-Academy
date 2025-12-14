const { parse } = require("path");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
console.log('------------------------')
console.log('My First Calculator')
console.log('------------------------')

let result = 0

const Calculator = () => {
    rl.question(" enter first number (q to quit): ", (answer1) => {
        num1 = parseInt(answer1)

        if (answer1 === 'q') {
        console.log("Goodbye 👋");
        rl.close();
        return;
        }
        else if (isNaN(num1)) {
        console.log("invalid number");
        Calculator();
        return;
        }

    
    rl.question("Enter operator (+, -, *, /): ", (operator) => {

      if (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/') {
        console.log("invalid operator");
        Calculator();
        return;
      }

    rl.question("enter second number: ", (answer2) => {
        num2 = parseInt(answer2)

        if (isNaN(num2)) {
        console.log("invalid number");
        Calculator();
        return;
        }

        switch(operator){
            case '+':
                result = num1 + num2
                break;
            case '-':
                result = num1 - num2
                break;
            case '*':
                result = num1 * num2
                break;
            case '/':
                result = num2 === 0 ? "cannot divide by zero" : num1 / num2
                break;
            default:
                Calculator();
                break;        
        }

        console.log(`answer: ${result}`);
        Calculator();
    })

    })
    
    });
}

Calculator();
