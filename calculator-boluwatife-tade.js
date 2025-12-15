const { AsyncLocalStorage } = require('async_hooks');
const { parse } = require('path');
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Calculator App

let number1 = ''
let number2 = ''
let result = ''
let operation = ''
const allowOperations = ['+', '-', '*', '/'];

function calculator(num1, num2){
    if (operation === '+') {
        result = parseFloat(num1) + parseFloat(num2);
    } else if (operation === '-') {
        result = parseFloat(num1) - parseFloat(num2);
    } else if (operation === '/') {
        result = parseFloat(num1) / parseFloat(num2);
    } else if (operation === '*') {
        result = parseFloat(num1) * parseFloat(num2);
    } else {
        console.log(`Invalid or Nonsupported Operation ${operation}`);
    }
    
};


const requestNumbers = () => { rl.question(`Give me your first number for an arithmetic operation : `, (userin1) => {
        number1 = parseFloat(userin1);
        if (isNaN(number1) || userin1.trim() === ''){
            console.log(`Invalid first number. Start over with a valid number`)
            requestNumbers();
            return;
        }
        rl.question(`Give me your second number for an arithmetic operation : `, (userin2) => {
            number2 = parseFloat(userin2);
            if (isNaN(number2) || userin2.trim() === '') {
                console.log(`Invalid Second Number. re-enter numbers agin`)
                requestNumbers();
                return;
            }
            rl.question(`What arithmetic operation do you want to perform? : `, (arith) => {
                operation = (arith);
                if (!allowOperations.includes(operation)) {
                    console.log('Invalid Operator re-enter operator')
                    requestNumbers();
                    return;
                } else if (operation === '/' && number2 === 0) {
                    console.log(`You cant Divide by ZERO!!!`)
                    requestNumbers();
                    return;
                }
                calculator(number1, number2);
                console.log(`Your answer is ${result}`);
                rl.close();
 
            });
        });
    }); 
};

requestNumbers();


