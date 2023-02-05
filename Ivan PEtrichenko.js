"use strict";

const personalMovieDb = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: () => {
    personalMovieDb.count = +prompt("Khow many movies did you saw?", "");

    while (
      personalMovieDb.count == "" ||
      personalMovieDb.count == null ||
      isNaN(personalMovieDb.count)
    ) {
      personalMovieDb.count = +prompt("Khow many movies did you saw?", "");
    }
  },
  rememberMyFilms: () => {
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
  },
  detectPersonalLevel: () => {
    if (personalMovieDb.count < 10) {
      console.log("You have not seen a lot of movies").trim();
    } else if (personalMovieDb.count > 10 && personalMovieDb.count <= 30) {
      console.log("You are a classic Viewer");
    } else if (personalMovieDb.count > 30) {
      console.log("You`ve  got addict of cinema");
    } else {
      console.log("FALSE");
    }
  },
  showMyDB: (hidden) => {
    if (!hidden) {
      console.log(personalMovieDb);
    }
  },
  toggleVisibleMyDb: () => {
    if(personalMovieDb.privat){
      personalMovieDb.privat = false;
    } else{
      personalMovieDb.privat = true;
    }
  },
  writeYourGenres: () => {
    for (let i = 1; i <= 3; i++) {
      let genres = prompt(
        `Ваш любимый жанр под номером ${i}`
      );
      if(genres === '' || genres === null){
        console.log('Вы ввели некоректные данные или не ввели их вовсе');
        i--;
      } else {
        personalMovieDb.genres[i - 1] = genres;
      }
    }
    personalMovieDb.genres.forEach((item,i)=>{
      console.log(`Любимый жанр ${i + 1} - это  ${item}` );
    }); 
  },
};
