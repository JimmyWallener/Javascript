


function calculator() {
  let firstNumber = parseFloat(document.getElementById('firstNumber').value);
  let operator = document.getElementById('operator').value;
  let secondNumber = parseFloat(document.getElementById('secondNumber').value);
  let sum = 0;

  switch (operator) {
    case '+':
      sum = firstNumber + secondNumber;
      break;
    case '-':
      sum = firstNumber - secondNumber;
      break;
    case '*':
      sum = firstNumber * secondNumber;
      break;
    case '/':
      sum = firstNumber / secondNumber;
      break;
    default:
      return document.getElementById('result').innerHTML = "Invalid Operator Used";
      break;
  }
  document.getElementById('result').innerHTML = `${firstNumber} ${operator} ${secondNumber} = ${sum}`;
};
