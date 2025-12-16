const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const isNumberValid = (value) => {
	return !isNaN(value) && isFinite(value);
};

const calculate = (a, b, operator) => {
	switch (operator) {
		case '+':
			return a + b;
		case '-':
			return a - b;
		case '*':
			return a * b;
		case '/':
			if (b === 0) {
				return "Error: Can't divide by zero";
			}
			return a / b;
		case '%':
			if (b === 0) {
				return "Error: Can't divide by zero";
			}
			return a % b;

		default:
			return 'Error: Invalid operator';
	}
};

const startCalculating = () => {
	rl.question('Enter first number: ', (firstInput) => {
		const num1 = Number(firstInput);
		if (!isNumberValid(num1)) {
			console.log('Invalid input. Please enter a valid number');
			return startCalculating();
		}

		rl.question('Enter operator (+, -, *, /, %):', (operator) => {
			rl.question('Enter second number: ', (secondInput) => {
				const num2 = Number(secondInput);
				if (!isNumberValid(num2)) {
					console.log('Invalid input. Please enter a valid number');
					return startCalculating();
				}
				const result = calculate(num1, num2, operator);
				console.log(`Your result is ${result}`);

				rl.question('Do you want to calculate again? (yes/no): ', (answer) => {
					if (answer.toLowerCase() === 'yes') {
						startCalculating();
					} else {
						console.log('calculator closed');
						rl.close();
					}
				});
			});
		});
	});
};

startCalculating();
