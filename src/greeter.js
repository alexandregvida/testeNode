module.exports = function greet() {
    return "Hello!";


var args = process.argv[2].split(' ')
var num1 = '1'
var operator = '+'
var num2 = '2'

if (operator === '+') {
    console.log(Number(num1) + Number(num2));
} else if (operator === '-') {
    console.log(Number(num1) - Number(num2));
} else if (operator === '*') {
    console.log(Number(num1) * Number(num2));
} else if (operator === '/') {
    console.log(Number(num1) / Number(num2));
}


}