let numberOfFilms = 11;

let personalMovieDb = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};


if (personalMovieDb.count < 10) {
  console.log("You have not seen a lot of movies");
} else if (personalMovieDb.count > 10 && personalMovieDb.count <= 30) {
  console.log("You are a classic Viewer");
} else if (personalMovieDb.count > 30) {
  console.log("You`ve  got addict of cinema");
} else  {
  console.log("FALSE");
}

let question1 = "Rosomaha";
let question2 = "Matrix";
let rating1 = "7,2";
let rating2 = "8";

personalMovieDb.movies[question1] = rating1;
personalMovieDb.movies[question2] = rating2;

console.log(personalMovieDb);


