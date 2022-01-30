const displayMainDefault = 0;
const displayTopDefault = [1, '+', 2];

const buttonsNumber = document.querySelectorAll('input.number');
const buttonsOperator = document.querySelectorAll('input.operator');
const buttonClear = document.querySelector('input.clear');
const buttonDelete = document.querySelector('input.delete');
const buttonEqual = document.querySelector('input.equals');
const buttonDecimal = document.querySelector('input.decimal');
const displayMainScreen = document.querySelector('.display-main')
const displayTopScreen = document.querySelector('.display-top')

let displayTopInput = displayTopDefault;
let displayMainInput = displayMainDefault;


buttonsNumber.forEach((button) => {
    button.addEventListener('click', () => {
        controller(button.id)
    });
});

buttonsOperator.forEach((button) => {
    button.addEventListener('click', () => {
        controller(button.id)
    });
});

buttonClear.addEventListener('click', () => { controller(buttonClear.id); })
buttonDelete.addEventListener('click', () => { controller(buttonDelete.id); })
buttonEqual.addEventListener('click', () => { controller(buttonEqual.id); })
buttonDecimal.addEventListener('click', () => { controller(buttonDecimal.id); })

function controller(para) {

    // if (Number.isFinite(para)) {
    //     console.log(`from inside the if statement: ${para}`)
    // } else {
    //     console.log(`from inside the else statement: ${para}`)
    // }
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