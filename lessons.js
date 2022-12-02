// let userInfo = {
//     name: 'Vasy',
//     age: 30,
//     childrens: ['tony','Mark'],
//     cars: {
//         first: 'ferrary',
//         second: 'Bugatty'
//     },
//     houses: {
//         land1:['village1','village2']
//     }
// };

// console.log(userInfo);
// console.log(userInfo.childrens[1]);
// console.log(userInfo.cars.first);
// console.log(userInfo.houses.land1[1]);

//передаём имя

// let firstPart = 'likes';

// let userInfo = {
//     name: 'Vasy',
//     age: 30,
//     [firstPart]: 'netrue',
// };

// userInfo.name = 'Lena';

// delete userInfo.name;
// console.log(userInfo.age);

// console.log(userInfo);

// userInfo.cars = 'bmw';
// userInfo.adress = {
//     first: '1',
//     second: '2'
// };
// console.log(userInfo[firstPart]);

//Преимущество квадратных скобок
// delete userInfo.adress;

// let key = 'name';
// console.log(userInfo[key]);

// let user = {
//     name: 'John',
//     age: 30
// }

// let key = 'name';

// console.log(user[key]);

// let user = {
//   name: "John",
//   sername: "Smith",
// };

// user.name = "Pete";

// delete user.name;

// console.log(user);

// let obj = {
// name: 'John',
// age: 31
// }

// for( let i = 0; i<3; i++){
//     console.log(obj);
// }

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   };

//   let sum = 0;
//   for (let key in salaries) {
//     sum += salaries[key];
//   }

//   console.log(sum);

// до вызова функции
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

//   multiplyNumeric(menu);

//   // после вызова функции
//   menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
//   };

// let number = 1;

// for (let i = 0; i < 1; i++) {
//   if (number === 2) {
//     console.log("Sup");
//   } else {
//     i--;
//     console.log("No sup");
//   }
// }

// const funk = (a,b) =>{
//     result = a + b;
//     return  result;
// }
// console.log(funk(1,2));

// const temp = [0,4,4,6,8,10,6,4,3,-1,-2,-2];
// // F = C*1.8 = 32

// const z = [

// ];

// let tF = temp.map(item => {
// console.log(item);
// return 10 + item * 1.8;
// });

// console.log(tF);

// let mass = [1,{},'Three'];
// let arr = [];

// let collFunction = mass.map(index =>{
// let result = index  ;
// return result;
// });

// console.log(collFunction);

// a = [1, 2, 3];
// b = [];

// for (let i = 0; i < a.length; i++) {
//   b[i] = a[i] + ' That is the number';
// }
// // console.log(a);
// // console.log(b);



// let c = a.map(a => {
//     return a;
// });

// console.log(c);


let newStak = [];

newStak.push('1');
newStak.push('2');

newStak.pop();

console.log(newStak);