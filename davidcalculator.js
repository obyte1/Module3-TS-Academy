function calculator(num1, num2, operator) {
    const a = Number(num1);
    const b = Number(num2);

    if (isNaN(a) || isNaN(b)) {
        return "Error : pls enter valid number.";
    }
    if (typeof operator !== "string") {
        return "Error : operator must be a string.";
    }
    switch (operator.trim()) {
        case "+":
        case "plus":
            return a + b;
        case "-":
        case "minus":
            return a - b;
          case "*":
        case "multiplication":
            return a * b;
          case "/":
        case "divide":
            if (b == 0) {
                return "Error:Division by zero is not allowed.";

            }
            return a / b;
        default:
            return "Error:invalid operator. Use +,-,*,or/.";
        
            
        }
    
}
console.log(calculator(10, 5, "+"));
console.log(calculator(10, 0, "/"));