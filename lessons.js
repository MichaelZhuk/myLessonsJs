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

