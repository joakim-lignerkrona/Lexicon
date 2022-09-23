import { loggingEnabled } from "./helperFunctions.js";

const hello = () => console.log(`Hello world`);

const greet = (name) => console.log(`Hej ${name} hur mår du?`);

const calc = (numberOne, numberTwo) => numberOne + numberTwo

const tip = (sum, percent) => sum + sum * percent

if (loggingEnabled()) {
    hello()
    greet(`Kalle`)
    console.log(calc(5, 5));
    console.log(tip(100, 0.2));
}
else {
    console.log("\n\t\x1b[47m\x1b[34m" + `Testing is disabled run the program with "-v" to see test output` + "\x1b[0m\n");
}






