const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.buttons button');

let currentInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === '=') {
      try {
        if (currentInput.trim() !== '') {
          const result = eval(currentInput);
          currentInput = result.toString();
        }
      } catch (error) {
        currentInput = 'Error';
      }
    } else if (value === 'C') {
      currentInput = '';
    } else {
      currentInput += value;
    }

    display.value = currentInput;
  });
});
