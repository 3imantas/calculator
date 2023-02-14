let firstOperand = '';
let secondOperand = '';
let operation = '';

let isOperationClicked = false;

const digits = document.querySelectorAll('.digits');
const operations = document.querySelectorAll('.operation');
const equal = document.querySelector('.equal');
const screen = document.querySelector('.screen p');
const clear = document.querySelector('.clear');
const del = document.querySelector('.backspace');



function add(){
    screen.textContent = parseFloat(firstOperand) + parseFloat(secondOperand);
}

function subtract(){
    screen.textContent = parseFloat(firstOperand) - parseFloat(secondOperand);
}

function multiply(){
    screen.textContent = parseFloat(firstOperand) * parseFloat(secondOperand);
}

function divide(){
    screen.textContent = parseFloat(firstOperand) / parseFloat(secondOperand);
}

function result(){
    //console.log(firstOperand+operation+secondOperand);
    if(firstOperand != '' && operation != '' && secondOperand != '')
    {
        if(operation == '+') add();
        else if(operation == '-') subtract();
        else if(operation == 'X') multiply();
        else divide();
        firstOperand = screen.textContent;
        secondOperand = '';
        operation = '';
        isOperationClicked = false;
    }
}


digits.forEach((digit) => {
    digit.addEventListener('click', () => {
        if(isOperationClicked)
        {
            secondOperand += digit.textContent;
            screen.textContent += digit.textContent;
        }
        else
        {
            firstOperand += digit.textContent;
            screen.textContent += digit.textContent;
        }
        //console.log(firstOperand + ' ' + secondOperand);
    });
});

operations.forEach((op) => {
    op.addEventListener('click', () =>{
        if(firstOperand != '' && operation == '')
        {   
            isOperationClicked = true;
            operation = op.textContent;
            screen.textContent += op.textContent;
        }
        if(secondOperand != '')
        {
            result();
            operation = op.textContent;
            screen.textContent += op.textContent;
        }
        //console.log(operation)
    });
});

equal.addEventListener('click', result);


clear.addEventListener('click', () =>{
    screen.textContent = '';
    firstOperand = '';
    secondOperand = '';
    operation = '';
    isOperationClicked = false;

});

del.addEventListener('click', () =>{

    screen.textContent = screen.textContent.slice(0, -1);

    if(secondOperand != '')
    {
        secondOperand = secondOperand.slice(0,-1);
    }
    else if(operation != '')
    {
        operation = '';
        isOperationClicked = false;
    }
    else{
        firstOperand = firstOperand.slice(0,-1);
    }
});