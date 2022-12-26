function sorting(array) {
  // your code here
  let newArray = sortAllClean(array);
  console.log(newArray);

  let flag = false;
  while (!flag) {
    flag = true;
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i - 1] > newArray[i]) {
        flag = false;
        let temp = newArray[i - 1];
        newArray[i - 1] = newArray[i];
        newArray[i] = temp;
      }
    }
  }
  return newArray
}

function sortingByType(array) {
  // your code here
  let newArr = [];
  let num = [];
  let str = [];
  let tOrF = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      num.push(array[i]);
    } else if (typeof array[i] === "string") {
      str.push(array[i]);
    } else if (typeof array[i] === "boolean") {
      tOrF.push(array[i]);
    }
  }
  newArr.push(num);
  newArr.push(str);
  newArr.push(tOrF);
  return newArr;
}

function sortAllClean(array) {
  //your code here
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!isNaN(array[i]) && array[i]!== '' && array[i] !== null) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// console.log(sortingByType([2, 4, 6, 8, 3]));
console.log(
  sorting([2, 4, "asdf", 8, false, NaN, undefined, "", null, NaN, true, "testi"])
);
