let display = '';
let operand1 = '';
let operand2 = '';
let operator = '';

document.querySelectorAll('.number').forEach((button) => {
  button.addEventListener('click', (e) => {
    display += e.target.textContent;
    updateDisplay();
  });
});

document.querySelectorAll('.command').forEach((button) => {
  button.addEventListener('click', (e) => {
    if (operator) {
      operand2 = display;
      calculate();
    } else {
      operand1 = display;
      operator = e.target.textContent;
      display = '';
    }
  });
});

document.querySelector('#clear').addEventListener('click', () => {
  display = '';
  operand1 = '';
  operand2 = '';
  operator = '';
  updateDisplay();
});

function updateDisplay() {
  document.querySelector('#displaysection h1').textContent = display;
}

function calculate() {
  let result;
  if (operator === '+') result = parseFloat(operand1) + parseFloat(operand2);
  if (operator === '-') result = parseFloat(operand1) - parseFloat(operand2);
  if (operator === '*') result = parseFloat(operand1) * parseFloat(operand2);
  if (operator === '/') result = parseFloat(operand1) / parseFloat(operand2);
  
  display = result.toString();
  operand1 = result;
  operand2 = '';
  operator = '';
  
  updateDisplay();
}
