const family = ["Peter", "Ann", "Alex", "Linda"];

function showFamily(arr) {
  if (family.length !== 0) {
    for (let index = 0; index < family.length; index++) {
      let arr = "";
      arr += family[index];
    }
    console.log (` Семья состоит из ${arr}`);
  } else {
    console.log("Пустая строка");
  }
}

showFamily(family);

const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

function standardizeStrings() {
  for (let index = 0; index < favoriteCities.length; index++) {
    let arr = "";
    arr += favoriteCities[index];
    console.log(arr.toLowerCase());
  }
}

standardizeStrings(favoriteCities);

const someString = 'lol - kek';

const reverse = (someString) => {
  let newString = '';
  for (let index = someString.length -1; index >= 0; index--) {
    newString += someString[index];

  }
  console.log( newString );
};

reverse(someString);

const arr1 = [1, 2, 3, 4, 5, 6, 7];

const reverseArr = (arr) => {
  let result = "";
  for (let index = arr.length - 1; index >= 0; index--) {
    result += arr[index];
  }
  console.log(result);
};
reverseArr(arr);

const a = arr.filter((intem) => {
  return intem > 0 ;
})

console.log(a);

const names = ["djordano", "Ector", "Abdula"];

names.map((intem, index) => {
  names[index] =
    intem[0].toLocaleUpperCase() + intem.slice(1).toLocaleLowerCase();
});

console.log(names);

const names = ["djordano", "Ector", "Abdula",1,2,3,4];
let newArr = [];

for(let i = 0; i < names.length; i++){

   if(typeof(names[i]) === 'number'){
      newArr.push(names[i]);

    }

}

console.log(newArr);



let number = 5;
debugger;

const lognumber = () => {
  console.log(number);
  debugger;
};

number = 6;
lognumber();debugger;


number = 8 ;
lognumber();debugger; 


const cuonterCreate = () => {
    let cuonter = 0;
    const myFunktion = () => {
        cuonter = cuonter + 1;
        return cuonter;
    };
    return myFunktion();
};

const increment = cuonterCreate(); 

console.log(increment()); 



! Замыкание  

function createIncrementor (n) {
    return function (num) {
        return n + num;
    };
}

const adOne = createIncrementor(1);
const addTen = createIncrementor(41);

console.log(addTen(10));
console.log(addTen(42));

function urlGeneration (domain) {
    return function (url){
        return  `https://${url}.${domain}`;
};
}

const comUrl = urlGeneration('com');
const ruUrl = urlGeneration('ru');

console.log(comUrl('Amazon'));
console.log(ruUrl ('Safari'));





const  zamKanie = (argumentOne) => {
    const  zamKanieInside = (argumentTwo) => {
        console.log(argumentOne + argumentTwo);
    };
    return zamKanieInside;
};

const argumentZamkanie = zamKanie('Привет! ');

argumentZamkanie('мальчик');
argumentZamkanie('девочка');
argumentZamkanie('китпэс');




const zamKanie = (argumentOne) => {
    const zamKanieInside = (argumentTwo) => {
        console.log(argumentOne + argumentTwo);
    };
    return zamKanieInside;
};

const change = zamKanie('1');
change('2');





function foo(a,b) {
    const [first] = a;
    const {eng} = b;
 
    return `${first} ${eng}`;
}
 
const result = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'});

console.log(result);



const nameN = 'John', surname = 'Smidth';

const user = {
    name: 'Alex',
    age: 25
};
const {name, age} = user;



(50 < 10) //! Условие 
?
//! if  console.log ('Ready')
//* else : console.log('Warse');

let arr = ['Arr1', 'Arr2', 'Arr3','Arr4'];

let newArr = arr.slice(0,-1);

console.log(newArr);



 let obj = {
    name: 'Micola',
    sername: 'i'
};

let copyObj = Object.assign({},obj);


console.log(copyObj);


! setTimeout(() => {
    console.log('1');
}, 2000);

let newFunk = () => {
    console.log('2');
};

setTimeout(newFunk, 3000); 

let a = 1;


let promisePractice = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve( a = 'wo sup') ;
    }, 2000);
  
});

promisePractice.then((value) => {
    console.log(value + '!');
});