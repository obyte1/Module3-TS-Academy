import * as readline from "readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculate(operand1, operand2, operator) {
  try {
    // Validate inputs
    const num1 = Number.parseFloat(operand1);
    const num2 = Number.parseFloat(operand2);

    // Check if operands are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
      return {
        success: false,
        error: "Invalid input: Both operands must be valid numbers",
        result: null,
      };
    }

    // Check for infinity inputs
    if (!isFinite(num1) || !isFinite(num2)) {
      return {
        success: false,
        error: "Invalid input: Operands must be finite numbers",
        result: null,
      };
    }

    // Normalize operator input (case-insensitive, handle symbols)
    const normalizedOperator = operator.toString().toLowerCase().trim();

    let result;
    let operatorSymbol;

    // Perform calculation based on operator
    if (
      normalizedOperator === "plus" ||
      normalizedOperator === "+" ||
      normalizedOperator === "add" ||
      normalizedOperator === "addition"
    ) {
      result = num1 + num2;
      operatorSymbol = "+";
    } else if (
      normalizedOperator === "minus" ||
      normalizedOperator === "-" ||
      normalizedOperator === "subtract" ||
      normalizedOperator === "subtraction"
    ) {
      result = num1 - num2;
      operatorSymbol = "-";
    } else if (
      normalizedOperator === "multiply" ||
      normalizedOperator === "*" ||
      normalizedOperator === "x" ||
      normalizedOperator === "times" ||
      normalizedOperator === "multiplication"
    ) {
      result = num1 * num2;
      operatorSymbol = "*";
    } else if (
      normalizedOperator === "divide" ||
      normalizedOperator === "/" ||
      normalizedOperator === "division"
    ) {
      // Handle division by zero
      if (num2 === 0) {
        return {
          success: false,
          error: "Division by zero is not allowed",
          result: null,
        };
      }
      result = num1 / num2;
      operatorSymbol = "/";
    } else {
      return {
        success: false,
        error: `Invalid operator: '${operator}'. Supported operators: plus (+), minus (-), multiply (*), divide (/)`,
        result: null,
      };
    }

    // Check if result is valid
    if (!isFinite(result)) {
      return {
        success: false,
        error:
          "Operation resulted in an invalid number (overflow or underflow)",
        result: null,
      };
    }

    return {
      success: true,
      result: result,
      operation: `${num1} ${operatorSymbol} ${num2} = ${result}`,
      error: null,
    };
  } catch (error) {
    // Catch any unexpected errors
    return {
      success: false,
      error: `Unexpected error: ${error.message}`,
      result: null,
    };
  }
}

// Demo usage with various test cases
console.log("=== Calculator Demo ===\n");

// Valid operations
console.log("✓ Valid Operations:");
console.log(calculate(10, 5, "plus"));
console.log(calculate(10, 5, "minus"));
console.log(calculate(10, 5, "multiply"));
console.log(calculate(10, 5, "divide"));
console.log(calculate(15.5, 2.5, "+"));

console.log("\n✗ Invalid Inputs:");
// Invalid inputs
console.log(calculate("abc", 5, "plus"));
console.log(calculate(10, "xyz", "minus"));
console.log(calculate(10, 5, "invalid"));
console.log(calculate(10, 0, "divide")); // Division by zero
console.log(calculate(null, 5, "plus"));
console.log(calculate(undefined, 5, "minus"));
console.log(calculate(Number.POSITIVE_INFINITY, 5, "plus"));

console.log("\n✓ Edge Cases:");
// Edge cases that still work
console.log(calculate("10", "5", "plus")); // String numbers
console.log(calculate(-10, 5, "multiply")); // Negative numbers
console.log(calculate(0.1, 0.2, "plus")); // Decimals
console.log(calculate(1e10, 2, "multiply")); // Scientific notation

function startCalculator() {
  console.log("=== Interactive Calculator ===");
  console.log(
    "Supported operators: plus (+), minus (-), multiply (*), divide (/)\n"
  );

  rl.question("Enter first number: ", (num1) => {
    rl.question(
      "Enter operator (+, -, *, / or plus, minus, multiply, divide): ",
      (operator) => {
        rl.question("Enter second number: ", (num2) => {
          // Perform calculation
          const result = calculate(num1, num2, operator);

          // Display result
          console.log("\n=== Result ===");
          if (result.success) {
            console.log(`✓ ${result.operation}`);
            console.log(`Answer: ${result.result}`);
          } else {
            console.log(`✗ Error: ${result.error}`);
          }

          // Ask if user wants to continue
          rl.question("\nCalculate again? (yes/no): ", (answer) => {
            if (
              answer.toLowerCase() === "yes" ||
              answer.toLowerCase() === "y"
            ) {
              console.log("\n");
              startCalculator();
            } else {
              console.log("Thank you for using the calculator!");
              rl.close();
            }
          });
        });
      }
    );
  });
}

startCalculator();

// Export for use in other modules
export { calculate };
