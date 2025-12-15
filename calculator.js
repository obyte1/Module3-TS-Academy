function calculate(num1, num2, operator) {
    switch (operator) {
        case "+":
        return num1 + num2;
        case "-":
        return num1 - num2;
        case "*":
        return num1 * num2;
        case "/":
        if (num2 == 0) {
            return "Error: Division by zero is not allowed.";
        }
        return num1 / num2;
        default:
            return "Error: Invalid Operator.";
    }
}

module.exports = calculate; 