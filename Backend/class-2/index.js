const readline = require("readline");
const { sum, substract, multiply, division } = require("./data");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("Enter your name:", (name) => {
rl.question("Enter first number:", (num1) => {
    rl.question("Enter  second number:", (num2) => {
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);
        const result = sum(number1 , number2);
        console.log(`The sum result is: ${result}`);
        console.log(`The name is: ${name}`);
        rl.close();
    });
});
});