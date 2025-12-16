
// Assignment Instructions
// Clone this repository:https://github.com/obyte1/Module3-TS-Academy.git
// Create a new branch using the following format:firstname-lastname
// Add a file named:calculator-firstname-lastname.js
// Task:Write code for a simple calculator that:
// Accepts two operands (numbers)
// Accepts an operator (plus, minus, division, multiplication)
// Handles invalid inputs gracefully
// Must not break under any condition


const calc = (num, operator, num2) => {
  if (typeof num !== "number" || typeof num2 !== "number") {
    return "One or both inputs are not numbers";
  }

  if (typeof operator !== "string") {
    return "Operator must be a string";
  }

  operator = operator.trim();

  switch (operator) {
    case "+":
      return num + num2;

    case "-":
      return num - num2;

    case "*":
      return num * num2;

    case "/":
      if (num2 === 0) {
        return "You cant divide a number by 0";
      }
      return num / num2;

    default:
      return "Invalid Operator";
  }
};

console.log(calc(12, " /", 3)); // 4
