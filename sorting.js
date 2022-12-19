function sorting(array) {
  newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (newArr.length < 1) {
      newArr.push(array[i]);
    } else {
      for (let j = 0; j < newArr.length; j++) {
        if (array[i] >= newArr[j]) {
          newArr.push(array[i]);
        } else {
          newArr.unshift(array[i]);
        }
      }
    }
  }
  return newArr;
}
console.log(sorting([2, 4, 6, 8, 3]));
