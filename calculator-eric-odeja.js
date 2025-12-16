const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

async function calculator() {
  let result;

  while (!result) {
    const a = Number(await ask("Enter first number: "));
    const b = Number(await ask("Enter second number: "));
    const op = await ask("Enter operator (+, -, *, /): ");

    if (Number.isNaN(a) || Number.isNaN(b)) {
      console.log(">>>Input a valid number");
    }
      switch (op) {
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
          result = a / b;
          break;

        default:
          console.log(">>>Input valid operator");
          break;
      }
      console.log(`Result: ${result}`);
  }
  rl.close();
}

calculator();
