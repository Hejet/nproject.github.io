function addErrorClass(elementID) {
  var fistName = document.getElementById('first-name');
  var lastName = document.getElementById('lastst-name');
  var address = document.getElementById('address');
}

function addErrorClass(elementId) {
  var element = document.getElementById(elementId);
  element.className = 'error-input';
}

function addErrorClassToAllInputs() {
  addErrorClass('first-name');
  addErrorClass('last-name');
  addErrorClass('address');
}

// addErrorClass ('last-name');

// Выполнить функцию прямо сейчас
// addErrorClassAllInputs();

// Отсрочить выполнение функции
// window.setTimeout(addErrorClassToAllInputs, 2000);

// события

var sendButton = document.getElementById('button');

sendButton.addEventListener('click', addErrorClassToAllInputs);

// IMAGE

// avatarEl.src =
//   'https://scandinews.fi/assets/image-cache/images/2015/4/0/1-0.246.2ee62299.jpg';

// avatarEl.title = 'Теперь я Кот!';

var buttonPlus = document.getElementById('buttonPlus');
var buttonMinus = document.getElementById('buttonMinus');
var buttonMultyply = document.getElementById('buttonMultyply');
var buttonDevide = document.getElementById('buttonDevide');

function onButtonClickPlus() {
  var input1 = document.getElementById('number1');
  var input2 = document.getElementById('number2');
  var number1 = input1.value;
  var number2 = input2.value;
  var summ = Number(number1) + Number(number2);
  console.log(summ);
}
function onButtonClickMinus() {
  var input1 = document.getElementById('number1');
  var input2 = document.getElementById('number2');
  var number1 = input1.value;
  var number2 = input2.value;
  var summ = Number(number1) - Number(number2);
  console.log(summ);
}
function onButtonClickMyltyply() {
  var input1 = document.getElementById('number1');
  var input2 = document.getElementById('number2');
  var number1 = input1.value;
  var number2 = input2.value;
  var summ = Number(number1) * Number(number2);
  console.log(summ);
}
function onButtonClickDevide() {
  var input1 = document.getElementById('number1');
  var input2 = document.getElementById('number2');
  var number1 = input1.value;
  var number2 = input2.value;
  var summ = Number(number1) / Number(number2);
  console.log(summ);
}

// onButtonClick(buttonPlus);
// onButtonClick(buttonMinus);
// onButtonClick(buttonMultyply);
// onButtonClick(buttonDevide);

buttonPlus.addEventListener('click', onButtonClickPlus);
buttonMinus.addEventListener('click', onButtonClickMinus);
buttonMultyply.addEventListener('click', onButtonClickMyltyply);
buttonDevide.addEventListener('click', onButtonClickDevide);
