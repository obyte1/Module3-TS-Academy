const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function askQuestion(query) {
	return new Promise((resolve) => rl.question(query, resolve));
}

async function calculator() {
	try {
		// Ask for the first number
		let num1 = await askQuestion("Enter the first number: ");
		num1 = parseFloat(num1);
		if (isNaN(num1)) {
			console.log("Invalid input! Please enter a valid number.");
			return rl.close();
		}

		// Ask for the second number
		let num2 = await askQuestion("Enter the second number: ");
		num2 = parseFloat(num2);
		if (isNaN(num2)) {
			console.log("Invalid input! Please enter a valid number.");
			return rl.close();
		}

		// Ask for the operator
		const operator = await askQuestion("Enter an operator (+, -, *, /, %): ");

		let result;

		switch (operator) {
			case "+":
				result = num1 + num2;
				break;
			case "-":
				result = num1 - num2;
				break;
			case "*":
				result = num1 * num2;
				break;
			case "/":
				if (num2 === 0) {
					console.log("Error: Division by zero is not allowed!");
					return rl.close();
				}
				result = num1 / num2;
				break;
			case "%":
				result = num1 % num2;
				break;
			default:
				console.log("Invalid operator! Please use +, -, *, /, or %.");
				return rl.close();
		}

		console.log(`Result: ${result}`);
	} catch (err) {
		console.log("An error occurred:", err.message);
	} finally {
		rl.close();
	}
}

calculator();
