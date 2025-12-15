/**
 * Performs a basic arithmetic operation on two numbers.
 *
 * @param {number} a - The first operand.
 * @param {number} b - The second operand.
 * @param {'add' | 'subtract' | 'divide' | 'multiply'} op - The operation to perform.
 * @returns {number} The result of the calculation.
 *
 * @throws {Error} If `a`, `b` or `op` is undefined.
 * @throws {TypeError} If `a` or `b` is not a number.
 * @throws {Error} If `op` is not a valid operation.
 */
function calculator(a, b, op) {
  if (a === undefined || b === undefined || op === undefined) {
    throw new Error('calculator was called with missing arguments');
  }

  if (typeof a !== 'number' || isNaN(a)) {
    throw new TypeError('Parameter a must be a number');
  }

  if (typeof b !== 'number' || isNaN(b)) {
    throw new TypeError('Parameter b must be a number');
  }

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

try {
  const result = calculator(2, 5, 'subtract');
  console.log(result);
} catch (error) {
  console.error(error.message);
}
