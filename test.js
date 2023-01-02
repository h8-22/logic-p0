// // let obj = {
// //     "1": 1
// // }

// // // cle.log(obj.satu);
// // obj."1" ++;
// // console.log(obj);

// // console.log(Number("asd"));
// function manualSplit(str) {
//     // Tulis kode disini
//     let array = [];
//     let temp = "";
//     let tempArray = [];
//     for (let i = 0; i < str.length; i++) {
//         tempArray = [];
//         word = str[i];
//         for (let j = 0; j < word.length; j++) {
//             if (word[j] === " ") {
//                 tempArray.push(temp);
//                 temp = "";
//             } else {
//                 temp += word[j];
//             }
//         }
//         tempArray.push(temp);
//         temp = "";
//         array.push(tempArray);
//     }
//     return array;
// }
// function productSearch(arr, keyword) {
//     // tulis kode disini
//     // gunakan function manualSplit dsini
//     let newArray = manualSplit(arr)
//     let output = [];
//     for (let i = 0; i < newArray.length; i++) {
//         for (let j = 0; j < newArray[i].length; j++) {
//             if (newArray[i][j] === keyword) {
//                 output.push(newArray[i]);
//                 continue;
//             }
//         }
//     }
//     let result = [];
//     // let temp = "";
//     for (let i = 0; i < output.length; i++) {
//         temp = "";
//         for (let j = 0; j < output[i].length; j++) {
//             if (j === output[i].length - 1) {
//                 temp += output[i][j];
//                 result.push(temp)
//             } else {
//                 temp += output[i][j] + " ";
//             }
//         }
//     }
//     return result;
// }

// // let products = ['minyak goreng', 'mie rebus', 'mie goreng', 'mie pedas', 'sirup jeruk', 'sirup mangga', 'kentang goreng', 'kentang goreng keju', 'keju slice', 'keju parut'];
// let products = ['minyak goreng', 'mie rebus', 'mie goreng', 'mie pedas', 'sirup jeruk', 'sirup mangga', 'kentang goreng', 'kentang goreng keju', 'keju slice', 'keju parut', 'keju krispi toping keju' ];
// // panggil function disini dan sesuaikan parameternya
// console.log(productSearch(products, 'keju'));

let a = "abc";
let b = 123
let c = {
    test: "asdfsa"
}
console.log(a+c);