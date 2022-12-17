// let word = "adsfjdsaajdfsja";
// let character = "";
// let most = 0;

// if (typeof word == "number") {
//   word = word.toString();
// }

// for (let i = 0; i < word.length; i++) {
//   let temp = 0;
//   for (let j = 0; j < word.length; j++) {
//     if (word[i] === word[j]) {
//       temp++;
//     }
//   }
//   if (temp > most) {
//     most = temp;
//     character = word[i];
//   }
// }

// if (most == 1) {
//   console.log(`Hanya memiliki satu karaketer yaitu ${character}`);
// } else {
//   console.log(`Karakter terbanyak adalah ${character} dengan jumlah ${most}`);
// }

// let word = "adsfjaf";

let character = "";
let most = 0;

if (typeof word == "number") {
  word = word.toString();
}

for (let i = 0; i < word.length; i++) {
  let temp = 0;
  for (let j = 0; j < word.length; j++) {
    if (
      word[i] === word[j].toUpperCase() ||
      word[i] === word[j].toLowerCase()
    ) {
      temp++;
    }
  }
  if (temp > most) {
    most = temp;
    character = word[i].toLowerCase();
  }
}
// console.log(character)

if (most == 1) {
  console.log(`Hanya memiliki satu karaketer yaitu ${character}`);
} else if (most > 10) {
  console.log(
    `Karakter terbanyak adalah ${character} dengan jumlah yang sangat banyak yaitu ${most}`
  );
} else if (most > 5 && most < 10) {
  console.log(
    `Karakter terbanyak adalah ${character} dengan jumlah yang cukup banyak yaitu ${most}`
  );
} else if (most < 5) {
  console.log(`Karakter terbanyak adalah ${character} dengan jumlah ${most}`);
}
