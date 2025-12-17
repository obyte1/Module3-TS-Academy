async function main() {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  /* ---------------- INPUT HELPERS ---------------- */

  function getOperand(prompt) {
    return new Promise((resolve) => {
      rl.question(prompt, (input) => {
        const num = Number(input.trim());

        if (!Number.isFinite(num)) {
          console.log("❌ Invalid input. Please enter a valid number.");
          resolve(getOperand(prompt));
        } else {
          resolve(num);
        }
      });
    });
  }

  function getOperator() {
    return new Promise((resolve) => {
      rl.question("Enter operator (+, -, *, /): ", (input) => {
        const operator = input.trim();
        const validOperators = ["+", "-", "*", "/"];

        if (!validOperators.includes(operator)) {
          console.log("❌ Invalid operator. Try again.");
          resolve(getOperator());
        } else {
          resolve(operator);
        }
      });
    });
  }

  function askToContinue() {
    return new Promise((resolve) => {
      rl.question("\nRestart calculator? (y = yes, q = quit): ", (input) => {
        const answer = input.trim().toLowerCase();

        if (answer === "y") {
          resolve(true);
        } else if (answer === "q") {
          resolve(false);
        } else {
          console.log("❌ Invalid choice. Enter 'y' or 'q'.");
          resolve(askToContinue());
        }
      });
    });
  }

  /* ---------------- CALCULATION LOGIC ---------------- */

  function calculate(num1, operator, num2) {
    switch (operator) {
      case "+":
        return num1 + num2;

      case "-":
        return num1 - num2;

      case "*":
        return num1 * num2;

      case "/":
        if (num2 === 0) {
          throw new Error("Division by zero is not allowed.");
        }
        return num1 / num2;

      default:
        throw new Error("Unknown operator.");
    }
  }

  /* ---------------- MAIN CALCULATOR LOOP ---------------- */

  async function calculator() {
    while (true) {
      try {
        const num1 = await getOperand("\nEnter first number: ");
        const operator = await getOperator();
        const num2 = await getOperand("Enter second number: ");

        const result = calculate(num1, operator, num2);
        console.log(`✅ Result: ${num1} ${operator} ${num2} = ${result}`);
      } catch (error) {
        console.error("❌ Error:", error.message);
      }

      const shouldContinue = await askToContinue();
      if (!shouldContinue) break;
    }

    rl.close();
    console.log("👋 Calculator closed. Goodbye!");
  }

  await calculator();
}

main();
