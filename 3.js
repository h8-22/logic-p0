/*
Buatlah sebuah function sumArr yang menerima 1 parameter arr (array). Function ini akan mengeluarkan output jumlah atau kombinasi dari semua data di dalam array

contoh;
input:
- arr : [1, 2, 3, 4, 5]

output: 
15

hasil dari 1 + 2 + 3 + 4 + 5
=========
input:
- arr : ['h', 'e', 'l', 'l', 'o']

output:
'hello'
*/

function sumArr(arr) {
  // let newArr;
  // ketik code disini
  if (typeof arr[0] === "number") {
    newArr = 0;
  } else {
    newArr = "";
  }
  for (let i = 0; i < arr.length; i++) {
    newArr += arr[i];
  }
  return newArr;
}

console.log(sumArr([1, 2, 3, 4, 5])); // 15
console.log(sumArr(["h", "e", "l", "l", "o"])); // 'hello'
