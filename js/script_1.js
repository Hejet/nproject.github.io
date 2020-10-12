// 'use strict';

function alertValue(elementParameter) {
  // console.log(elementParameter.value);
  // console.log(elementParameter.className);
}

function getEl(id) {
  console.log('sombody get el by id');
  var el = document.getElementById(id);
  return el;
}

var firstNameId = 'first-name';
var firstNameEl = firstNameId;
alertValue(firstNameEl);

var lastNameId = 'last-name';
var lastNameEl = getEl(lastNameId);
alertValue(lastNameEl);

var addressId = 'address';
var addressEl = getEl(addressId);
alertValue(addressEl);

var citiesId = 'cities';
var citiesEl = getEl(citiesId);
alertValue(citiesEl);

var hobbiesId = 'hobbies';
var hobbiesEl = getEl(hobbiesId);
alertValue(hobbiesEl);

var avatarWrapperId = 'avatar__wrapper';
var avatarWrapperEl = getEl(avatarWrapperId);
alertValue(avatarWrapperEl);

var avatarId = 'avatar';
var avatarEl = getEl(avatarId);
alertValue(avatarEl);

firstNameEl.value = 'Андрей';
// window.alert(firstNameEl.value);

// ! в разметке инспектора изменения не будет видно!!!
lastNameEl.value = 'Петров';

//  ? в разметке изменения будет видно!!!
addressEl.setAttribute('value', 'Хер-сити');

// изменяем класс тега
// window.alert(lastNameEl.className);
// lastNameEl.className = 'last-name default-input error-input';
lastNameEl.title = 'Ошибочная Фамилия';
// window.alert(lastNameEl.className);

citiesEl.value = 'Минск';
hobbiesEl.value = 'i have not interesting';

avatarWrapperEl.innerHTML = '<ul id="list"><li>1</li><li>2</li></ul>';

// var numberListId = 'list';
var numberList = document.getElementById('list');

window.alert(numberList.innerHTML);
