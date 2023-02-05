//!  4) Представьте такую реальную ситуацию. У вас есть банкомат, который
//*  выдает деньги из двух разных банков в разных валютах.
//*   Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:
//* const baseCurrencies = ['USD', 'EUR'];
//? const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
//? Вам нужно создать главную функцию банкомата availableCurr,
//?  которая принимает два аргумента:
//?  первый - это массив со всеми доступными валютами из двух банков
//?  сразу (сейчас представим, что они не могут повторяться),
//?   второй - необязательный аргумент, который указывает ту валюту,
//?   которая сейчас закончилась в банкомате.
//?   Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'.
//?    Функция возвращает строку в нужном виде.

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

const baseCurrencies = ["USD", "EUR"];
const additionalCurrencies = ["UAN", "RUB", "CNY"];

const arrWithAll = baseCurrencies.concat(additionalCurrencies);

const availableCurr = (arrWithAll, endedCurrency) => {
  let result = "";
  if(arrWithAll.length !== 0){
  for (let index = 0; index < arrWithAll.length; index++) {
    if (arrWithAll[index] !== endedCurrency) {
      result += (`\n ${arrWithAll[index]} `);
    }
  }
  console.log(`Доступные валюты: ${result} \n`);
} else {
    console.log(`Нет доступных валют`);
}
};

availableCurr(arrWithAll, "RUB");

//! Задача:
//? У вас есть небольшой кусочек данных о торговом центре,
//? которые записаны в объекте shoppingMallData.
//? Они содержат массив с данными о магазинах,
//? где указана длина и ширина помещения; высоту помещения;
//? стоимость отопления за 1 кубический метр и бюджет на оплату отопления за месяц.
//! Основная задача - это написать функцию isBudgetEnough, которая буде возвращать строку.
//!  Если бюджета хватает для отопления всего объема торгового центра - выводится
//!  'Бюджета достаточно', если нет - 'Бюджета недостаточно'. И все 🙂
//! Но эта задача содержит несколько подзадач внутри:
//! - вычисление общей площади всех магазинов,
//! которая вычисляется как длина магазина, умноженная на его ширину;
//! - вычисление общего объема торгового центра,
//! так как цена отопления указана в кубических метрах;
//! - определение того, хватает ли бюджета на оплату такого объема;
//! - все числа идут без единиц измерения для упрощения, просто цифры и все;
//! - функция должна продолжать работать, даже если изменяется количество магазинов,
//!  высота, бюджет или подставляется вообще другой объект.

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000,

};

const fank = (data => {
    let corner = 0;
    let volume = 0;
    data.shops.forEach(magazin => {
        corner += magazin.width * magazin.length;
    });
    volume = corner * data.height;
    console.log(volume);

    if (data.budget < volume){
        console.log(`Бабки есть`);
    } else {
        console.log(`Иди поспи`);
    }
});

fank(shoppingMallData);

const personsAll = {
    informationsOfPersons: [
        {
            sername: 'Kolesnikov',
            age: 15,
            wes: 23
        },
        {
            sername: 'Garazabushvili',
            age: 150,
            wes: 24
        },
        {
            sername: 'Neizwestnui',
            age: 25,
            wes: 23
        },

    ],
    Wes: 'Nebolhow wes'
};

personsAll.informationsOfPersons.map((item) => {
    console.log(item.sername);
});

//! Задача:
//* У вас есть список учеников, которые хотят поиграть в игру:
//* const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra',
//* 'Cris', 'Bernard', 'Takesi', 'Sam'];
//* Но команд может быть только 3 по 3 человека.
//*  Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.
//* Внутри она сначала сортирует имена по алфавиту.
//* Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку.
//*  Эти группы должны быть массивами.
//*  Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.
//! Пример:
//? sortStudentsByGroups(students)  =>
//? [
//?   [ 'Andrew', 'Ann', 'Bernard' ],
//?   [ 'Cris', 'Josh', 'Mark' ],
//?   [ 'Peter', 'Sam', 'Sandra' ],
//?   'Оставшиеся студенты: Takesi'
//? ]
// Если убрать одно студента из списка, то результат будет:
//? [
//?   [ 'Andrew', 'Ann', 'Bernard' ],
//?   [ 'Cris', 'Josh', 'Mark' ],
//?   [ 'Peter', 'Sam', 'Sandra' ],
//?   'Оставшиеся студенты: -'
//? ]
// А если добавить одного, то:
//? [
//?   [ 'Andrew', 'Ann', 'Bernard' ],
//?   [ 'Cris', 'Josh', 'Mark' ],
//?   [ 'Peter', 'Sam', 'Sandra' ],
//?   'Оставшиеся студенты: Takesi, Somebody'
//? ]
// То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.
// Задача интересная, немного заковыристая, но все необходимое для неё мы уже проходили.
//  Просто распишите логику действий строка за строкой.

const students = [
  "Peter",
  "Andrew",
  "Ann",
  "Mark",
  "Josh",
  "Sandra",
  "Cris",
  "Bernard",
  "Takesi",
  "Sam",
];
console.log(students.length);

function sortStudentsByGroups(arr) {
  let group = [[], [], []];
  arr.sort();
  console.table(arr);

  for (let index = 0; index <= 2; index++) {
    group[0] += arr[index] + " ";
  }
  for (let index = 3; index <= 5; index++) {
    group[1] += arr[index] + " ";
  }
  for (let index = 6; index <= 8; index++) {
    group[2] += arr[index] + " ";
  }
  console.log(group);
  if (arr.length == 10) {
    console.log(`Оставшиеся студенты : ${arr[9]}`);
  } else if (arr.length == 9) {
    console.log(`Оставшиеся студенты нет`);
  } else {
    console.log(`Оставшиеся студенты ${arr[9]} , ${arr[10]}`);
  }
}

sortStudentsByGroups(students);

const students = [
  "Peter",
  "Andrew",
  "Ann",
  "Mark",
  "Josh",
  "Sandra",
  "Cris",
  "Bernard",
  "Takesi",
  "Sam",
];

function sortStudentsByGroups(arr) {
  arr.sort();
  const a = [],
    b = [],
    c = [],
    rest = [];

  for (let i = 0; i < arr.length; i++) {
    if (i < 3) {
      a.push(arr[i]);
    } else if (i < 6) {
      b.push(arr[i]);
    } else if (i < 9) {
      c.push(arr[i]);
    } else {
      rest.push(arr[i]);
    }
  }
  return [
    a,
    b,
    c,
    `Оставшиеся студенты: ${rest.length === 0 ? "-" : rest.join(", ")}`,
  ];
}

sortStudentsByGroups(students);







//! Задания на поиск ошибок в коде
// В этом упражнении мы с вами потренируемся находить ошибки и неточности в коде. 
// Дебаг (поиск ошибок, debug) - очень важный навык любого программиста.
//  И чем лучше вы им будете владеть, тем легче будет вам в первую очередь.
// Мы уже разобрали один из важнейших инструментов для поиска ошибок 
// у front-end разработчиков - это консоль разработчика прямо в браузере.
//  Да, позже будут еще наслаиваться инструменты, но это один из основных.
// Не забывайте его использовать и внимательно читайте те сообщения,
//  которые выводятся. Ведь все это было создано разработчиками для разработчиков, 
//  чтобы вам было проще. 
// Ну и никто не отменяет древний метод поиска ошибок - вывод через console.log().
//  Но это только пока вы новичок :)
// Вы можете сначала решить у себя в редакторе кода, а потом вставить сюда. 
// Всю информацию для решения мы проходили в предыдущих уроках.
//! Задание:
// У вас есть объект с данными о ресторане. Начинающий разработчик создал несколько функций, 
// которые работают неправильно и он не может понять почему. Нужно исправить функции так, 
// чтобы они давали всегда правильный результат.
// 1) Функция isOpen не хочет правильно работать. Что мы уже не пробовали подставлять 
// в неё - результат все время неправильный. Необходимо найти причины и исправить.
// 2) Функция isAverageLunchPriceTrue должна брать цены двух любых блюд из меню, 
// складывать их и сравнивать с средним чеком (averageLunchPrice).
// Сейчас функция работает, но постоянно выдает неправильный результат. 
// Ведь из представленного меню сумма двух любых цен всегда будет больше 20. 
// Необходимо найти причину и исправить.
// 3) Функция transferWaitors создана для того, 
// чтобы копировать шаблон данных и передавать их в другой ресторан.
//  Конечно, в другом ресторане будут другие блюда, другие официанты и тп. 
//  Сейчас эта функция только в начале разработки и должна менять данные про официантов.
// Но в нынешнем виде мы обнаружили, что после её запуска не только копия данных содержит новых официантов,
//  но и основные данные! В restorantData сотрудник Alice исчезает и заменяется Mike!
//   Необходимо найти причину и немедленно исправить, чтобы данные были разделены.
// P.S. Может показаться сложным, но задача решается очень просто, если вы помните один принцип :)


const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '20$'
        },
        {
            name: 'Pizza Diavola',
            price: '2$'
        },
        {
            name: 'Beefsteak',
            price: '1$'
        },
        {
            name: 'Napoleon',
            price: '2$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop === false ? answer = 'Закрыто' : answer = 'Открыто';

    return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0,-1) + (+sDish.price.slice(0,-1)) > +average.slice(0,-1)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}


console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));


function transferWaitors(data) {
    const copy = Object.assign({}, data);

    copy.waitors = {name: 'Mike', age: 32};
    return copy;
}

console.log(transferWaitors(restorantData));


