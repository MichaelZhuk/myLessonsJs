// . Найти максимум в массиве

// .найти число которое чаще всего встречается в массиве

// .найти среднее арифметическое и переписать числа больше него в другой массив

// объект из трех полей
// имя
// фамилия
// возраст

// сделать массив из объектов и научиться обращаться к полям объекта

// сделать функцию вывода конкретного поля объекта

// человек как обьект
// сделать максимально юольшим обьектом и Массивыпопробовать пообращаться к каждому элементу .
// Гдето через точку гдето через переменную, скобки

// let obj = {
//   name: {
//     name1:'1',
//     name2:'2',
//     name3:{ }
//    },
//   surname: "Bony",
//   age: [12,13,14,15],
// };

// let arr = [obj, obj];

// // console.log(arr[1].name);

// const newNAme = "age";

// // console.log(arr[1][newNAme]);

// const showObjectKey = (indexArr, objKey) => {
//   return arr[indexArr][objKey];
// };

// console.log(showObjectKey(1, "age"));

// let mass = [1,8,3,4,5,6,7];

// let maxNumber = 1000;
// for(let i  = 0; i < mass.length; i++ ){
//   if(mass[i] < maxNumber){
//     maxNumber = mass[i];
//   }

// }
// console.log(maxNumber);

// for (let arrMass of mass){
//     console.log(arrMass);
// }

//// mass.entries();

//// console.log( Array.from(mass.entries().filter (i =>  i[1] == 'Nana')));

// let mass = [1,1,2,3,'Nana','Nana', 5,5];
// let mass2 = [];
// let massSortSame = [...new Set(mass)];

// console.log(massSortSame);

// for ( let i = 0; i < mass.length; i++){
//     if('string' === typeof mass[i]) {
//        console.log( mass2[i] = mass[i])
//     }

// }

// console.log(funkCulc());

// let mass = [1, 1, 2, 3, "Nana", "Nana", 5, 5];

// const set = new Set(mass);

// const duplicates = mass.filter(item => {
//     if (set.has(item)) {
//         set.delete(item);
//     } else {
//         return item;
//     }
// });

// console.log(duplicates);

// const mass = [1, 1, 2, 3, "Nana", "Nana", 5, 5];

// const result = mass.indexOf("Nana");

// if (result !== -1) {
//   console.log(mass[result]);
// }

// let num = (a) => {
//   return +a;
// };
// console.log(num("11"));

// const toNamber = parseInt("12");
// console.log(toNamber);

// const mass = [1, 1, 2, 3, "Nana", "Nana", 5, 5];

// let funkCulc = () => {
//   for (let i = 0; i < mass.length; i++) {
//     return mass[i];
//   }
// };

// console.log(funkCulc());

// let str = "1234";

// const changeType = () => {
//   let num = Number(str);
//   return num;
// };

// console.log(changeType());

// const funkProgram = (integer, limit) => {
//  if (integer % limit ){
//     return  integer + limit  ;
//  }

// };

// console.log( funkProgram(2,4));

// function multiplesOf(integer) {
//    var multiples = numbers[0];

//    for (var i = 0; i < integer.length; i++) {
//      if (numbers[i] % multiples === 0) {
//        multiples = numbers[i];
//      }
//    }

//    return multiples;
//  }

//  console.log(multiplesOf([4, 5, 6, 7, 8], 2));

// function multiplesOf(integer, limit) {
//    let multiples = []

//    for (var i = 0; i < integer.length; i++) {
//      if (integer[i] % limit === 0) {
//        multiples.push(integer[i]);
//      }
//    }

//    return multiples;
//  }

//  console.log(multiplesOf([2, 4, 5, 6, 7], 2));

// let arrEl = [-1, 2, 3, 4, 5];

// const fInvert = (arrEl) => {
//   for (let i = 0; i < arrEl.length; i++) {
//     arrEl[i] = arrEl[i] * -1;
//   }
//   return arrEl;
// };

// console.log(fInvert(arrEl));

// const list = [1,2,3,156,-1];

// const min = list => {
// return Math.min(...list);
// };

// const max = list => {
//   return Math.max(...list);
// };

// console.log(min(list), max(list));

// let mass = [1,8,3,4,5,6,7];

// let maxNumber = 1000;

// for(let i  = 0; i < mass.length; i++ ){
//   if(mass[i] < maxNumber){
//     maxNumber = mass[i];
//   }

// }
// console.log(maxNumber);

// const massMax = [1, 8, 3, 4, 5, 6, -7, 100];

// let maxNumber = -1000;

// const funkMax = () => {
//   for (let i = 0; i < massMax.length; i++) {
//     if (massMax[i] > maxNumber) {
//       maxNumber = massMax[i];
//     }
//   }
//   return maxNumber;
// };
// console.log(funkMax(maxNumber) + ' Наибольшее число в массиве');

// const massMin = [-1, 2, 4, -50];

// let minNumber = 1000;

// const funkMin = () =>{
// for (let i = 0; i < massMin.length; i++) {
//   if (massMin[i] < minNumber) {
//     minNumber = massMin[i];
//   }
// }
// return minNumber;
// };
// console.log(funkMin(minNumber) + ' Меньшее число в массиве');

// function multiplesOf(integer, limit) {
//      let multiples = []

//      for (var i = 0; i < integer.length; i++) {
//        if (integer[i] % limit === 0) {
//          multiples.push(integer[i]);
//        }
//      }

//      return multiples;
//    }

//    console.log(multiplesOf([2, 4, 5, 6, 7], 2));

// const mass = [1,2,3];

// const funk = () => {
//   let result = [];
//   for (let i = 0; i < mass.length; i++){
//     result[i] = mass[i];
//   }
//   return result;
// }

// console.log(funk());

// for (let i = 0; i < mass.length; i++) {
//   if (mass[i] < 0) {
//     console.log(mass[i]);
//   }
// }

// const mass = [-1, 2, 3, -5];

// mass.map((item,index)=>{
//   console.log(item,index);
// });

// let arrayNumbers = [1, 2, 3, -10, 0, 4, 5 - 8];
// let arrayDooble = [];

// for (let i = 0; i < arrayNumbers.length; i++) {
//   if (arrayNumbers[i] > 0) {
//     arrayDooble[i] = arrayNumbers[i];
//   }
// }

// let filTer = arrayNumbers.filter(cur => cur > 0);

// console.log(filTer);

// let ar = [1, 2, 3, -4];
// let newAr = [];

// ar.push(4, 5, "Sobaca");

// newAr = ar.map((ar) => {
//   return ar + 1;
// });

// newAr = newAr.filter((newAr) => {
//   return newAr < 0;
// });

// console.log(newAr);

// методы массивов
// собирать вопросы
// структуры данных стек . очередь

// добавить ssh ключ

// let arr = [1, -1, +1];
// arr.push("and1");
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.unshift("11");
// console.log(arr);
// delete arr[0];
// console.log(arr);

// let arr2 = arr.map((item) => {
//   return item + 1;
// });

// console.log(arr2);

// let arr3 = arr.filter((item) => {
//   return item > 0;
// });

// console.log(arr3);

// function flatten(...stak){
//   const result = [];
//   while(stak.length){
//     const el = stak.shift();
//     if(Array.isArray(el)){
//       stak.unshift(...el);
//       continue;
//     }
//     result.push(el);
//   }
//   return result;
// }

// console.log(flatten(1,2,[3,4],5,[6,7,8]));

// let f = ( a) =>{
// return a;
// }

// console.log(f('Something'));

// let arr = ['old1','old2','old3'];

// for (let i = 0; i < arr.length; i++){
// arr.shift();
// arr.push('newEl');
// console.log(arr);
// }

// let currentD = 41;
// let currentE = 41.5;
// let discont = 0.9;

// let fCalc = (value, value2) => {
//   return value * value2;
// };

// function promoution() {
//   return fCalc(currentD, currentE) * discont;
// }

// console.log(promoution());

// let f = ( ) => {
//   for(let i = 0; i < 5; i++){
//     console.log(i);
//     if(i === 3) return;
//   }
//   console.log('Done');
// }

// f();

// function doNothing(){

// };

// console.log(doNothing() === undefined);

// console.log('1');

// let sayHellow = name => 'Hello ' + name;

// console.log(sayHellow('Ivan'));
// console.log(sayHellow('NeIvan'));

// let array = [];

// function returnNeighboringNumbers(arg) {
//   for (let i = 0; i < 3; i++) {
//     array[0] = arg - 1;
//     array[1] = arg;
//     array[2] = arg + 1;
//   }
//   return array;
// }

// console.log(returnNeighboringNumbers(10));

// function getMathResult(firstNumber,secondNumber) {
// let i = 0;
// let quantity = secondNumber;
// while (i < quantity){
//   firstNumber *= secondNumber;
//   i++;
// }
//  return firstNumber;
// };

// console.log(getMathResult(5,2));

// let number1 = 3;
// let number2 = 2;
// let array = [];
// let i = 0;

// while ( i < number2){
//   number1 += number1;
//   i++;
//   console.log(number1);
// }

// let array = [];

// const calcProgression = (a, b) => {
//   for (let i = 0; i < b; i += a) {
//     result = array[i] = a *= b;
//   }
//   return result;
// };
// console.log(calcProgression(5, 2));

// const getTime = (min) => {
//   let result = "";
//   let temp;
//   temp = Math.floor(min / 60);
//   if (temp < 5) {
//     result = `${temp} часа`;
//   } else if (temp === 0) {
//     result = `${temp}  часов`;
//   } else {
//     result = `${temp} час`;
//   }

//   temp = min % 60;

//   if (temp === 1) {
//     result += ` ${temp}  минута`;
//   } else {
//     result += ` ${temp} минут`;
//   }

//   return result;
// };

// console.log(getTime(230));

// const giveBiggestNumber = (a,b,c,d) => {
//    let result;
//    if(typeof(a) !== 'number' ||
//    typeof(b) !== 'number' ||
//    typeof(c) !== 'number' ||
//    typeof(d) !== 'number' ){
//       return 'Put othen value';
//    }
//     else if(a > b && a > c && a > d){
//       result = a;
//    } else if(b > a && b > c && b > d){
//       result = b;
//    } else if(c > a && c > b && c > d){
//       result = c;
//    } else {
//       result = d;
//    }

//    return `${result} Biggest number` ;
// };

// console.log(giveBiggestNumber(100,200,50));

// const otherGetMaxAtribute = (a, b, c, d) => {
//   let result;
//   if (
//     typeof a !== "number" ||
//     typeof a !== "number" ||
//     typeof a !== "number" ||
//     typeof a !== "number"
//   ) {
//     return "Put the other value";
//   }
//   result = Math.max(a, b, c, d);
//   return result;
// };

// console.log(otherGetMaxAtribute( '2' , 300, 4));

// function fib(num) {
//   if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//       return "";
//   }

//   let result = '';
//   let first = 0;
//   let second = 1;

//   for (let i = 0; i < num; i++) {
//       if (i + 1 === num) {
//           result += `${first} `;

//       } else {
//           result += `${first} `;
//       }

//       let third = first + second;
//       first = second;
//       second = third;
//   }

//   return result;
// }

// console.log(fib(5));

// let sum = 21;
// let num = '21';

// console.log(typeof(num) !== typeof(sum));

// console.log(`${sum} wo sup`);

// const nameKal = (name, Kal) => {
//     console.log(`I like ${name}`);
//     Kal();
// };

// nameKal('Gavno',() => {
//     console.log('You like gavno!');
//     setTimeout(()=>{
//         console.log('Otsosi');
//     },2000);
// });

// const f1 = ( b) => {

//     b();
//     console.log(b);
// }

// f1( () =>{
//     console.log('Woooo sup!' );
// });

// let name = 'Stas';

// let name2 = name;
// name = 'Micola';

// console.log(name);

// let age = 25;
// age = 15;
// console.log(age);

// const randArray = ['first','Second','Third','Fifth'];

// const group2 = randArray.slice();

// group2[0] = 'ne f';
// let group3 = randArray.slice(3);
// console.log(randArray);
// console.log(group2);
// console.log(group3);

// const person = {
//     name: 'Petro',
//     age: 15
// }

// const fireMan = Object.assign(person,{age:30, name: 'Ne Pedro'});

// console.log(fireMan);

// const worker = {...person};

// worker.name = 'Ne';

// console.log(worker);

// const personalPlanPeter = {
//   name: "Peter",
//   age: "29",
//   skills: {
//     languages: ["ru", "eng"],
//     programmingLangs: {
//       js: "20%",
//       php: "10%",
//     },
//     exp: "1 month",
//   },
// };

// const showExspirience = (personalPlanPeter) => {
//   if (personalPlanPeter.skills.exp) {
//     return personalPlanPeter.skills.exp;
//   }
//   return (personalPlanPeter.skills.exp = "2 month");
// };

// console.log(showExspirience(personalPlanPeter));

// console.log(personalPlanPeter.skills.exp);

// ? 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.
// ? Пример:
// ? showProgrammingLangs(personalPlanPeter)  =>
// ? "Язык js изучен на 20% Язык php изучен на 10%"
// * Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.
// ! P.S. Для переноса строки используется \n в конце строки.

const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ["ru", "eng"],
    programmingLangs: {
      js: "20%",
      php: "10%",
      
    },
    exp: "1 month",
  },
 
};

const showExspirience = (personalPlanPeter, lang, proc) => {
  let result;
  let newArg;
  if (lang) {
    newArg = `Язык ${lang} , изучен на ${proc}`;
    result = personalPlanPeter.skills.programmingLangs = newArg;
    return result;
  }
  return "Empty string";
};


showExspirience(personalPlanPeter, );

console.log(personalPlanPeter.skills.programmingLangs);

