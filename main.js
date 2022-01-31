const buttonsNumber = document.querySelectorAll('input.number');
const buttonsOperator = document.querySelectorAll('input.operator');
const buttonClear = document.querySelector('input.clear');
const buttonDelete = document.querySelector('input.delete');
const buttonPlusMinus = document.querySelector('input.plus-minus');
const buttonEqual = document.querySelector('input.equals');
const buttonDecimal = document.querySelector('input.decimal');
const displayMainScreen = document.querySelector('.display-main')
const displayTopScreen = document.querySelector('.display-top')

let hasDecimal = false;

buttonsNumber.forEach((button) => {
    button.addEventListener('click', () => {
        mainDisplayController(button.id);
    });
});

buttonsOperator.forEach((button) => {
    button.addEventListener('click', () => {
        operatorController(button.id);
    });
});

buttonClear.addEventListener('click', () => { clearController(); })
buttonDelete.addEventListener('click', () => { deleteController(); })
buttonPlusMinus.addEventListener('click', () => { mainDisplayController(buttonPlusMinus.id); })
buttonEqual.addEventListener('click', () => { controller(buttonEqual.id); })
buttonDecimal.addEventListener('click', () => { mainDisplayController(buttonDecimal.id); })

function clearController() {
    displayMainScreen.innerText = '';
    hasDecimal = false;
}

function deleteController() {
    let str = displayMainScreen.innerText;
    str = str.substring(0, str.length -1);
    displayMainScreen.innerText = str;
    hasDecimal = (!str.includes('.')) ? false : true;
}

function operatorController(para) {
    console.log('this is the operatorController');
}

function mainDisplayController(para) {
    if (para == '.') {
        if ( hasDecimal == false) {
            displayMainScreen.innerText += para;
            hasDecimal = true;
        }
    } else if (para =='+/-') {
        let currentScreenValue = displayMainScreen.innerText;
        if (currentScreenValue > 0) {
            let firstChar = currentScreenValue.substring(0,1);
            if (firstChar == '+') {
                currentScreenValue = currentScreenValue.substring(1, currentScreenValue.length);
            }
            displayMainScreen.innerText = "-" + currentScreenValue;
        } else {
            currentScreenValue = currentScreenValue.substring(1, currentScreenValue.length);
            displayMainScreen.innerText = "+" + currentScreenValue;
        }
    } else {
        displayMainScreen.innerText += para;
    }
    
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