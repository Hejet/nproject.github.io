// function logValue(id) {
//   var el = document.getElementById(id);
//   console.log(el.value);
// }

// function getValue(id) {
//   var el = document.getElementById(id);
//   return el.value;
// }

// var firsrNameId = 'first-name';
// var lastNameId = 'last-name';

// logValue(firsrNameId);
// logValue(lastNameId);

// var value = getValue(lastNameId);

// window.alert(value);

// addErrorClass ('last-name');

// Выполнить функцию прямо сейчас
// addErrorClassAllInputs();

// Отсрочить выполнение функции
// window.setTimeout(addErrorClassToAllInputs, 2000);

// function addErrorClass(elementID) {
//   var fistName = document.getElementById('first-name');
//   var lastName = document.getElementById('lastst-name');
//   var address = document.getElementById('address');
// }

// function addErrorClass(elementId) {
//   var element = document.getElementById(elementId);
//   element.className = 'error-input';
// }

// function addErrorClassToAllInputs() {
//   addErrorClass('first-name');
//   addErrorClass('last-name');
//   addErrorClass('address');
// }

// ! События

var sendButton = document.getElementById('button');

sendButton.addEventListener('click', addErrorClassToAllInputs);

// IMAGE
var imageButtonVanja = document.getElementById('button-img-vanja');
var imageButtonMama = document.getElementById('button-img-mama');
var imageButtonPapa = document.getElementById('button-img-papa');
var imageButtonGrmAnja = document.getElementById('button-img-grmAnja');
var imageButtonCat = document.getElementById('button-img-cat');


function changeImageButtonVanja() {
	var imageEl = document.getElementById('avatar');
		// imageEl.src ='https://scandinews.fi/assets/image-cache/images/2015/4/0/1-0.246.2ee62299.jpg';
		imageEl.src ='./img/AveIvan.jpg';
		imageEl.title = 'Ваня!';
}
function changeImageButtonMama() {
	var imageEl = document.getElementById('avatar');
		imageEl.src ='./img/mama.jpg';
		imageEl.title = 'МАМА!';
}
function changeImageButtonPapa() {
	var imageEl = document.getElementById('avatar');
		imageEl.src ='./img/papa.jpg';
		imageEl.title = 'ПАПА!';
}
function changeImageButtonGrmAnja() {
	var imageEl = document.getElementById('avatar');
		imageEl.src ='./img/grandmotherAnja.jpg';
		imageEl.title = 'Бабушка Аня!';
}
function changeImageButtonCat() {
	var imageEl = document.getElementById('avatar');
		imageEl.src ='https://scandinews.fi/assets/image-cache/images/2015/4/0/1-0.246.2ee62299.jpg';
		imageEl.title = 'КОТ!';
}
imageButtonVanja.addEventListener ('click', changeImageButtonVanja);
imageButtonMama.addEventListener ('click', changeImageButtonMama);
imageButtonPapa.addEventListener ('click', changeImageButtonPapa);
imageButtonGrmAnja.addEventListener ('click', changeImageButtonGrmAnja);
imageButtonCat.addEventListener ('click', changeImageButtonCat);

