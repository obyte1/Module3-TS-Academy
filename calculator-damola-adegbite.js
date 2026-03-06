const rl = require('readline');
const reader = rl.createInterface({
    input: process.stdin,
    output:process.stdout
});

let currentResult = 0;

function valnum(input){
   const trimmed = input.trim();
   const num = parseFloat(trimmed);

   return !isNaN(num) && isFinite(num);
}

function valOperator(input){
    const trimmed = input.trim();
    return(trimmed === '+' || trimmed === '-' || trimmed === '*' || trimmed === '/');
}

function getFirstNumber(){
    reader.question('Enter a number:',(input) => {
        if (!valnum(input)){
            console.log('Invalid no, retry')
            getFirstNumber();
        }else{
            currentResult = parseFloat(input.trim());
            console.log(`Current Result: ${currentResult}`);
            askOperation();
        }
    });
}

function askOperation(){
    reader.question('Enter operator (+,-,*,/) or \'exit\'',(input)=>{
        const trimmed = input.trim().toLowerCase();

        if (trimmed === 'exit' || trimmed === 'quit'){
            console.log('Exiting calculator.');
            reader.close();
            return;
        }

        if (!valOperator(trimmed)){
            console.log('Invalid operator, retry');
            askOperation();
        } else {
            getNextNumber(trimmed);
        }
    });
}

function getNextNumber(operator){
    reader.question("Enter next number:",(input) =>{
        if(!valnum(input)){
            console.log('Invalid no., retry');
            getNextNumber(operator);
        }else{
            const nextNum = parseFloat(input.trim());
            calculate(operator, nextNum);
        }
    });
}

function calculate(operator, nextNum){
    if (operator === '/' && nextNum === 0) {
        console.log('Error: Cannot divide by zero');
        askOperation();
        return;
    }

    switch (operator) {
        case '+':
            currentResult = currentResult + nextNum;
            break;
        case '-':
            currentResult = currentResult - nextNum;
            break;
        case '*':
            currentResult = currentResult * nextNum;
            break;
        case '/':
            currentResult = currentResult / nextNum;
            break;
    }

    console.log(`Result: ${currentResult}`);
    askOperation();
}

getFirstNumber();