/**
 * Simple Calculator
 * Handles invalid inputs gracefully
 */

function calculator(operand1, operand2, operator) {
  try {
    // Validate numbers
    if (typeof operand1 !== "number" || typeof operand2 !== "number") {
      return "Error: Operands must be numbers";
    }

    // Validate operator
    if (typeof operator !== "string") {
      return "Error: Operator must be a string";
    }

    switch (operator) {
      case "+":
      case "plus":
        return operand1 + operand2;

      case "-":
      case "minus":
        return operand1 - operand2;

      case "*":
      case "multiply":
        return operand1 * operand2;

      case "/":
      case "divide":
        if (operand2 === 0) {
          return "Error: Division by zero is not allowed";
        }
        return operand1 / operand2;

      default:
        return "Error: Invalid operator";
    }
  } catch (error) {
    return "Unexpected error occurred";
  }
}

/* Test cases */
console.log(calculator(10, 5, "+")); // 15
console.log(calculator(10, 5, "minus")); // 5
console.log(calculator(10, 0, "/")); // Error
console.log(calculator("a", 5, "+")); // Error
console.log(calculator(10, 5, "power")); // Error
