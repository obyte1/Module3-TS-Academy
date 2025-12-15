const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculator() {
  rl.question("Enter first number: ", (num1) => {
    rl.question("Enter operator (+, -, *, /): ", (op) => {
      rl.question("Enter second number: ", (num2) => {
        try {
          num1 = parseFloat(num1);
          num2 = parseFloat(num2);
          switch (op) {
            case "+":
              console.log(`Result: ${num1 + num2}`);
              break;
            case "-":
              console.log(`Result: ${num1 - num2}`);
              break;
            case "*":
              console.log(`Result: ${num1 * num2}`);
              break;
            case "/":
              if (num2 !== 0) {
                console.log(`Result: ${num1 / num2}`);
              } else {
                console.log("Error: Division by zero");
              }
              break;
            default:
              console.log("Invalid operator");
          }
        } catch (error) {
          console.log("Invalid input");
        }
        rl.close();
      });
    });
  });
}

calculator();