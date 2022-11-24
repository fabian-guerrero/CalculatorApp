const body = document.getElementById('body');
const calculator = document.querySelector('.calculator-wrapper');
const buttons = document.querySelector('.calculator-buttons');
const screen = document.querySelector('.result');

buttons.addEventListener('click', e => {
    if(e.target.matches('button')){
        const key = e.target;
        const number = key.dataset.number;
        const operator = key.dataset.operator;
        const displayNumber = screen.textContent;
        const previousKeyType = calculator.dataset.previousKeyType

        if (number){
            const keyNumber = key.textContent;

            if(displayNumber === '0' || previousKeyType === 'operator'){
                screen.textContent = keyNumber;
            }else{
                screen.textContent = displayNumber + keyNumber;
            }

            calculator.dataset.previousKeyType = 'number';
        }else if (operator){
            
            if (operator === 'result'){
                let firstNumber = calculator.dataset.firstNumber;
                const operator = calculator.dataset.operator;
                let secondNumber = screen.textContent;

                if(firstNumber){
                    if (previousKeyType === 'result'){
                        firstNumber = screen.textContent;
                        secondNumber = calculator.dataset.secondNumber
                    }
                }
                screen.textContent = calculate (firstNumber, operator, secondNumber);
                calculator.dataset.secondNumber = secondNumber;
                calculator.dataset.previousKeyType = 'result';
            }

            if(operator==='adding' || operator==='subtracting' || operator==='dividing' || operator==='multiplying'){
                const firstNumber = calculator.dataset.firstNumber;
                const operation = calculator.dataset.operator;
                const secondNumber = screen.textContent;

                if (firstNumber && operation && previousKeyType !== 'operator'){
                    const calcPartial = calculate(firstNumber,operation,secondNumber);
                    screen.textContent = calcPartial;
                    calculator.dataset.firstNumber = calcPartial;
                }else{
                    calculator.dataset.firstNumber = screen.textContent;
                }

                calculator.dataset.previousKeyType = 'operator';
                calculator.dataset.operator = operator;
            }

            if(operator==='decimal'){
                if (!displayNumber.includes('.') && (previousKeyType !== 'operator')){
                    screen.textContent =  displayNumber + '.';
                } else if (previousKeyType === 'operator'){
                    screen.textContent = '0.';
                }

                calculator.dataset.previousKeyType = 'decimal';
            }

            if(operator==='reset'){
                screen.textContent = '0';
                calculator.dataset.firstNumber='';
                calculator.dataset.previousKeyType='';
                calculator.dataset.operator='';
            }

            if(operator==='delete'){
                screen.textContent = '0';
            }
        }     
    }
})

const calculate = (number1, operator, number2) =>{
    let result;

    number1 = parseFloat(number1);
    number2 = parseFloat(number2);

    if (operator === 'adding'){
        result = number1 + number2;
    } else if (operator === 'subtracting'){
        result = number1 - number2;
    } else if (operator === 'multiplying'){
        result = number1 * number2;
    }else if (operator === 'dividing'){
        result = number1 / number2;
    }

    return result;
}

const theme1 = document.getElementById('theme-1');
const theme2 = document.getElementById('theme-2');
const theme3 = document.getElementById('theme-3');

theme1.addEventListener('click', toggleTheme);
theme2.addEventListener('click', toggleTheme);
theme3.addEventListener('click', toggleTheme);

function toggleTheme(e){
    const theme = e.target.id;02

    switch (theme) {
        case 'theme-1':
            body.className = '';
            body.classList.add(theme);
            break;
        case 'theme-2':
            body.className = '';
            body.classList.add(theme);
            break;
        case 'theme-3':
            body.className = '';
            body.classList.add(theme);
            break;
      }
}