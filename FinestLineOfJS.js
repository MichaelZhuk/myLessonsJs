// const family = ["Peter", "Ann", "Alex", "Linda"];

// function showFamily(arr) {
//   if (family.length !== 0) {
//     for (let index = 0; index < family.length; index++) {
//       let arr = "";
//       arr += family[index];
//     }
//     console.log (` Семья состоит из ${arr}`);
//   } else {
//     console.log("Пустая строка");
//   }
// }

// showFamily(family);

// const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

// function standardizeStrings() {
//   for (let index = 0; index < favoriteCities.length; index++) {
//     let arr = "";
//     arr += favoriteCities[index];
//     console.log(arr.toLowerCase());
//   }
// }

// standardizeStrings(favoriteCities);

// const someString = 'lol - kek';

// const reverse = (someString) => {
//   let newString = '';
//   for (let index = someString.length -1; index >= 0; index--) {
//     newString += someString[index];

//   }
//   console.log( newString );
// };

// reverse(someString);

// const arr1 = [1, 2, 3, 4, 5, 6, 7];

// const reverseArr = (arr) => {
//   let result = "";
//   for (let index = arr.length - 1; index >= 0; index--) {
//     result += arr[index];
//   }
//   console.log(result);
// };
// reverseArr(arr);

// const arr = [1,-2,3,4,5,6,7];

// const a = arr.filter((intem) => {
//   return intem > 0 ;
// })

// console.log(a);

//!  4) Представьте такую реальную ситуацию. У вас есть банкомат, который 
//!  выдает деньги из двух разных банков в разных валютах. 
//!   Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:
//! const baseCurrencies = ['USD', 'EUR']; 
//! const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
//! Вам нужно создать главную функцию банкомата availableCurr, 
//!  которая принимает два аргумента: 
//!  первый - это массив со всеми доступными валютами из двух банков 
//!  сразу (сейчас представим, что они не могут повторяться),
//!   второй - необязательный аргумент, который указывает ту валюту, 
//!   которая сейчас закончилась в банкомате. 
//!   Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'.
//!    Функция возвращает строку в нужном виде.


//! Пример:
//! availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
//! Вернет строку:
//! Доступные валюты:
//! UAH
//! RUB
//! Заметьте:
//! - CNY (юань) исчез из списка валют, значит такая валюта закончилась
//! - После валюты: стоит перенос строки \n, и после каждой валюты тоже.
//!  Это важно для тестов
//! - Данные для первого аргумента должны приходить сразу из двух банков,
//!  причем сначала baseCurrencies, потом additionalCurrencies по порядку