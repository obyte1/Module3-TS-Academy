//import readline module 
const readInput = require('readline');

const readInterface = readInput.createInterface({
    input: process.stdin,
    output: process.stdout
});

readInterface.question(`Enter First Number: `, (value1) => {
    readInterface.question(`Enter an operator (*, +, -, /)`, (operator) => {
        readInterface.question(`Enter second Number: `, (value2) => {

            let number1 = parseInt(value1);
            let number2 = parseInt(value2);
            let result = null;

            if(operator !== '*' && operator !== '+' && operator !== '-' && operator !== '/'){
                console.log(`Invalid Operator => [${operator}]`);
            }else{
                
                switch(operator){
                    case `*`:
                        result = number1 * number2;
                        break;
                    case `+`:
                        result = number1 + number2;
                        break;
                    case `-`:
                        result = number1 - number2;
                        break;
                    case `/`:
                        result = number2 != 0 ? number1/number2 : `Not Disivible by Zero`;
                        break;
                    default:
                        result = `Error occurred due to invalid operation`;
                }
                console.log(`[ ${number1} ] [ ${operator} ] [ ${number2} ] = ${result}`);
            }
            readInterface.close();
        })
    })
    
});

