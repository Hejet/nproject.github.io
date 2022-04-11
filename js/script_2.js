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



// ! Форма заполнения данных, с применением изменения классов

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

// ! События

var sendButton = document.getElementById('button');

sendButton.addEventListener('click', addErrorClassToAllInputs);

// Выполнить функцию прямо сейчас
// addErrorClassAllInputs();

// Отсрочить выполнение функции
// window.setTimeout(addErrorClassToAllInputs, 2000);

// IMAGE
var imageButtonVanja = document.getElementById('button-img-vanja');
var imageButtonMama = document.getElementById('button-img-mama');
var imageButtonPapa = document.getElementById('button-img-papa');
var imageButtonGrmAnja = document.getElementById('button-img-grmAnja');
var imageButtonDed = document.getElementById('button-img-ded');
var imageButtonBabaDed = document.getElementById('button-img-babaDed');
var imageButtonCat = document.getElementById('button-img-cat');
var imageButtonRandom = document.getElementById('button-img-random');


function changeImageButtonVanja() {
    var imageEl = document.getElementById('avatar');
    // imageEl.src ='https://scandinews.fi/assets/image-cache/images/2015/4/0/1-0.246.2ee62299.jpg';
    imageEl.src = './img/foto_01/AveIvan.jpg';
    imageEl.title = 'Ваня!';
}
function changeImageButtonMama() {
    var imageEl = document.getElementById('avatar');
    imageEl.src = './img/foto_01/mama.jpg';
    imageEl.title = 'МАМА!';
}
function changeImageButtonPapa() {
    var imageEl = document.getElementById('avatar');
    imageEl.src = './img/foto_01/papa.jpg';
    imageEl.title = 'ПАПА!';
}
function changeImageButtonGrmAnja() {
    var imageEl = document.getElementById('avatar');
    imageEl.src = './img/foto_01/grandmotherAnja.jpg';
    imageEl.title = 'Бабушка Аня!';
}
function changeImageButtonDed() {
    var imageEl = document.getElementById('avatar');
    imageEl.src = './img/foto_01/Ded.jpg';
    imageEl.title = 'Дед!';
}
function changeImageButtonBabaDed() {
    var imageEl = document.getElementById('avatar');
    imageEl.src = './img/foto_01/babaDed.jpg';
    imageEl.title = 'Дед!';
}
function changeImageButtonCat() {
    var imageEl = document.getElementById('avatar');
    imageEl.src = 'https://scandinews.fi/assets/image-cache/images/2015/4/0/1-0.246.2ee62299.jpg';
    imageEl.title = 'КОТ!';
}
function changeImageButtonRandom() {
    var imageEl = document.getElementById('avatar');
    imageEl.src = 'https://picsum.photos/640/480';
    imageEl.title = 'Довільна картинка від генератора!';
}
imageButtonVanja.addEventListener('click', changeImageButtonVanja);
imageButtonMama.addEventListener('click', changeImageButtonMama);
imageButtonPapa.addEventListener('click', changeImageButtonPapa);
imageButtonGrmAnja.addEventListener('click', changeImageButtonGrmAnja);
imageButtonDed.addEventListener('click', changeImageButtonDed);
imageButtonBabaDed.addEventListener('click', changeImageButtonBabaDed);
imageButtonCat.addEventListener('click', changeImageButtonCat);
imageButtonRandom.addEventListener('click', changeImageButtonRandom);
