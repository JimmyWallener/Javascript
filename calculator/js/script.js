function calculator() {
  // Hämtar värdena från ID och konverterar till float
  let firstNumber = parseFloat(document.getElementById('firstNumber').value);
  let secondNumber = parseFloat(document.getElementById('secondNumber').value);
  // Hämtar ID värde för matematiska operatörer
  let operator = document.getElementById('operator').value;
  // Definierar variabel sum till 0
  var sum = 0;
  // Skapar en switch för beräkningen
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
  }
  // Returnerar totalvärdet av resultatet till hemsidan
  document.getElementById('result').innerHTML = `${firstNumber} ${operator} ${secondNumber} = ${sum}`
}
// Gör en enkel refreshare för att kunna skriva in igen. 
// då sidan är liten, laddas den snabbt. 
// Dock fungerar inte refresharen i codepen, men i live version på webserver
// Annars kan man göra en document. anrop och sätta värdet till ''
function refreshPage() {
  window.location.reload();
} 