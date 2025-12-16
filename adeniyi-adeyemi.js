const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askFirstNumber() {
  rl.question("Enter first number: ", function (text1) {
    let number1 = Number(text1);

    if (Number.isNaN(number1) || !Number.isFinite(number1)) {
      console.log("Invalid input. Please enter a valid number.\n");
      askFirstNumber();
      return;
    }

    askOperator(number1);
  });
}

function askOperator(number1) {
  rl.question("Enter operator (+, -, *, /, %, **): ", function (op) {
    let operator = op.trim();

    if (
      operator !== "+" &&
      operator !== "-" &&
      operator !== "*" &&
      operator !== "/" &&
      operator !== "%" &&
      operator !== "**"
    ) {
      console.log("Invalid operator. Try again.\n");
      askOperator(number1);
      return;
    }

    askSecondNumber(number1, operator);
  });
}

function askSecondNumber(number1, operator) {
  rl.question("Enter second number: ", function (text2) {
    let number2 = Number(text2);

    if (Number.isNaN(number2) || !Number.isFinite(number2)) {
      console.log("Invalid input. Please enter a valid number.\n");
      askSecondNumber(number1, operator);
      return;
    }

    if (operator === "/" && number2 === 0) {
      console.log("Error: You cannot divide by zero.\n");
      askFirstNumber();
      return;
    }

    calculate(number1, operator, number2);
  });
}

function calculate(number1, operator, number2) {
  let result;

  if (operator === "+") result = number1 + number2;
  else if (operator === "-") result = number1 - number2;
  else if (operator === "*") result = number1 * number2;
  else if (operator === "/") result = number1 / number2;
  else if (operator === "%") result = number1 % number2;
  else if (operator === "**") result = number1 ** number2;

  console.log("\nResult: " + result + "\n");
  askToContinue();
}

function askToContinue() {
  rl.question("Do you want to calculate again? (yes/no): ", function (answer) {
    let reply = answer.trim().toLowerCase();

    if (reply === "yes" || reply === "y") {
      console.log("");
      askFirstNumber();
    } else if (reply === "no" || reply === "n") {
      console.log("\nGoodbye!");
      rl.close();
    } else {
      console.log("Please type yes or no.\n");
      askToContinue();
    }
  });
}

console.log("=== ADENIYI'S SIMPLE CALCULATOR () ===\n");
askFirstNumber();
