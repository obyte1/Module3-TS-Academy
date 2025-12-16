const kizito = require('readline');
const ibe = kizito.createInterface({
    input: process.stdin,
    output: process.stdout
});

//ask for the first number
function askFirstNumber() {
ibe.question(`Enter you first number please: `, function(num1){
    //convert string input value to a float-point number
    num1 = parseFloat (num1);

    //check if the input is a valid number
    if (isNaN(num1)){
        console.log('Invalid input. Please enter a valid number.');
        return askFirstNumber();
    }

    //if valid, confirm validation before proceeding
    console.log(`first number accepted: ${num1}`); 
    askSecondNumber(num1);

});
}

    //ask for the second number
    function askSecondNumber(num1) {
    ibe.question(`Enter your second number please: `, function(num2){
        //convert string input to a float-point number
        num2 = parseFloat(num2);

        //check if the input is a valid number
        if(isNaN(num2)){
            console.log(`Invalid input. Please insert a valid number.`);
            return askSecondNumber(num1); 
        }

        //if valid, confirm validation before proceeding
        console.log(`second number accepted: ${num2} `);
        askOperator(num1, num2);
    });
}

        //ask for the operator
        function askOperator(num1, num2) {
        ibe.question(`Enter a valid operator( +, -, *, /): `, function(operator){
            //display invalid operator message if the operator is not valid
            if (!['+', '-', '*', '/'].includes(operator)) {
                console.log(`Please you inserted an invalid operator, try again.`);
                return askOperator(num1, num2);
            }

            //confirm the valid operator before proceeding
            console.log(`operator accepted: ${operator}`);

            //perform calculation based the corrected operator given by the user

            let result;
            
            if (operator === '+'){
                result = num1 + num2;
            }
            else if (operator === '-') {
                result = num1 - num2;

            }
            else if (operator === '*') {
                result = num1 * num2;
            }
            else if (operator === '/') {
                if (num2 === 0){
                    console.log(`hey, you can't divide by zero. simple math rules!`);
                    ibe.close();
                    return;
                }
                result = num1 / num2;
            }

            //display some result to the user
             console.log(`the result of ${num1} ${operator} ${num2} is: ${result} thank you`);
                ibe.close();
                    return;
                });
    }
askFirstNumber();

    
        