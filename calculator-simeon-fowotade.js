/**
 * Simple CLI Calculator
 * - Accepts two numeric operands
 * - Accepts an operator (+, -, *, /, %, **)
 * - Handles invalid inputs gracefully
 * - Never crashes under any condition
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 *  Parse a number from user input
 */
function parseNumber(input) {
  const value = Number(input.trim());
  return Number.isFinite(value) ? value : null;
}

/**
 * Validate supported operators
 */
function isValidOperator(operator) {
  return ['+', '-', '*', '/'].includes(operator);
}

/**
 * Perform calculation based on values and operator from input
 */
function calculate(a, b, operator) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      if (b === 0) {
        throw new Error('Division by zero is not allowed, adjust input.');
      }
      return a / b;
    default:
      throw new Error('Unsupported operator.');
  }
}

/**
 * Promise-based question helper
 */
function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(answer));
  });
}

/**
 * Main execution flow
 */
async function main() {
  try {
    const firstInput = await ask('Enter first operand: ');
    const firstNumber = parseNumber(firstInput);

    if (firstNumber === null) {
      console.error('Invalid first number, enter valid number.');
      return;
    }

    const operatorInput = await ask('Enter operator (+, -, *, /,): ');

    const operator = operatorInput.trim();

    if (!isValidOperator(operator)) {
      console.error('Invalid operator.');
      return;
    }

    const secondInput = await ask('Enter second number: ');
    const secondNumber = parseNumber(secondInput);

    if (secondNumber === null) {
      console.error('Invalid second number, enter valid number.');
      return;
    }

    const result = calculate(firstNumber, secondNumber, operator);
    console.log(`Result: ${result}`);
  } catch (error) {
    console.error(
      error instanceof Error
        ? `Error: ${error.message}`
        : 'An unexpected error occurred.',
    );
  } finally {
    rl.close();
  }
}

/**
 * Ensure the program never crashes
 */
main().catch(() => {
  console.error('Fatal error occurred.');
  rl.close();
});
