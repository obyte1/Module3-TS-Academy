function TommyCalculator(num1, num2, operator) {

    const number1 = Number(num1);
    const number2 = Number(num2);

    let result;

    if (isNaN(number1) || isNaN(number2)) {
        console.error("Invalid input: Cannot convert to a number.");
        return;
    }

    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            if (number2 === 0) {
                return "Can't divide by 0!";
            }
            result = number1 / number2;
            break;
        case '%':
            result = (number1 / 100) * number2;
        default:
            return "Invalid operator";
    }
    return result;
}

