const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

/**
 * Performs a basic arithmetic operation on two numbers.
 *
 * @param {number} a - The first operand.
 * @param {number} b - The second operand.
 * @param {'add' | 'subtract' | 'divide' | 'multiply'} op - The operation to perform.
 * @returns {number} The result of the calculation.
 *
 * @throws {Error} If `op` is not a valid operation.
 */
function calculator(a, b, op) {
  switch (op) {
    case 'add':
      return a + b;
      break;

    case 'subtract':
      return a - b;
      break;

    case 'divide':
      return a / b;
      break;

    case 'multiply':
      return a * b;
      break;

    default:
      throw new Error(`"${op}" is not a valid operation.`);
  }
}

const run = async () => {
  try {
    const arg1 = parseInt(await rl.question('Enter the first operand, a: '));
    const arg2 = parseInt(await rl.question('Enter the second operand, b: '));
    const op = await rl.question(
      'Enter a valid operation (add | subtract | divide | multiply): '
    );
    rl.close();

    if (isNaN(arg1)) {
      throw new TypeError('Operand a must be a number');
    }

    if (isNaN(arg2)) {
      throw new TypeError('Operand b must be a number');
    }

    if (!op) {
      throw new Error('Stopping process due to undefined operation');
    }

    const result = calculator(arg1, arg2, op);
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
};

run();
