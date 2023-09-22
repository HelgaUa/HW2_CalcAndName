//HW 2
let num = 10369;
let string = String(num);
let newString = `${string[0]} ${string[1]} ${string[2]} ${string[3]} ${string[4]}`;
//let newString = string.split("").join(" ");
console.log(newString);
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

