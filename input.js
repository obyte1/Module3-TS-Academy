const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`what is your first number: `, (num) => {
    rl.question(`what is your second number: `, (num2) => {

        const result = parseInt(num) + parseInt(num2);

    console.log(`your answer is: ${result}`);
    
    rl.close();

});
});

// rl.question('Enter your forst number: ', (num) => {
//     rl.question('Enter your second number: ', (num2) => {
//         const result = parseInt(num) + parseInt(num2);
//     console.log(`you answer is: ${result}`);
//     rl.close();
// });
