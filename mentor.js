
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

let mass = [1,1,2,3,'Nana','Nana', 5,5];
let mass2 = [];
let massSortSame = [...new Set(mass)];

console.log(massSortSame);

for ( let i = 0; i < mass.length; i++){
    if('string' === typeof mass[i]) {
       console.log( mass2[i] = mass[i])
    } 
    
    
}


