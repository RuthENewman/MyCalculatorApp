window.onload=function() {

  const clearButton = document.querySelector('#clear')
  const numbers = document.querySelectorAll('.number');
  const operators = document.querySelectorAll('.operator');
  const backspaceButton = document.querySelector('#backspace');
  const equals = document.querySelector('#equals');
  const seven = document.querySelector('#seven');

  document.querySelector('.clearButton').addEventListener('click', clearScreen)


  numbers.forEach(number => number.addEventListener('click', function(event) {
      let inputVariable = document.querySelector('.input');
      if (inputVariable.value == '0') {
        inputVariable.value = parseInt(event.target.value)
      }
      else {
        inputVariable.value += parseInt(event.target.value)
      }
  }))

  operators.forEach(operator => operator.addEventListener('click', function(event) {
    let inputVariable = document.querySelector('.input');
    let operand = event.target.value;
    if (operand == "+") {
      inputVariable.value += "+"
      } else if (operand == "-") {
      inputVariable.value += "-"
      } else if (operand == "/"){
      inputVariable.value += "/"
    } else if (operand == "x") {
      inputVariable.value += "*"
    }

    }
  )
)

  function clearScreen() {
    let inputVariable = document.querySelector('.input');
    inputVariable.value = "";
    let answerVariable = document.querySelector('.answer');
    answerVariable.value = "";
  }


  backspaceButton.addEventListener('click', deleteLastInput)

  function deleteLastInput() {
    let inputVariable = document.querySelector('.input');
    let inputValue = inputVariable.value;
    if (inputValue.length > 0) {
      inputValue = inputValue.substring(0, inputValue.length - 1);
      inputVariable.value = inputValue;
    }
  }

  equals.addEventListener('click', compute)

  function compute() {
    let inputVariable = document.querySelector('input');
    result = +eval(inputVariable.value);
    document.querySelector('.answer').value = "= " + result;
  }


  }
