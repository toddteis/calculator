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

function makeInt(para) {
    return parseInt(para);
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
    console.log("from within equalsController")
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

// OLD CODE


// let hasDecimal = false;
// let hasOperator = false;
// let hasBeenCleared = false;
// let hasEqualsBePressed = false;

// buttonsNumber.forEach((button) => {
//     button.addEventListener('click', () => {
//         mainDisplayController(button.id);
//     });
// });

// buttonsOperator.forEach((button) => {
//     button.addEventListener('click', () => {
//         operatorController(button.id);
//     });
// });

// buttonClear.addEventListener('click', () => { clearController(); })
// buttonDelete.addEventListener('click', () => { deleteController(); })
// buttonPlusMinus.addEventListener('click', () => { mainDisplayController(buttonPlusMinus.id); })
// buttonEqual.addEventListener('click', () => { equalsController(buttonEqual.id); })
// buttonDecimal.addEventListener('click', () => { mainDisplayController(buttonDecimal.id); })



// function equalsController(para) {
//     // sets a variable that is used in mainDisplayController to know when
//     // to clear the screen for a knew equation.
//     if(para = '=') {
//         hasEqualsBePressed = true;
//     }
//     let mainStr = displayMainScreen.innerText;
//     displayTopScreen.innerText +=  ` ${mainStr} =`;
//     let arr = displayTopScreen.innerText.split(' ');
//     num1 = parseFloat(arr[0]);
//     num2 = parseFloat(arr[2]);
//     displayMainScreen.innerText = operate(num1, arr[1], num2);
// }

// function topDisplayController(para) {
//     if(!hasOperator) {
//         displayTopScreen.innerText = `${displayMainScreen.textContent} ${para}`;
//     } else {
//         let str = displayTopScreen.innerText;
//         str = str.substring(0, str.length -1);
//         displayTopScreen.innerText = str + para;
//     }
// }

// function clearController() {
//     displayMainScreen.innerText = '';
//     hasDecimal = false;
//     displayTopScreen.innerText = '';
//     hasOperator = false;
//     hasBeenCleared = false;
//     hasEqualsBePressed = false;
// }

// function deleteController() {
//     let str = displayMainScreen.innerText;
//     str = str.substring(0, str.length -1);
//     displayMainScreen.innerText = str;
//     hasDecimal = (!str.includes('.')) ? false : true;
// }

// function operatorController(para) {
//     if(!hasOperator) {
//         topDisplayController(para);
//         hasOperator = true;
//     } else {
//         continueEquationController(para);
//     }       
// }

// function continueEquationController(para) {
//     //get ans and display it on top and main screens with the new operator.
//     let topStr = displayTopScreen.innerText;
//     let mainStr = displayMainScreen.innerText;
//     topStr += ` ${mainStr}`;
//     let arr = topStr.split(' ');
//     num1 = parseFloat(arr[0]);
//     num2 = parseFloat(arr[2]);
//     let ans = operate(num1, arr[1], num2);
//     displayMainScreen.innerText = ans;
//     displayTopScreen.innerText = ans + ' ' + para;
//     hasBeenCleared = false;
// }

// function mainDisplayController(para) {
    
//     // check to see if hasOperator is true,
//     // if so clear main screen before continuing.
//     if (hasOperator) { 
//         if (!hasBeenCleared) {
//             displayMainScreen.innerText = '';
//             hasBeenCleared = true;
//         }
//     }

//     // clears both screen and resets variables for next equation.
//     if (hasEqualsBePressed) {
//         clearController();
//     }

//     // handles decimal, +/- or numbers and then displays them on the main screen.
//     if (para == '.') {
//         if ( hasDecimal == false) {
//             displayMainScreen.innerText += para;
//             hasDecimal = true;
//         }
//     } else if (para =='+/-') {
//         let currentScreenValue = displayMainScreen.innerText;
//         if (currentScreenValue > 0) {
//             let firstChar = currentScreenValue.substring(0,1);
//             if (firstChar == '+') {
//                 currentScreenValue = currentScreenValue.substring(1, currentScreenValue.length);
//             }
//             displayMainScreen.innerText = "-" + currentScreenValue;
//         } else {
//             currentScreenValue = currentScreenValue.substring(1, currentScreenValue.length);
//             displayMainScreen.innerText = "+" + currentScreenValue;
//         }
//     } else {
//         displayMainScreen.innerText += para;
//     }
    
// }

// function operate(num1, oper, num2) {
//     let result;
//     if (oper == '+') {
//         result = add(num1, num2);
//     } else if (oper == '-') {
//         result = subtract(num1, num2);
//     } else if (oper == '*') {
//         result = multiple(num1, num2)
//     } else if (oper == '/') {
//         result = divide(num1, num2);
//     } else {
//         result = "Not a vaid operator."
//     }  
//     return result;
// }

// function add(num1, num2) {
//     return (num1 + num2);
// }

// function subtract(num1, num2) {
//     return (num1 - num2);
// }

// function multiple(num1, num2) {
//     return (num1 * num2);
// }

// function divide(num1, num2) {
//     return (num1 / num2);
// }