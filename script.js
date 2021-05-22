// Calculator

const buttons = document.querySelectorAll('.myCalculatorValueButton');
const display = document.querySelector('.myCalculatorDisplay');

buttons.forEach(function(button) {
    button.addEventListener('click', calculate);
});

function calculate(event) {
  const clickedButtonValue = event.target.value;

  if (clickedButtonValue === '=') {
    if (display.value !== '') {
        display.value = eval(display.value);
    }
  } 

  else if (clickedButtonValue === 'C') {
    display.value = '';
  }

  else {
    display.value += clickedButtonValue;
  }
}

//...