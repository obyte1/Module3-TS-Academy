// including the i/o module
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// using the input module to collect the user input
rl.question('Enter first number: ', (num1) => {
  rl.question('Enter operator (+, -, *, /): ', (operator) => {
    rl.question('Enter second number: ', (num2) => {
      // Now num1, operator, num2 are in scope
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);

      let result;
      switch (operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num2 !== 0 ? num1 / num2 : 'Error: Division by zero'; break;
        default: result = 'Invalid operator';
      }

      console.log(`${num1} ${operator} ${num2} = ${result}`);
      rl.close();
    });
  });
});
