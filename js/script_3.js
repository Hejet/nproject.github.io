// ! Калькулятор

// ? Найти элементы по ID, после создать массив

// var buttonPlus = document.getElementById('buttonPlus');
// var buttonMinus = document.getElementById('buttonMinus');
// var buttonMultyply = document.getElementById('buttonMultyply');
// var buttonDevide = document.getElementById('buttonDevide');

// var operationButons = [buttonPlus, buttonMinus, buttonMultyply, buttonDevide];

//  ? Найти элементы по Классу (Нужно что бы у них был одинаковый класс)

var operationButons = document.getElementsByClassName('operation-button');

var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');
	

function makeOperation(operationCode) {
	
	var number1 = Number(input1.value)
	var number2 = Number(input2.value)
	
	if (operationCode === '+'){
		var result = Number(input1.value) + Number(input2.value);
	}
	else if (operationCode === '-'){
		var result = Number(input1.value) - Number(input2.value);
	} else if(operationCode === '*'){
		var result = Number(input1.value) * Number(input2.value);
	} else if (operationCode === '/'){
		var result = Number(input1.value) / Number(input2.value);
	} else {
		window.alert('operation is uncnown')
	}
	window.alert("Ваш ответ: " + result)
}

function onOperationButtonClick(elementObject) {
	var clickedElement = elementObject.currentTarget;
	var operation = clickedElement.innerHTML;
	makeOperation(operation)
}

for (var i = 0; i < operationButons.length; i++) {
	var button = operationButons [i];
	button.addEventListener('click', onOperationButtonClick)
}