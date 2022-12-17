// console.log("WHILE");
// let rows1 = 5;
// while (rows1 > 0) {
//   console.log("*");
//   rows1--;
// }

// let rows2 = 5;
// // let rows2 = 5;
// while (rows2 > 0) {
//   let temp = "";
//   let i = 5;
//   while (i > 0) {
//     temp += "*";
//     i--;
//   }
//   console.log(temp);
//   rows2--;
// }

// let rows3 = 5;
// let i = 0;
// let j = 1;
// let temp = "";
// while (rows3 > 0) {
//   // console.log(i);
//   while (i < j) {
//     temp += "*";
//     console.log(temp);
//     i++;
//   }
//   j++;
//   rows3--;
// }

// let rows4 = 5;

// while (rows4 > 0) {
//   let k = rows4;
//   console.log(rows4);
//   let temp = "";
//   while (k > 0) {
//     temp += "*";
//     k--;
//   }
//   console.log(temp);
//   rows4--;
// }

// for (let i = rows4; i > 0; i--) {
//   let temp = "";
//   for (let j = 0; j < i; j++) {
//     temp += "*";
//   }
//   console.log(temp);
// }

/*
# # * # #
# * * * #
* * * * * 
*/
let temp = "";
for (var i = 0; i < 8; i++) {
  for (var j = 0; j <= i; j++) {
    temp += "^";
  }
  temp += "<br>";
}

