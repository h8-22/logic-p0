function targetTerdekat(arr) {
  let start = 0;
  let end = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "o") {
      start = i;
      for (let j = i + 1; j < arr.length - i; j++) {
        if (arr[j] === "x") {
          end = j;
          //   return end;
          break;
        }
      }
    } else if (arr[i] === "o") {
      start = i;
      for (let j = i + 1; j < arr.length - i; j++) {
        if (arr[j] === "o") {
          end = j;
          //   return end;
          break;
        }
      }
    }
  }
//   console.log(start, end);
  let distance = end - start;
  return distance;
}

console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); //3

