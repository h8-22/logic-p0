var exercise = "<>";
var userInput = "<>";
let score = 99;
let category;

// Anda mendapatkan score 50 / 70. Persentase: 71%, Kategori : Good
// console.log(exercise.length);
// console.log(userInput.length);
// console.log(exercise.length === userInput.lenght);
if(exercise.length === userInput.length) {
  for (let i = 0; i < exercise.length; i++) {
    if (exercise[i] === userInput[i]) {
      score += 10;
    }
  }
  //   console.log("test");
  // }

  let totalScore = (score / exercise.length) * 10;
  console.log(totalScore);
  if (totalScore == 100) {
    category = "Perfect";
  }
  if (totalScore >= 80) {
    category = "Great";
  }
  if (totalScore >= 60) {
    category = "Good";
  } else {
    category = "Bad";
  }

  console.log(
    `Anda mendapatkan score ${score} / ${
      exercise.length * 10
    }. Presentase ${Math.floor(totalScore)}, Kategori : ${category}`
  );
} else {
    console.log("Input yang anda masukkan tidak lengkap!");
}

// let test = "Anda mendapatkan score 50 / 70. Persentase: 71%, Kategori : Good"
// let result "Anda mendapatkan score 50 / 70. Presentase: 71%, Kategori : Good"

// console.log(test === result)