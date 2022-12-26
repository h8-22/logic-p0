function splitting(str) {
  let newArr = [];
  let temp = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "-" || str[i] === ",") {
      newArr.push(temp);
      temp = "";
    } else {
      temp += str[i];
    }
  }
  newArr.push(temp);
  return newArr;
}
function meleeRangedGrouping(str) {
  splittedStr = splitting(str);
  // splitting(str);
  // console.log(str);

  // console.log(splittedStr);

  let newArr = [];
  let rangedArr = [];
  let meleeArr = [];
  for (let i = 1; i < splittedStr.length; i += 2) {
    if (splittedStr[i] === "Ranged") {
      rangedArr.push(splittedStr[i - 1]);
    } else {
      meleeArr.push(splittedStr[i - 1]);
    }
  }

  newArr.push(rangedArr);
  newArr.push(meleeArr);

  return newArr;
}

console.log(
  meleeRangedGrouping(
    "Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged"
  )
);
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(
  meleeRangedGrouping("Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged")
);
// // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping("")); // []
