let display = document.getElementById('display');

function addNumber(input) {
  display.innerHTML += input;
}

function calculate() {
  let result = eval(display.innerHTML);
  display.innerHTML = result;
}

function erase() {
  display.innerHTML = '';
}
