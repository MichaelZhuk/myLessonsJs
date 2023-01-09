const baseCurrencies = ["USD", "EUR"];
const additionalCurrencies = ["UAN", "RUB", "CNY"];

const arrWithAll = baseCurrencies.concat(additionalCurrencies);

const availableCurr = (arrWithAll, endedCurrency) => {
  let result = "";
  if(arrWithAll.length !== 0){
  for (let index = 0; index < arrWithAll.length; index++) {
    if (arrWithAll[index] !== endedCurrency) {
      result += `\n ${arrWithAll[index]} `;
    } 
  }
  console.log(`Доступные валюты: ${result} \n`);
} else {
    console.log(`Нет доступных валют`);
}
};

availableCurr(arrWithAll, "RUB");

