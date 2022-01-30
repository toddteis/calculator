const displayMainDefault = 0;
const displayTopDefault = [1, '+', 2];

const buttons = document.querySelectorAll('input.btn-square');
const displayMainScreen = document.querySelector('.display-main')
const displayTopScreen = document.querySelector('.display-top')

let displayTopInput = displayTopDefault;
let displayMainInput = displayMainDefault;

console.log(displayMainInput);

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        controller(button.id)
    });
});

function controller(para) {
    displayMainScreen.textContent = para;
    displayTopScreen.textContent = para;
}

function operate(num1, oper, num2) {
    let result;
    if (oper == '+') {
        result = add(num1, num2);
    } else if (oper == '-') {
        result = subtract(num1, num2);
    } else if (oper == '*') {
        result = multiple(num1, num2)
    } else if (oper == '/') {
        result = divide(num1, num2);
    } else {
        result = "Not a vaid operator."
    }  
    return result;
}

function add(num1, num2) {
    return (num1 + num2);
}

function subtract(num1, num2) {
    return (num1 - num2);
}

function multiple(num1, num2) {
    return (num1 * num2);
}

function divide(num1, num2) {
    return (num1 / num2);
}