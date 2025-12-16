    function calculate(operand1, operand2, operator) {
    try {
        // Converting inputs to numbers
        const num1 = Number(operand1);
        const num2 = Number(operand2);

        // Validate numbers
        if (Number.isNaN(num1) || Number.isNaN(num2)) {
        return {
            success: false,
            error: "Operands must be valid numbers"
        };
        }

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
            return {
                success: false,
                error: "Division by zero is not allowed"
            };
            }
            result = num1 / num2;
            break;

        case "%":
            if (num2 === 0) {
            return {
                success: false,
                error: "Modulo by zero is not allowed"
            };
            }
            result = num1 % num2;
            break;

        default:
            return {
            success: false,
            error: "Invalid operator"
            };
        }

        return {
        success: true,
        result
        };

    } catch (err) {
        // Absolute fallback to prevent potential crashe
        return {
        success: false,
        error: "Unexpected error occurred"
        };
    }
    }
