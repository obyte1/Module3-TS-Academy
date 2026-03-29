// calculator-Ayomide-Olofintila.js

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter first number: ", (num1) => {
  rl.question("Enter operator (+, -, *, /): ", (op) => {
    rl.question("Enter second number: ", (num2) => {
      const a = parseFloat(num1);
      const b = parseFloat(num2);
      let result;

      switch (op) {
        case "+":
          result = a + b;
          break;
        case "-":
          result = a - b;
          break;
        case "*":
          result = a * b;
          break;
        case "/":
          result = b !== 0 ? a / b : "Error: Divide by zero";
          break;
        default:
          result = "Invalid operator";
      }

      console.log("Result:", result);
      rl.close();
    });
  });
});
