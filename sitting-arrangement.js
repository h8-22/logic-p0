function sittingArrangement(person, column) {
  let newArr = [];
  let temp = [];
  for (let i = 0; i < person.length; i++) {
    // console.log(i);
    // console.log(temp.length);
    // console.log(person[i]);
    // console.log(column);
    // console.log(temp.length <= column);
    if (temp.length < column) {
      temp.push(person[i]);
    } else {
      newArr.push(temp);
      temp = [];
    }
  }
//! problemnya, desi gaikut di push ketika looping ke-3. 
  return newArr;
}

//Driver Code
console.log(sittingArrangement(["Juli", "Nisa", "Desi", "Ulfa", "Puji"], 2));
