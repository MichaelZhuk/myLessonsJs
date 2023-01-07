const family = ["Peter", "Ann", "Alex", "Linda"];

function showFamily(arr) {
  if (family.length !== 0) {
    for (let index = 0; index < family.length; index++) {
      let arr = "";
      arr += family[index];
    }
    console.log(` Семья состоит из ${arr}`);
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
