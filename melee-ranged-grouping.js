function splitting(str) {
  let newArr = [];
  let tempArr = [];
  let temp = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "-") {
        tempArr.push(temp);
        temp = [];
    } else if (str[i] === ",") {
        tempArr = [];
        temp = [];
    } else {
        temp += 
    }
  }
}

function meleeRangedGrouping(str) {}

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
