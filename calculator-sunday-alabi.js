const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to get a number
function getOperand(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, (input) => {
      const num = parseFloat(input);

      if (isNaN(num)) {
        console.log("Invalid input. Please enter a number.");
        resolve(getOperand(prompt));
      } else {
        resolve(num);
      }
    });
  });
}

// Function to get operator
function getOperator() {
  return new Promise((resolve) => {
    rl.question("Enter operator (+, -, *, /): ", (input) => {
      const operator = input.trim();
      const validOperators = ["+", "-", "*", "/"];

      if (!validOperators.includes(operator)) {
        console.log("Invalid operator. Try again.");
        resolve(getOperator());
      } else {
        resolve(operator);
      }
    });
  });
}

// Main calculator logic
async function calculator() {
  try {
    const num1 = await getOperand("Enter first number: ");
    const operator = await getOperator();
    const num2 = await getOperand("Enter second number: ");

    if (operator === "+") {
      console.log(`Result: ${num1} + ${num2} = ${num1 + num2}`);
    } else if (operator === "-") {
      console.log(`Result: ${num1} - ${num2} = ${num1 - num2}`);
    } else if (operator === "*") {
      console.log(`Result: ${num1} * ${num2} = ${num1 * num2}`);
    } else if (operator === "/") {
      if (num2 === 0) {
        console.log("Error: Division by zero!");
      } else {
        console.log(`Result: ${num1} / ${num2} = ${num1 / num2}`);
      }
    }

    rl.close();
  } catch (error) {
    console.error("An error occurred:", error);
    rl.close();
  }
}

// Run the calculator
calculator();
