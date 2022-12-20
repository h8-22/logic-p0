//****SPLIT DATA****//

function splitData(array) {
  // let groceriesArr = array.groceries;
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    let temp = [];
    for (let j = 0; j < array[i].groceries.length; j++) {
      temp.push(array[i].groceries[j]);
    }
    newArr.push(temp);
    // console.log(array[i].groceries);
    // console.log(i);
  }
  return newArr;
  // console.log(array[0].groceries[1].length);
  // console.log(array[1]);
}

function calculateMoney(array) {}

console.log(
  splitData([
    {
      name: "Samir",
      groceries: [
        ["Susu", 2],
        ["Roti", 4],
        ["Mie", 5],
        ["Telur", 2],
        ["Bakso", 1],
      ],
      driveTime: 134, //minutes
    },
    {
      name: "Eko",
      groceries: [
        ["Susu", 1],
        ["Roti", 2],
        ["Mie", 3],
        ["Telur", 3],
        ["Bakso", 2],
      ],
      driveTime: 134, //minutes
    },
  ])
);

//  expected output: [ ] ["Susu", 2, "Roti", 4, "Mie", 5, "Telur", 2, "Bakso", 1], ["Susu", 1, "Roti", 2, "Mie", 3, "Telur", 3, "Bakso", 2],

//**** CALCULATE MULTIPLY****/

function calculateMoney(array) {
  let listGroceries = [
    { name: "Susu", price: 10000 },
    { name: "Roti", price: 20000 },
    { name: "Mie", price: 5000 },
    { name: "Telur", price: 7000 },
    { name: "Sabun", price: 3000 },
    { name: "Bakso", price: 25000 },
  ];

  let newArr = [];
  let total = 0;
  console.log(array.length);
  for (let i = 0; i < array.length; i++) {
    total = 0;
    // console.log(i);
    for (let j = 0; j < array[i].length; j++) {
      for (let k = 0; k < listGroceries.length; k++) {
        if (j % 2 === 0) {
          if (array[i][j] === listGroceries[k].name) {
            total += listGroceries[k].price * array[i][j + 1];
          }
        }
      }
    }
    newArr.push(total);
  }
  return newArr;
}

//code here

console.log(
  calculateMoney([
    ["Susu", 2, "Roti", 4, "Mie", 5, "Telur", 2, "Bakso", 1],
    ["Susu", 1, "Roti", 2, "Mie", 3, "Telur", 3, "Bakso", 2],
  ])
);
/*
  expected output:
  [164000, 136000]
*/

/**** CALCULATE DISTANCE ****/

function calculateDistance(data) {
  const formula = (driveTime) => {
    return (driveTime * 500) / 1000;
  };
  let newArr = [];
  let time = 0;
  for (let i = 0; i < data.length; i++) {
    time = 0;
    // console.log(i);
    time = formula(data[i].driveTime);
    // return time
    newArr.push(time);
  }
  return newArr;
}
// console.log(data[0][0].driveTime);

//code here
console.log(
  calculateDistance([
    {
      name: "Samir",
      groceries: [
        ["Susu", 2],
        ["Roti", 4],
        ["Mie", 5],
        ["Telur", 2],
        ["Bakso", 1],
      ],
      driveTime: 134, //minutes
    },
    {
      name: "Eko",
      groceries: [
        ["Susu", 1],
        ["Roti", 2],
        ["Mie", 3],
        ["Telur", 3],
        ["Bakso", 2],
      ],
      driveTime: 134, //minutes
    },
  ])
);
/*expected output:
  [67, 67]
*/



