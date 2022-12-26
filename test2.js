// function splice(data, add, start, del) {
//   // Ketika start undefined
//   if (start === undefined) {
//     // null, 0, undefined, NaN,
//     start = 0;
//   }

//   // Ketika del undefined
//   if (del === undefined) {
//     del = 0;
//   }

//   // Ketika data nya bukan array/undefined
//   if (!Array.isArray(data)) {
//     return [];
//   }

//   // Pair Programming - Ketika jumlah 'data' nya itu adalah Ganjil, maka splice nya berjalan, sebaliknya langsung mengembalikan 'data' nya
//   if (data.length % 2 !== 0) {
//     // Proses 1 - Sudah masuk proses slice
//     let tempResult = [];
//     let i = 0;
//     while (i < data.length) {
//       if (i === start) {
//         tempResult.push(add);
//       }
//       tempResult.push(data[i]);
//       i++;
//     }

//     // Proses 2 - Sudah masuk proses slice
//     let finalResult = [];
//     let j = 0;
//     while (j < tempResult.length) {
//       if (j <= start || j > start + del) {
//         finalResult.push(tempResult[j]);
//       }
//       j++;
//     }
//     return finalResult;
//   } else {
//     return data;
//   }
// }

// console.log(splice(["idaz", "fajrin", "samir", "test", "me"], "anggara", 1, 2));
// // [ 'idaz', 'anggara' ]

// console.log(splice(["eko", "basil", "abdullah", "dear"], "idaz", 3, 0));
// // // [ 'eko', 'basil', 'abdullah', 'idaz', 'dear' ]

// console.log(splice([100, 200, 300], "150", 1, 0));
// // // [ 100, '150', 200, 300 ]

// // // Test case: function menerima parameter start dan del kosong!
// console.log(splice(["anggara"], "idaz"));
// // // [ 'idaz', 'anggara' ]

// // Test case: function menerima parameter del kosong!
// console.log(splice(["aku", "kamu"], "dia", 1));
// // [ 'aku', 'dia', 'kamu' ]

// // Test case: catch error!
// console.log(splice("aku", "dia"));
// // []
// console.log(splice());
// // []

// let data = ["H"]

// data[1] = "n"

// console.log(data);

// function bubbleSort(array) {
//     var done = false;
//     while (!done) {
//       done = true;
//       for (var i = 1; i < array.length; i += 1) {
//         if (array[i - 1] > array[i]) {
//           done = false;
//           var tmp = array[i - 1];
//           array[i - 1] = array[i];
//           array[i] = tmp;
//         }
//       }
//     }
  
//     return array;
//   }
  
//   var numbers = [12, 10, 15, 11, 14, 13, 16];
//   bubbleSort(numbers);
//   console.log(numbers);
// console.log("sdf");

// console.log(typeof ("a"));
// console.log(typeof 2);
// console.log(typeof true);

// console.log(-10<5);

// console.log(-60 > -50);

// let b = " b"

// console.log(!isNaN(b));

function sorting(arrNumber) {
    // code di sini
    arrNumber.sort();
    return arrNumber;
}

function getTotal(arrNumber) {
    // code di sini
    const newSorting = sorting(arrNumber);
    let highest = newSorting[]
    let count = 0;
    if (arrNumber.length === 0) {
        return ""
    }
    for (let i = 0; i < newSorting.length; i++) {
        if (newSorting[i] > highest) {
            highest = newSorting[i]
        }
    }
    for (let j = 0; j < newSorting.length; j++) {
        if (highest === newSorting[j]) {
            count++
        }
    }
    return `angka paling besar adalah ${highest} dan jumlah kemunculan sebanyak ${count} kali`
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'