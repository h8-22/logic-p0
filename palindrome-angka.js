// let angka = 10;
// let reverse = 0;

// let flag = false;
// while (flag === false) {
//     console.log("test");
//   let temp = "";
//   for (let i = str.length - 1; i > 0; i--) {
//     temp += str[i];
//   }
//   console.log(temp);
//   if (str === temp) {
//     flag = true;
//     reverse = Number(temp);
//     break;
//   }
// }

// if (flag) {
//   console.log(reverse);
// }

// let temp = "";
// let flag = true;

// for (let i = str.length - 1; i >= 0; i--) {
//   temp += str[i];
// }
// console.log(flag);

// while (true) {
//   let str = angka.toString();
//   let temp = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     temp += str[i];
//   }
//   if (str === temp) {
//     reverse = Number(str);
//     flag = false;
//   }
//   angka++;
// }

let angka = 10;

// let reverseStr = reverse.toString();
// let flag = true;
let temp = "";
let stop = false;
let isPalindrome = false;
while (isPalindrome === false) {
  let angkaStr = angka.toString();
  console.log(angkaStr, temp);
  temp = "";
  for (let i = angkaStr.length - 1; i >= 0; i--) {
    temp += angkaStr[i];
  }
  if (angkaStr === temp) {
    isPalindrome = true;
  } else {
    angka ++;
  }
}
console.log(angka);
