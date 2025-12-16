const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Utility function to safely parse numbers
function parseNumber(value) {
  const num = Number(value);
  return Number.isFinite(num) ? num : null;
}

// Calculator logic
function calculate(a, b, operator) {
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
      if (b === 0) {
        return "Error: Division by zero is not allowed.";
      }
      return a / b;

    default:
      return "Error: Invalid operator.";
  }
}

// Step-by-step input handling
rl.question("Enter first number: ", (firstInput) => {
  const num1 = parseNumber(firstInput);

  if (num1 === null) {
    console.log("Invalid input. First value must be a number.");
    rl.close();
    return;
  }

  rl.question("Enter operator (+, -, *, /): ", (operator) => {
    if (!operator || typeof operator !== "string") {
      console.log("Invalid operator.");
      rl.close();
      return;
    }

    rl.question("Enter second number: ", (secondInput) => {
      const num2 = parseNumber(secondInput);

      if (num2 === null) {
        console.log("Invalid input. Second value must be a number.");
        rl.close();
        return;
      }

      const result = calculate(num1, num2, operator.trim().toLowerCase());
      console.log("Result:", result);

      rl.close();
    });
  });
});

// Prevent unexpected crashes
rl.on("SIGINT", () => {
  console.log("\nCalculator exited safely.");
  rl.close();
});
