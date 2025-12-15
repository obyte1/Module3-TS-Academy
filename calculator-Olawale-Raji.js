// First i imported the module which allows reading input from the command line
const readline = require("readline");

// This will ask the user for inputs.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// This is to make sure the user enter a valid number and not it is not empty
function isValidNumber(input) {
  return !isNaN(input) && input.trim() !== "";
}

// This is for the user to choose a valid operator from the options
function isValidOperator(operator) {
  return ["+", "-", "*", "/"].includes(operator);
}

rl.question("Enter the first number: ", (num1) => {
  if (!isValidNumber(num1)) {
    console.log("Invalid first number. Please enter a valid number.");
    rl.close();
    return;
  }

  rl.question("Enter the operator (+, -, *, /): ", (operator) => {
    if (!isValidOperator(operator)) {
      console.log("Invalid operator. Please enter +, -, *, or /.");
      rl.close();
      return;
    }

    rl.question("Enter the second number: ", (num2) => {
      if (!isValidNumber(num2)) {
        console.log("Invalid second number. Please enter a valid number.");
        rl.close();
        return;
      }

      const a = Number(num1);
      const b = Number(num2);
      let result;

      switch (operator) {
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
          if (b === 0) {
            console.log("Error: Division by zero is not allowed.");
            rl.close();
            return;
          }
          result = a / b;
          break;
      }

      console.log(`The result is: ${result}`);
      rl.close();
    });
  });
});
