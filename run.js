let getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

let  getRandomArrayElement = (array) => {
  let randomWeatherIndex = getRandomInt(array.length);

  return array[randomWeatherIndex];
};

let weather = ["Rain", "Hurricane", "Storm", "Avalanche", "Thunder-Storm"];

for (let i = 0; i < weather.length; i++) {
  console.log(getRandomArrayElement(weather));
}

