const { askQuestion, closeInput } = require("./input");
const calculate = require("./calculator");

async function startCalculator() {
  try {
    const firstInput = await askQuestion("Enter first number: ");
    const num1 = Number(firstInput);

    if (isNaN(num1)) {
      console.log("Error: First input is not a valid number.");
      closeInput();
      return;
    }

    const secondInput = await askQuestion("Enter second number: ");
    const num2 = Number(secondInput);

    if (isNaN(num2)) {
      console.log("Error: Second input is not a valid number.");
      closeInput();
      return;
    }

    const operator = await askQuestion("Enter operation (+, -, *, /): ");

    const result = calculate(num1, num2, operator);

    if (typeof result === "string") {
      console.log("Error:", result);
    } else {
      console.log("Result:", result);
    }

    closeInput();
  } catch (error) {
    console.log("Unexpected error occurred.");
    closeInput();
  }
}

startCalculator();
