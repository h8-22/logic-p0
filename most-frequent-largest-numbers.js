function sorting(arrNumber) {
  // your code here
  let flag = false;
  while (!flag) {
    flag = true;
    for (let i = 0; i < arrNumber.length; i++) {
      if (arrNumber[i - 1] > arrNumber[i]) {
        flag = false;
        let temp = arrNumber[i - 1];
        arrNumber[i - 1] = arrNumber[i];
        arrNumber[i] = temp;
      }
    }
  }
  return arrNumber;
}

function getTotal(arrNumber) {
  // code di sini
  // let sorted = sorting(arrNumber);
  let highest = arrNumber[arrNumber.length - 1];
  let countTheHighest = 0;
  for (let i = arrNumber.length - 1; i >= 0; i--) {
    if (arrNumber[i] === highest) {
      countTheHighest++;
    }
  }
  return `angka paling besar adalah ${highest} dan jumlah kemunculan sebanyak ${countTheHighest} kali`;
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

// console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
// //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

// console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
// //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

// console.log(mostFrequentLargestNumbers([]));
// //''
