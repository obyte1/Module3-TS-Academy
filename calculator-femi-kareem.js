async function main() {
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Function to get input
function getOPerand(prompt) {
    return new Promise((resolve)=>{
        rl.question(prompt,(input) =>{
            const num = parseFloat(input);
            if (isNaN(num)){
                console.log("invalid input.Please enter a number.");
                resolve(getOperand(prompt));
                //Recursive call for invalid input

            } else {
                resolve(num);
            }
        });
    });
}

//Function to get operator
function getOperator(){
    return new Promise((resolve) =>{
        rl.question("Enter operator(+,-,*,/):", (input) =>{
            const validOperators =["+","-","*","/"];
            if (!validOperators.includes(input.trim())){
                console.log("invalid operator. Try again!.");
                resolve(getOperator());// Recursive call for invalid input

            }else{
                resolve(input.trim());
            }
        });
    });
}

//Calculator function
async function calculator() {
}try{
        const num1 = await getOperand("Enter first number: ");
            const operator = await getOperator();
            const num2 = await getOperand("Enter second number:");

            switch (operator) {
                case "+":
                    console.log(`Result:${num1}+${num2} = ${num1+num2}`);
                    break;
                    case"-":
                    console.log(`Result:${num1}-${num2} =${num1-num2}`);
                    break;
                    case "*":
                        console.log(`Result: ${num1} * ${num2} = ${num1*num2}`);
                        break;
                        case "/":
                            if (num2 === 0) {
                                console.log("Error: Division by zero!");
                            }else{
                                console.log(`Result: ${num1} / ${num2} = ${num1/num2}`);

                            }
                            break;
                            default:
                                console.log("invalid operator!");
                        }
                                
                                rl.close();
                    }catch (error){
                        console.error("An error occurred:", error);

                        rl.close();
                    }
                }
                    //Run the calculator

