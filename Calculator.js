const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => {
        if (b === 0) {
            throw new Error('Division by zero');
        }
        return a / b;
    }
};

function parseNumber(value) {
    const n = Number(value);
    if (!Number.isFinite(n)) {
        throw new Error('Invalid number input');
    }
    return n;
}

console.log('*********** Welcome to calculator ************');
console.log("Enter '+' addition");
console.log("Enter '-' subtraction");
console.log("Enter '*' multiplication");
console.log("Enter '/' division");

rl.question('What operation do you want to perform? ', (op) => {
    op = op.trim();

    const operation = operations[op];
    if (!operation) {
        console.error('Invalid operation');
        return rl.close();
    }

    rl.question('Enter first number: ', (firstRaw) => {
        rl.question('Enter second number: ', (secondRaw) => {
            try {
                const first = parseNumber(firstRaw);
                const second = parseNumber(secondRaw);
                const result = operation(first, second);
                console.log(`${first} ${op} ${second} = ${result}`);
            } catch (err) {
                console.error(err.message);
            } finally {
                rl.close();
            }
        });
    });
});