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
    
const mass = [-1, 2, 3, -5];

mass.map((item,index)=>{
  console.log(item,index);
});

// методы массивов 
// собирать вопросы
// структуры данных стек . очередь