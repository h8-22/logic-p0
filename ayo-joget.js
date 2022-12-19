let exercise = "<>^v>>>";
let userInput = "<>^^>><";
let score = 0;

// Anda mendapatkan score 50 / 70. Persentase: 71%, Kategori : Good
console.log(exercise.length);
console.log(userInput.length);
console.log(exercise.length === userInput.lenght);
if (exercise.length === userInput.lenght) {
  for (let i = 0; i < exercise.length; i++) {
    if (exercise[i] === userInput[i]) {
      score += 10;
    }
  }
  console.log("test");
}
console.log(score);
