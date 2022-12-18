"use strict";

let numberOfFilms;

const start = () => {
  numberOfFilms = +prompt("Khow many movies did you saw?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Khow many movies did you saw?", "");
  }
};
start();

const personalMovieDb = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const rememberMyFilms = () => {
  for (let i = 0; i < 2; i++) {
    const question1 = prompt("Last movie that you saw?", "");
    const question2 = prompt(" Put your rating ", "");

    if (
      question1 != 0 &&
      question2 != 0 &&
      question1 != "" &&
      question2 != "" &&
      question1.length < 50
    ) {
      personalMovieDb.movies[question1] = question2;
      console.log("done");
    } else {
      console.log("Error ");
      i--;
    }
  }
};
rememberMyFilms();

const detectPersonalLevel = () => {
  if (personalMovieDb.count < 10) {
    console.log("You have not seen a lot of movies").trim();
  } else if (personalMovieDb.count > 10 && personalMovieDb.count <= 30) {
    console.log("You are a classic Viewer");
  } else if (personalMovieDb.count > 30) {
    console.log("You`ve  got addict of cinema");
  } else {
    console.log("FALSE");
  }
};
detectPersonalLevel();

const showMyDB = (hidden) => {
  if(!hidden){
    console.log(personalMovieDb);

  }
}
showMyDB(personalMovieDb.privat);

const writeYourGenres = () => {
  for(let i = 1; i <= 3; i++){

    personalMovieDb.genres[i - 1] = prompt(`Your favorite ganres with number ${i}`);
  }
};
writeYourGenres();