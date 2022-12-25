function sorting(array) {
  // your code here
  let flag = false;
  while (!flag) {
    flag = true;
    for (let i = 0; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        flag = false;
        let temp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = temp;
      }
    }
  }
  return array;
}

function sortingByType(array) {
  // your code here
  let newArr = [];
  let num = [];
  let str = [];
  let tOrF = [];
  for(let i = 0; i < array.length; i++){
    if(typeof(array[i]) === "number"){
      num.push(array[i]);
    } else if(typeof(array[i]) === "string"){
      str.push(array[i]);
    } else if(typeof(array[i]) === "boolean"){
      tOrF.push(array[i]);
    }
  }
  newArr.push(num)
  newArr.push(str)
  newArr.push(tOrF)
  return newArr
}

// function sortAllClean(array) {
//   //your code here
//   let newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if(array[i] !== null || array[i] !== undefined || !isNaN(array[i]) || array[i] !== null || array !== ''){
//       newArray.push(array[i]);
//     }
//   }
//   return newArr;
// }

console.log(sortingByType([2, 4, 6, 8, 3]));
console.log(
  sortingByType([2, 4, "asdf", 8, false, NaN, undefined, "", null, NaN])
);
