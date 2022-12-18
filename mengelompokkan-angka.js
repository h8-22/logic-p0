function mengelompokkanAngka(arr) {
  let newArr = [];
  let modOfThree = [];
  let odd = [];
  let even = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 == 0) {
      modOfThree.push(arr[i]);
    } else if (arr[i] % 2 == 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
//   console.log(modOfThree, odd, even);

  newArr.push(even, odd, modOfThree);
  return newArr;
}
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(mengelompokkanAngka([]));
