function calculator(a, b, operator) {
  try {
    // Convert to numbers
    const num1 = Number(a);
    
    const num2 = Number(b);

    // Validate numbers
    if (!Number.isFinite(num1) || !Number.isFinite(num2)) {
      return "Error: Invalid number input.";
    }

    // Validate operator
    if (typeof operator !== "string") {
      return "Error: Operator must be a string.";
    }

    switch (operator.trim()) {
      case "+":
      case "plus":
        return num1 + num2;

      case "-":
      case "minus":
        return num1 - num2;

      case "*":
      case "x":
      case "multiply":
        return num1 * num2;

      case "/":
      case "divide":
        if (num2 === 0) {
          return "Error: Cannot divide by zero.";
        }
        return num1 / num2;

      default:
        return "Error: Invalid operator.";
    }
  } catch (error) {
    return "Unexpected error occurred.";
  }
}
console.log(calculator(10 ,5, '+'))