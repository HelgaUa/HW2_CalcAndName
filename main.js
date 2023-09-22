//HW 2
let num1 = 1;
let num2 = 0;
let num3 = 3;
let num4 = 6;
let num5 = 9;
let message = `${num1} ${num2} ${num3} ${num4} ${num5}`;
console.log(message);
//
let x = 10;
let y = 5;
let plus = x + y;
let minus = x - y;
let multiplication = x * y;
let division = x / y;
console.log(plus, minus, multiplication, division);
//
function registration() {
    let firstName = prompt('What is your name?', 'Put your name');
    if (firstName !== null) {
        let capitalizeFirstLetter = firstName.charAt(0).toUpperCase();
        let restLetters = firstName.slice(1);
        alert(`Hello ${capitalizeFirstLetter}${restLetters}!`);
    } else {
        alert('Hello stranger!');
    }
}
registration();