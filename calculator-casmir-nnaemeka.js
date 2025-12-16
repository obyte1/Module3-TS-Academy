//Creating Interfacce
const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
let operator;
let firstOperand;
let secondOperand;

//Welcomming User
function onboardUser() {
rl.question("Please type your name ", function procceed(theName){
  console.log(`Hi ${theName}👋`);
  askOfOperator();
});
}


//Collecting Operator
function askOfOperator() {
 rl.question(`What type of calculation are you performing ?\n+ - Addition\n* - Multiplication\n/ - Division\n- - Subtraction\n% - Modulo\nEnter an operator: `,
    function takeOperator(theOperator){
    let validOperators = ['+', '-', '*', '/', '%'];
      if(!validOperators.includes(theOperator)){
        console.log("INVALID OPERATOR: Please type in a valid operator e.g enter + if you want to perform addition");
        askOfOperator();
       
      }
     else {
      askOfFirstOperand();
      operator = theOperator;
      
     }
    }
  )
}

//Collecting First Operand
function askOfFirstOperand() {
 rl.question(`Enter your first number: `,
    function takeFirstOperand(theFirstOperand){
    let isANumber = parseFloat(theFirstOperand);
      if(!isANumber){
        console.log("INVALID OPERAND: Please enter a valid number");
        askOfFirstOperand();
       
      }
     else {
      // rl.close();
      askOfSecondOperand();
      firstOperand = isANumber;
     }
    }
  )
}


//Collecting Second Operand
function askOfSecondOperand() {
 rl.question(`Enter your second number: `,
    function takeFirstOperand(theSecondOperand){
    let isANumber = parseFloat(theSecondOperand);
      if(!isANumber){
        console.log("INVALID OPERAND: Please enter a valid number");
        askOfSecondOperand();
       
      }
     else {
      secondOperand = isANumber;
      performCalculation(operator, firstOperand, secondOperand);
    
     }
    }
  )
}

function outBoardUser() {
rl.question("Would you like to perform another calculation?\nYes\nNo\nEnter Y for `Yes` or N for `No`: ", function procceed(theAnswer){
if(theAnswer.toLowerCase() === 'y'){
  askOfOperator();
  return;
}
else if(theAnswer.toLowerCase() === 'n'){
  console.log("Thank you for using my calculator. Rate us on Console App store 😂!");
  rl.close();
  return;
}
  else{
    console.log("Invalid Input. Please enter Y for `Yes` or N for `No`");
    outBoardUser();
  }
});
}


function performCalculation(theOperator, theFirstOperand, theSecondOperand) {
  let result;
  switch(theOperator){
    case '+':
      result = theFirstOperand + theSecondOperand;
      break;
    case '-':
      result = theFirstOperand - theSecondOperand;
      break;
    case '*':
      result = theFirstOperand * theSecondOperand;
      break;
    case '/':
      result = theFirstOperand / theSecondOperand;
      break;
    case '%':
      result = theFirstOperand % theSecondOperand;
      break;
    default:
      console.log("Sorry, an error occured.");
  }
  console.log(`The result of ${theFirstOperand} ${theOperator} ${theSecondOperand} = ${Number.isFinite(result)?result: result.toFixed(3)}`);
  outBoardUser();
}


onboardUser();