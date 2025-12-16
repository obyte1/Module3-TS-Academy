const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculator(a, b, operator) {
  if (isNaN(a) || isNaN(b)) {
    return "Error: Inputs must be numbers";
  }

  if (operator === "+") return a + b;
  if (operator === "-") return a - b;
  if (operator === "*") return a * b;
  if (operator === "/") {
    if (b === 0) return "Error: Cannot divide by zero";
    return a / b;
  }

  return "Error: Invalid operator";
}

rl.question("Enter first number: ", (num1) => {
  rl.question("Enter operator (+, -, *, /): ", (operator) => {
    rl.question("Enter second number: ", (num2) => {
      const result = calculator(Number(num1), Number(num2), operator);
      console.log("Result:", result);
      rl.close();
    });
  });
});

