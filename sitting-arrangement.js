function sittingArrangement(person, column) {
  let newArr = [];
  for (let i = 0; i < person.length; i++) {
      // console.log(i);
      let temp = [];
    console.log(temp.length);
    console.log(person[i]);
    if (temp.length <= column) {
      temp.push(person[i]);
    } else {
      temp = [];
    }
  }
  return newArr;
}

//Driver Code
console.log(sittingArrangement(["Juli", "Nisa", "Desi", "Ulfa", "Puji", 2]));
