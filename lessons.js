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

// let newStak = [12,'23'];

// newStak.push('1');
// newStak.push('2');
// newStak.shift();
// newStak.pop();
// console.log(newStak);

//

// function pow(x, n) {
//     for (let i = 0; i < 10; i++) {
//     }
//     let result = x *= n;

//     return result;
//   }

//   console.log(pow(5,2));

// const getMassive = (a,b) => {
//     const array = [];
//     let result = 0;
//     let str = '';
//     for(let i = 0; i <= b; i++){
//         result += a;
//         array[i] = result;
//     }
//     array.map((value,index) => {
//         str += value;
//         if(index !== b){
//             str += '---';

//         }
//     });

//     return  str;
// };

// console.log(getMassive(5,2));

// const task = (a, b) => {
//   let result = "";
//   let temp = 0;
//   for (let i = 0; i <= b; i++) {
//     result += temp += a;
//     if (b > i) {
//       result += "---";
//     }
//   }
//   return result;
// };

// console.log(task(3, 6));

// первый раздел
// вопросы

// function getMathResult(num, times) {
//   if (typeof(times) !== 'number' || times <= 0) {
//       return num;
//   }

//   let str = '';

//   for (let i = 1; i <= times; i++) {
//       if (i === times) {
//           str += `${num * i}`;
//           // Тут без черточек в конце
//       } else {
//           str += `${num * i}---`;
//           // Это тоже самое, что и
//           // str = str + num * i + "---"
//       }
//   }

//   return str;
// }

// console.log (getMathResult(10, 5));

// let runNumbers = (a, b) => {
//   if (typeof(b) !== "number" || b <= 0) {
//     return a;
//   }
//   let temp = 0;
//   let result = "";
//   for (let i = 0; i < b; i++) {
//     result += temp += a;

//     if (b - 1 > i) {
//       result += "---";
//     }
//   }
//   return result;
// };

// console.log(runNumbers(3, 3));





// const putInType = (a) =>{
//   if (typeof (a) === 'number'){
//     return a % 2 == 0;
//   } else {
//     return console.log('NoT a number');
//   }

// };

// console.log(putInType(4));




// const array = [1,2,3,-4];




// let filtArray = array.filter((intem) =>{
//   if(intem > 0){
//     return intem;
//   }
// });

// console.log(filtArray);




