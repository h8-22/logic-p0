function boxOfAlphabet(row, col) {
  let array = [];
  let counter = 0;
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < row; i++) {
    let temp = [];
    for (let j = 0; j < col; j++) {
      temp.push(alphabet[counter % alphabet.length])
      counter++
      if( counter > alphabet.length-1){
        counter =0; 
      }
    }
    array.push(temp)
  }
  return array;
}

// console.log(boxOfAlphabet(2, 2))

// [
//   ['a', 'b'],
//   ['c', 'd']
// ]


// console.log(boxOfAlphabet(3, 4))


// [
//   ['a', 'b', 'c', 'd'],
//   ['e', 'f', 'g', 'h'],
//   ['i', 'j', 'k', 'l'],
// ]


console.log(boxOfAlphabet(6, 5))


// [
//   ['a', 'b', 'c', 'd', 'e'],
//   ['f', 'g', 'h', 'i', 'j'],
//   ['k', 'l', 'm', 'n', 'o'],
//   ['p', 'q', 'r', 's', 't'],
//   ['u', 'v', 'w', 'x', 'y'],
//   ['z', 'a', 'b', 'c', 'd']
// ]