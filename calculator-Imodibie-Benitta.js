const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Helper function to ask questions
const ask = (question) =>
  new Promise((resolve) => rl.question(question, resolve));

async function calculator() {
  try {
    const num1 = await ask("Enter first number: ");
    const operator = await ask("Enter operator (+, -, *, /, %): ");
    const num2 = await ask("Enter second number: ");

    const a = Number(num1);
    const b = Number(num2);

    // Validate numbers
    if (isNaN(a) || isNaN(b)) {
      throw new Error("Both inputs must be valid numbers.");
    }

    let result;

    switch (operator.trim()) {
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
        if (b === 0) throw new Error("Division by zero is not allowed.");
        result = a / b;
        break;
      case "%":
        if (b === 0) throw new Error("Modulo by zero is not allowed.");
        result = a % b;
        break;
      default:
        throw new Error("Invalid operator.");
    }

    console.log(`✅ Result: ${result}`);
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
  } finally {
    rl.close();
  }
}

calculator();