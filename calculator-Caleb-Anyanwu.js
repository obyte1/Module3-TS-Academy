const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isNumber(value) {
  return value !== "" && !isNaN(value);
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
      if (b === 0) return "Error: Division by zero";
      return a / b;
    default:
      return "Error: Invalid operator";
  }
}

rl.question("Enter first number: ", (first) => {
  if (!isNumber(first)) {
    console.log("Invalid first number");
    rl.close();
    return;
  }

  rl.question("Enter operator (+, -, *, /): ", (operator) => {
    rl.question("Enter second number: ", (second) => {
      if (!isNumber(second)) {
        console.log("Invalid second number");
        rl.close();
        return;
      }

      const result = calculate(Number(first), Number(second), operator);
      console.log("Result:", result);
      rl.close();
    });
  });
});
