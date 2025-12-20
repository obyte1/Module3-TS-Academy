const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let a, b;
const validOperators = ["+", "-", "*", "/"];
let c;

/*Function does the following:
1) Ask user for the first number: Line 19 
2) Validate input to ensure it's a number Line 20-22
3) Convert input to a number and store it in variable 'a': Line 24
4) Invokes a callback function to ask for the second number: Line 26
*/
function askFirstNumber() {
  rl.question("Enter your first number: ", (input) => {
    if (isNaN(input) || input.trim() === "") {
      console.log("Invalid input. Please enter a valid number.");
      askFirstNumber();
    } else {
      a = Number(input);
      askSecondNumber();
    }
  });
}

/*Function does the following:
1) Ask user for the second number: Line 38
2) Validate input to ensure it's a number Line 39-41
3) Convert input to a number and store it in variable 'b': Line 43
4) Logs the sum of 'a' and 'b': Line 45
5) Invokes a callback function to ask for the Operator: Line 44
*/
function askSecondNumber() {
  rl.question("Enter your second number: ", (input) => {
    if (isNaN(input) || input.trim() === "") {
      console.log("Invalid input. Please enter a valid number.");
      askSecondNumber();
    } else {
      b = Number(input);
      askOperator();
    }
  });
}

/*Function does the following:
1) Ask user for an operator: Line 38
2) Validate input to ensure it's a listed operator Line 59-61
3) If valid, performs the operation based on the operator provided: Line 63-82
4) Logs the final result of the operation: Line 83
5) Closes the readline interface: Line 84
*/
function askOperator() {
  rl.question("Enter an operator (+, -, *, /): ", (operator) => {
    if (!validOperators.includes(operator)) {
      console.log("Invalid operator. Please enter one of +, -, *, /.");
      askOperator();
    } else {
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
      console.log(`Result of ${a} ${operator} ${b} = ${result}`);
      rl.close();
    }
  });
}

askFirstNumber();
