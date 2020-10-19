// ! Свойства и методы строки
// ! Как сделать строку с Первой Заглавной буквой
// const someBody = "several";

// var strFirst = someBody[0].toUpperCase() + someBody.slice(1);
// console.log("Это первый вариант: " + strFirst);

// var bigWorld = someBody.toUpperCase();
// var smallWorld = someBody.toLowerCase();

// console.log('Маленькими буквами: ' + bigWorld);
// console.log('Большими буквами: ' + smallWorld);

// var bigliter = bigWorld[0] + smallWorld.slice(1);
// console.log("Это второй вариант: " + bigliter);

// ? Можно реализовать через функуцию: 

// function ucFirst(str) {
//   if (!str) return str;

//   return str[0].toUpperCase() + str.slice(1);
// }

// console.log( "Это вариант чераз функцию: " + ucFirst("владимир") );
// console.log( "Это вариант чераз функцию - пустая строка: " + ucFirst("") );

//?      
//  let musi = prompt("Какую музыку вы слушаете?",'');

// let nameBlock = {
// 	name: 'Ivan',
// 	familija: 'Petrov',
// 	adress: [],
// 	//musik: musik
// }

//  console.log(nameBlock.name);

//  nameBlock.name = "Viktor";

//  console.log(nameBlock.name);
//  console.log(nameBlock);

//  let n = 5;
//  n = n + 5;
//  console.log(n);
//  n += 10;
//  console.log(n);

// ! - разбираем шаблонные литералы с помощью функции-------
// var person = 'Mike';
// var age = 28;

// function myTag(strings, personExp, ageExp) {
//   var str0 = strings[0]; // "That "
//   var str1 = strings[1]; // " is a "

  // Технически, в конце итогового выражения
  // (в нашем примере) есть ещё одна строка,
  // но она пустая (""), так что пропустим её.
  // var str2 = strings[2];

  // var ageStr;
  // if (ageExp > 99){
  //   ageStr = 'centenarian';
  // } else {
  //   ageStr = 'youngster';
  //  }

  // Мы даже можем вернуть строку, построенную другим шаблонным литералом
// 	 return `${str0}${personExp}${str1}${ageStr}`
// }


// var output = myTag`That ${ person } is a ${ age }`;

// console.log(output); 
// console.log(myTag()); 

//That Mike is a youngster

// !                       
