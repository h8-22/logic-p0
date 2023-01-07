/*
Buatlah sebuah function highestLowest untuk mendapatkan angka terbesar dan terkecil dari sebuah array multidimensi
*/

function highestLowest(arr) {
    // tulis kode disini
    let max = 0;
    let min = arr[0][0][0]; 
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        for (let k = 0; k < arr[i][j].length; k++) {
          if(arr[i][j][k] > max){
            max = arr[i][j][k]
          } if(arr[i][j][k] < min){
            min = arr[i][j][k]
          }
        }
      }
    }
    return `${min} yang terkecil dan ${max} yang terbesar`
}

let data = [
    [
      [4, 5, 6],
      [9, 1, 2, 10],
      [9, 4, 3]
    ],
    [
      [4, 14, 31],
      [9, 10, 18, 12, 20],
      [1, 4, 90]
    ],
    [
      [2, 5, 10],
      [3, 4, 5],
      [2, 4, 5, 10]
    ]
]

console.log(highestLowest(data)); // [1, 90] => 1 yang terkecil dan 90 yang terbesar