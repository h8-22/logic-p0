// var exercise = "<>";
// var userInput = "<>";
// let score = 99;
// let category;

// // Anda mendapatkan score 50 / 70. Persentase: 71%, Kategori : Good
// // console.log(exercise.length);
// // console.log(userInput.length);
// // console.log(exercise.length === userInput.lenght);
// if(exercise.length === userInput.length) {
//   for (let i = 0; i < exercise.length; i++) {
//     if (exercise[i] === userInput[i]) {
//       score += 10;
//     }
//   }
//   //   console.log("test");
//   // }

//   let totalScore = (score / exercise.length) * 10;
//   console.log(totalScore);
//   if (totalScore == 100) {
//     category = "Perfect";
//   }
//   if (totalScore >= 80) {
//     category = "Great";
//   }
//   if (totalScore >= 60) {
//     category = "Good";
//   } else {
//     category = "Bad";
//   }

//   console.log(
//     `Anda mendapatkan score ${score} / ${
//       exercise.length * 10
//     }. Presentase ${Math.floor(totalScore)}, Kategori : ${category}`
//   );
// } else {
//     console.log("Input yang anda masukkan tidak lengkap!");
// }

// // let test = "Anda mendapatkan score 50 / 70. Persentase: 71%, Kategori : Good"
// // let result "Anda mendapatkan score 50 / 70. Presentase: 71%, Kategori : Good"

// // console.log(test === result)

// let obj = {};
// obj.test= 0;
// console.log(obj);

// console.log(obj.test === obj.test);

// let obj = Object;
// console.log(obj);

// console.log(1%5);
// console.log(2%5);
// console.log(3%5);
// console.log(4%5);
// console.log(5%5);

// function boxOfAlphabet(row, col) {
//     let result = [];
//     let alphabet = 'abcdefgh';

//     for (let i = 0; i < row.length; i++) {
//         //result = [`];
//         for (let j = 0; j < col.length; j++) {
//             result.push(alphabet);

//             //console.log(row[i][j]);
//         }

//     }
//     return result;
//  }

//  console.log(boxOfAlphabet(2, 2))

// function boxOfAlphabet(row, col) {
//     let result = [];
//     let alphabet = "abcdefghijklmnopqrstuvwxyz";
//     let count = 0;

//     for (let i = 0; i < row.lengtsh; i++) {
//         //result = [];
//         let temp = [];
//         for (let j = 0; j < col.length; j++) {
//             temp.push(alphabet[count])

//             count++
//         result.push(temp);
//             //console.log(row[i][j]);
//         }

//     }

//     return result;

//  }

//  console.log(boxOfAlphabet(2, 2))

let data = ["idaz", "fajrin", "samir", "titus", "test", "abc", "tasdf"]
// data.splice(2,2);

let tempArr = [];

console.log(data.length);
// for (let i = 0; i < data.length; i++) {
//     tempArr.push(data.pop())
// }
let counter = 0;
while(counter < data.length){
    console.log(counter);
    tempArr.push(data.pop())
    counter ++;
}


console.log(tempArr);
console.log(data);










// console.log(tempArr);

// for (let i = 0; i < 2; i++) {
//     tempArr.pop()
// }

// //LOOPING TAMBAH ARR
// // for (let index = 0; index < array.length; index++) {
// //     const element = array[index];
    
// // }

// for (let i = 0; i < tempArr.length; i++) {
//     data.push(tempArr[i])
// }




// let data2= ["idaz", "fajrin", "samir", "titus", "test", "abc", "tasdf"]
// data2.splice(2,2)

// console.log(data2);