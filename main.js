const buttonsNumber = document.querySelectorAll('input.number');
const buttonsOperator = document.querySelectorAll('input.operator');
const buttonClear = document.querySelector('input.clear');
const buttonDelete = document.querySelector('input.delete');
const buttonPlusMinus = document.querySelector('input.plus-minus');
const buttonEqual = document.querySelector('input.equals');
const buttonDecimal = document.querySelector('input.decimal');
const displayMainScreen = document.querySelector('.display-main')
const displayTopScreen = document.querySelector('.display-top')

const numberList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operateList = ['+', '-', '*', '/'];
let equationStack = [];
let clearScreen = false;
let equationFinished = false;

buttonsNumber.forEach((button) => {
    button.addEventListener('click', () => {
        mainController(button.id);
    });
});

buttonsOperator.forEach((button) => {
    button.addEventListener('click', () => {
        mainController(button.id);
    });
});

buttonClear.addEventListener('click', () => { mainController(buttonClear.id); });
buttonDelete.addEventListener('click', () => { mainController(buttonDelete.id); });
buttonPlusMinus.addEventListener('click', () => { mainController(buttonPlusMinus.id); });
buttonEqual.addEventListener('click', () => { mainController(buttonEqual.id); });
buttonDecimal.addEventListener('click', () => { mainController(buttonDecimal.id) });


function mainController(para) {
    if(numberList.includes(para) && equationFinished == true) {
        displayTopScreen.textContent = '';
        displayMainScreen.textContent = '';
        equationStack = [];
        equationFinished = false;
    } else if (operateList.includes(para) && equationFinished == true) {
        let fifthEntry = equationStack[4];
        equationStack = [];
        displayTopScreen.textContent = '';
        displayMainScreen.textContent = '';
        equationFinished = false;
        equationStack = [fifthEntry];
        console.log(equationStack);
    }
    
    if (numberList.includes(para)) {
        numberController(para);
    } else if (operateList.includes(para)) {
        operatorController(para);
    } else if (para == '.') {
        decimalController(para);
    } else if (para == 'clear') {
        clearController();
    } else if (para == 'delete') {
        deleteController();
    } else if (para == '+/-') {
        plusMinusController();
    } else {
        equalsController();
    }
    displayController();
}

function displayController() {
    if (clearScreen == true) {
        displayTopScreen.textContent = '';
        displayMainScreen.textContent = '';
        clearScreen = false;
    } else {

        let numEntries = equationStack.length;
        if (numEntries == 1) {
            displayMainScreen.textContent = equationStack[0];
        } else if (numEntries == 2) {
            displayTopScreen.textContent = equationStack[0]+ ' ' + equationStack[1];
            displayMainScreen.textContent = equationStack[0];
        } else if (numEntries == 3) {
            displayTopScreen.textContent = equationStack[0]+ ' ' + equationStack[1];
            displayMainScreen.textContent = equationStack[2];
        } else if (numEntries == 5) {
            displayTopScreen.textContent = equationStack[0]+ ' ' + equationStack[1] + ' ' + equationStack[2] + ' ' + equationStack[3];
            displayMainScreen.textContent = equationStack[4];
        }
    }
}

function numberController(para) {
    if (equationStack.length == 0) {
        equationStack.push(para);
    } else if (equationStack.length == 1) {
        equationStack[0] = equationStack[0] + para;
    }  else if (equationStack.length == 2){
        // add logic when two entries are found in the equationStack to add three entry(second number)
        equationStack[2] = para;
        console.log(equationStack);
    } else {
        equationStack[2] = equationStack[2] + para;
        console.log(equationStack);
    }
}

function operatorController(para) {
    if (equationStack.length == 0) {
        equationStack.push('0', para);
    } else if (equationStack.length == 1) {
        equationStack.push(para);
        console.log(equationStack)
    } else if (equationStack.length == 2) {
        equationStack[1] = para;
        console.log(equationStack)
    } else if (equationStack.length == 3) {
        equationStack[3] = para;
    }
}

function decimalController(para) {
    let lastStr = equationStack[equationStack.length -1];
    let hasDecimal = lastStr.includes('.');
    console.log(hasDecimal);
    if (!hasDecimal) {
        if (equationStack.length == 0) {
            equationStack.push(`0${para}`);
            console.log(equationStack);
        } else if (equationStack.length == 1) {
            equationStack[0] = equationStack[0] + para;
            console.log(equationStack);
        } else if (equationStack.length == 2) {
            equationStack.push(`0${para}`);
            console.log(equationStack);
        } else {
            equationStack[2] = equationStack[2] + para;
        }
    }
    console.log(equationStack);
}

function clearController() {
    equationStack = [];
    clearScreen = true;
}

function deleteController() {
    if (equationStack.length == 1) {
        let str = equationStack[0];
        equationStack[0] = str.substring(0, str.length -1);
        console.log(equationStack)
    } else if (equationStack.length == 3) {
        let str = equationStack[2];
        equationStack[2] = str.substring(0, str.length -1);
        console.log(equationStack)
    }
}

function plusMinusController() {
    console.log("from within plusMinusController")
}

function equalsController() {
    equationStack.push('=');
    equationStack.push(operate());
    equationFinished = true;
}

function operate() {
    let oper = equationStack[1];
    let num1 = Number(equationStack[0]);
    let num2 = Number(equationStack[2]);
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