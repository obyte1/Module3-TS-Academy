const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askOperand(prompt, callback) {
  rl.question(prompt, (input) => {
    const num = parseFloat(input);
    if (isNaN(num)) {
      console.log("Invalid number. Please try again.");
      askOperand(prompt, callback);
    } else {
      callback(num);
    }
  });
}

function askOperator(callback) {
  rl.question("Enter operator (+, -, *, /): ", (op) => {
    if (!["+", "-", "*", "/"].includes(op)) {
      console.log("Invalid operator. Please try again.");
      askOperator(callback);
    } else {
      callback(op);
    }
  });
}

function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) return "Error: Division by zero!";
      return a / b;
    default:
      return "Unknown operation";
  }
}

function startCalculator() {
  askOperand("Enter first number: ", (num1) => {
    askOperator((operator) => {
      askOperand("Enter second number: ", (num2) => {
        const result = calculate(num1, num2, operator);
        console.log(result);
        rl.question("Do you want to calculate again? (y/n): ", (answer) => {
          if (answer.toLowerCase() === "y") {
            startCalculator();
          } else {
            console.log("Goodbye!");
            rl.close();
          }
        });
      });
    });
  });
}

startCalculator();