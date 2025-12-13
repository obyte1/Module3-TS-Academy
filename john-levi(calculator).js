import readline from "readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => {
    if (b === 0) throw new Error("Division by zero is not allowed");
    return a / b;
  },
  "%": (a, b) => {
    if (b === 0) throw new Error("Modulo by zero is not allowed");
    return a % b;
  },
  "**": (a, b) => a ** b,
  "^": (a, b) => a ** b,
};

const calculate = (input) => {
  try {
    input = input.trim();

    if (!input) {
      throw new Error("Empty input. Please enter a calculation expression.");
    }

    const regex = /^(-?\d+\.?\d*)\s*([\+\-\*\/\%\^]|\*\*)\s*(-?\d+\.?\d*)$/;
    const match = input.match(regex);

    if (!match) {
      throw new Error(
        "Invalid format. Use: number operator number (e.g., 5 + 3)"
      );
    }

    const num1 = parseFloat(match[1]);
    const operator = match[2];
    const num2 = parseFloat(match[3]);

    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Invalid numbers provided");
    }

    if (!operations[operator]) {
      throw new Error("Unsupported Operator");
    }

    const result = operations[operator](num1, num2);

    if (!isFinite(result)) {
      throw new Error("Result is not a finite number");
    }
    return result;
  } catch (err) {
    throw err;
  }
};

function displayHelp() {
  console.log("\n📟 Calculator Help:");
  console.log("─────────────────────────────");
  console.log("Supported operations:");
  console.log("  + : Addition");
  console.log("  - : Subtraction");
  console.log("  * : Multiplication");
  console.log("  / : Division");
  console.log("  % : Modulo");
  console.log("  ** or ^ : Exponentiation");
  console.log("\nFormat: number operator number");
  console.log("Examples: 5 + 3, 10 / 2, 2 ** 3");
  console.log("\nCommands:");
  console.log("  help : Show this help message");
  console.log("  exit or quit : Exit calculator\n");
}

const startCalculator = () => {
  console.log("\n✨ Welcome to Command Line Calculator! ✨");
  console.log('Type "help" for instructions or "exit" to quit.\n');

  const promptUser = () => {
    rl.question("Calculate: ", (input) => {
      const command = input.trim().toLowerCase();

      if (command === "exit" || command === "quit") {
        rl.close();
        return;
      }

      if (command === "help") {
        displayHelp();
        promptUser();
        return;
      }

      try {
        const result = calculate(input);
        console.log(`Result: ${result}\n`);
      } catch (err) {
        console.log(`Error: ${err.message}\n`);
      }

      promptUser();
    });
  };

  promptUser();
};

rl.on("close", () => {
  process.exit(0);
});

startCalculator();
