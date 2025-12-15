const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Helper function to safely get a number
function askNumber(question, callback) {
  rl.question(question, (input) => {
    const number = Number(input);

    if (isNaN(number)) {
      console.log("❌ Invalid number. Please enter a valid numeric value.");
      askNumber(question, callback);
    } else {
      callback(number);
    }
  });
}

// Helper function to safely get an operator
function askOperator(callback) {
  rl.question("Enter operator (+, -, *, /): ", (operator) => {
    const validOperators = ["+", "-", "*", "/"];

    if (!validOperators.includes(operator)) {
      console.log("❌ Invalid operator. Please use +, -, *, or /.");
      askOperator(callback);
    } else {
      callback(operator);
    }
  });
}

// Calculator logic
function calculate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "❌ Error: Division by zero is not allowed.";
      }
      return num1 / num2;
    default:
      return "❌ Unknown error occurred.";
  }
}

// Main execution flow
askNumber("Enter first number: ", (num1) => {
  askNumber("Enter second number: ", (num2) => {
    askOperator((operator) => {
      const result = calculate(num1, num2, operator);
      console.log(`\n✅ Result: ${result}`);
      rl.close();
      process.exit(0);
    });
  });
});

// Prevent app from crashing on unexpected errors
process.on("uncaughtException", (err) => {
  console.log("❌ An unexpected error occurred:", err.message);
  rl.close();
  process.exit(1);
});
