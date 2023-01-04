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

// передаём имя

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

// Преимущество квадратных скобок
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

// let array = [1, { name: "John", age: 31 }, -1, [], ""];
// let emptyArray = [];

// let arrayFilter = array.filter((index) => {
//   if (index < 0) {
//     return index;
//   }
// });
// console.log(arrayFilter);
// let arrayMap = array.map((index) => {
//   return (emptyArray = index);
// });
// console.log(arrayMap);
// let getEmptyArray = () => {
//   for (let i = 0; i < array.length; i++) {
//     emptyArray[i] = array[i];
//   }
//   return emptyArray;
// };
// console.log(getEmptyArray());
// let changeArray = array.map((intem) => {
//   if(intem > 0 && intem !== 'string'){
//     return intem;
//   }
// });
// console.log(changeArray);

// function sayHello(name) {
//   return 'Привет, '  + name;
// }

// console.log(sayHello('Aynjy'));

// const getNumber = (number,numGenerate) =>{
//   let zero = 0;
//   let result = '';
//   for(let i = 0; i < numGenerate;i++){
//    result +=  zero +=number
//     if(numGenerate-1 > i){
//       result += '---';
//     }
//   }
//   if(typeof(numGenerate) !== 'number' ||  numGenerate <=0){
//     return number;
//   }

//   return  result;
// }

// console.log(getNumber(5,3));

// const num = 'Some Fruts';

// console.log(num.slice(5,10));

// const newObject = {
//   property: 'a',
//   local: [1,2,3],
//   addict: {},
//   name: 'we dont now'
// }

// const doneObject = (change) => {
//   if(change){

//    console.log(newObject.name);
//   }
// };
// doneObject(newObject.property);

// function calculateVolumeAndArea(length) {
//   if (typeof length !== "number" || length < 0 || !Number.isInteger(length)) {
//     return "При вычислении произошла ошибка";
//   }

//   let volume = 0,
//     area = 0;

//   volume = length * length * length;

//   area = 6 * (length * length);

//   return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
// }

// console.log(calculateVolumeAndArea(3));

// string
// number
// Boolean
// Object
// null
// undefined
// BigInt
// Symbol

// умножить длинну широту и высоту

// function getCoupeNumber(seatNumber) {
//   if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
//       return "Ошибка. Проверьте правильность введенного номера места";
//   }

//   if (seatNumber === 0 || seatNumber > 36) {
//       return "Таких мест в вагоне не существует";
//   }

//   return Math.ceil(seatNumber / 4);

// }

// console.log (getCoupeNumber(7));

// // const numB = 2.5;

// // console.log(!Number.isInteger(numB));

// const objPerson = {
//   name: 'Alex',
//   age: 150,
//   childrens:['Vadim','Aleh'],
//   status: 'm'
// }

// const statusOfPerson = () => {
//   if(objPerson.status !== 'married'){
//     objPerson.childrens = [];
//     return objPerson.childrens
//   }
//   return objPerson.status;
// };
// statusOfPerson()

// console.log(objPerson);

// const fibAna = (arg) => {
//   let result = "";
//   let first = 0;
//   let second = 1;

//   for (let i = 0; i < arg; i++) {
//     if (i + 1 === arg) {
//       result += `${first}`;
//     } else {
//       result += `${first} `;
//     }

//     let third = first + second;
//     first = second;
//     second = third;
//   }
//   return result;
// };

// console.log(fibAna(1));

// const trany = (arg) => {
//   let first = 0;
//   let second = 1;
//   let result = "";
//   for (let i = 0; i < arg; i++) {
//     result += `${first} `;

//     let third = first + second;
//     first = second;
//     second = third;
//   }
//   return result;
// };

// console.log(trany(100));

// const options = {
//   name: "test",
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: "black",
//     bg: "red",
//   },
//   makeTest: () => {
//     console.log("testnetest");
//   },
// };

// options.makeTest();
// console.log(Object.keys(options).length);
// const { border, bg } = options.colors; // деструктуризация
// console.log(border, bg);

// delete options.name;
// console.log(options);

// let cuonter = 0;
// for (let key in options) {
//   if (typeof options[key] === "object") {
//     for (let i in options[key]) {
//       console.log(`свойство ${i} параметр ${options[key][i]}`);
//     }
//   } else {
//     console.log(`свойство ${key} параметр ${options[key]}`);
//     cuonter++;
//   }
// }
// console.log(cuonter);

// for(let i = 0; i < arr.length; i++){
//   console.log(arr[i]);
// }

// for (let value of arr){
//   console.log(value);
// }

// const arrObj = {
//   a:[5,6,7,8,9]
// };

// const copObj = (arrObj) => {
//   let copyOfArrObj = {};
//   let i;
//   for(i in arrObj){
//     copyOfArrObj[i] = arrObj[i];
//   }
//   return copyOfArrObj;
// };

// console.log(copObj(arrObj));

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     }
// };

// const showExp = (personalPlanPeter) => {

//     let exp = personalPlanPeter.skills.exp;
//     return exp;
// };

// console.log(showExp());

// const new2 = {
// name : {
//     first: 'Body',
//     second: 'Rafic',
// },
// action: ()=>{
//     return `time for ${new2.name.first}`;
// }
// }

// console.log(new2.action());

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//       languages: ["ru", "eng"],
//       programmingLangs: {
//         js: "20%",
//         php: "10%",
//         python: '30%'
//       },
//       exp: "1 month",
//     },
//     action: () => {
//       let result = '';
//       for (const key in personalPlanPeter.skills.programmingLangs) {
//         result += `Язык ${key} изучен на ${personalPlanPeter.skills.programmingLangs[key]} \n` ;
//       };
//       console.log(result);
//     }
//   };
//  personalPlanPeter.action();

//  const someObj = {
//   properti1: ['K','a','P'] ,
//   property2: {
//     a: '1',
//     b: '2',
//     c: '3',

//   },
//   action: () => {
//     let result = '';
//     for (const key in someObj.property2) {
//      result += ` chanje${key}  ${someObj.property2[key] } \n`;
//     }
//     console.log(result);
//   }
// };
// someObj.action();

const family = ["Peter", "Ann", "Alex", "Linda"];

function showFamily(arr) {
  if (family.length !== 0) {
    for (let index = 0; index < family.length; index++) {
      let arr = '';
      arr += family[index];
    }
    console.log(` Семья состоит из ${arr}`);
  } else {
    console.log("Пустая строка");
  }
}

showFamily(family);
