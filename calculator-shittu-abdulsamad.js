// calculator-shittu-abdulsamad.js

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to perform the calculation
function calculate(num1, num2, operator) {
  const a = Number(num1);
  const b = Number(num2);

  if (isNaN(a) || isNaN(b)) {
    return "Error: Both operands must be valid numbers.";
  }

  switch (operator) {
    case "+":
    case "plus":
      return a + b;
    case "-":
    case "minus":
      return a - b;
    case "*":
    case "x":
    case "multiply":
      return a * b;
    case "/":
    case "divide":
      if (b === 0) return "Error: Division by zero is not allowed.";
      return a / b;
    default:
      return "Error: Invalid operator. Use +, -, *, /, %, etc.";
  }
}

// Asking the user for inputs
rl.question("Enter the first number: ", (num1) => {
  rl.question("Enter the second number: ", (num2) => {
    rl.question("Enter the operator (+, -, *, /,): ", (operator) => {
      const result = calculate(num1, num2, operator);
      console.log(`Result: ${result}`);
      rl.close();
    });
  });
});
