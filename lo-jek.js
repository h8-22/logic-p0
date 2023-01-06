//****SPLIT DATA****//

function splitData(array) {
  // let groceriesArr = array.groceries;
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    temp = [];
    for (let j = 0; j < array[i].groceries.length; j++) {
      temp.push(array[i].groceries[j][0]);
      temp.push(array[i].groceries[j][1]);
    }
    newArr.push(temp)
    // console.log(array[i].groceries);
    // console.log(i);
  }
  return newArr;
  // console.log(array[0].groceries[1].length);
  // console.log(array[1]);
}


// console.log(
//   splitData([
//     {
//       name: "Samir",
//       groceries: [
//         ["Susu", 2],
//         ["Roti", 4],
//         ["Mie", 5],
//         ["Telur", 2],
//         ["Bakso", 1],
//       ],
//       driveTime: 134, //minutes
//     },
//     {
//       name: "Eko",
//       groceries: [
//         ["Susu", 1],
//         ["Roti", 2],
//         ["Mie", 3],
//         ["Telur", 3],
//         ["Bakso", 2],
//       ],
//       driveTime: 134, //minutes
//     },
//   ])
// );

//  expected output: [["Susu", 2, "Roti", 4, "Mie", 5, "Telur", 2, "Bakso", 1], ["Susu", 1, "Roti", 2, "Mie", 3, "Telur", 3, "Bakso", 2]],

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
  // console.log(array.length);
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

// console.log(
//   calculateMoney([
//     ["Susu", 2, "Roti", 4, "Mie", 5, "Telur", 2, "Bakso", 1],
//     ["Susu", 1, "Roti", 2, "Mie", 3, "Telur", 3, "Bakso", 2],
//   ])
// );
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
// console.log(
//   calculateDistance([
//     {
//       name: "Samir",
//       groceries: [
//         ["Susu", 2],
//         ["Roti", 4],
//         ["Mie", 5],
//         ["Telur", 2],
//         ["Bakso", 1],
//       ],
//       driveTime: 134, //minutes
//     },
//     {
//       name: "Eko",
//       groceries: [
//         ["Susu", 1],
//         ["Roti", 2],
//         ["Mie", 3],
//         ["Telur", 3],
//         ["Bakso", 2],
//       ],
//       driveTime: 134, //minutes
//     },
//   ])
// );
/*expected output:
  [67, 67]
*/

function reward(data) {
  // console.log(data);
  //code here
  let splitted = splitData(data);
  let distance = calculateDistance(data);
  let money = calculateMoney(splitted);
  // console.log(splitted);
  console.log(distance);
  console.log(money);

  let result = {
    Rumah: [],
    Mobil: [],
    NoReward: []
  }

  for (let i = 0; i < data.length; i++) {
    if (distance[i] >= 50 && money[i] >= 100000) {
      result["Rumah"].push(data[i]["name"]);
    } else if (distance[i] >= 20 && distance[i] <= 49 && money[i] >= 50000  && money[i] <= 99000) {
      result["Mobil"].push(data[i]["name"]);
    } else {
      result["NoReward"].push(data[i]["name"]);
    }
  }

  for(things in result){
    if(result[things].length < 1){
      delete result[things]
    }
  }
  return result;
}


// console.log(
//   reward([
//     {
//       name: "Samir",
//       groceries: [
//         ["Susu", 2],
//         ["Roti", 4],
//         ["Mie", 5],
//         ["Telur", 2],
//         ["Bakso", 1],
//       ],
//       driveTime: 134, //minutes,
//     },
//     {
//       name: "Eko",
//       groceries: [
//         ["Susu", 1],
//         ["Roti", 2],
//         ["Mie", 3],
//         ["Telur", 3],
//         ["Bakso", 2],
//       ],
//       driveTime: 134, //minutes,
//     },
//     {
//       name: "Fajrin",
//       groceries: [
//         ["Susu", 1],
//         ["Roti", 2],
//         ["Bakso", 2],
//         ["Telur", 3],
//       ],
//       driveTime: 90, //minutes
//     },
//     {
//       name: "Abdullah",
//       groceries: [
//         ["Susu", 1],
//         ["Roti", 2],
//         ["Bakso", 5],
//       ],
//       driveTime: 120, //minutes,
//     },
//     {
//       name: "Basil",
//       groceries: [
//         ["Susu", 1],
//         ["Roti", 2],
//         ["Bakso", 2],
//         ["Telur", 5],
//       ],
//       driveTime: 40, //minutes
//     },
//     {
//       name: "Idaz",
//       groceries: [
//         ["Susu", 1],
//         ["Roti", 2],
//       ],
//       driveTime: 10, //minutes
//     },
//   ])
// );

/*
  expected output :

  {
  Rumah: [ 'Samir', 'Eko', 'Abdullah' ], 
  NoReward: [ 'Fajrin', 'Basil', 'Idaz' ]
  }
*/

/*
  expected output :

  {
  Rumah: [ 'Samir', 'Eko', 'Abdullah' ], 
  NoReward: [ 'Fajrin', 'Basil', 'Idaz' ]
  }
*/

console.log(reward(
  [
    {
      "name": "Samir",
      "groceries": [
        [ "Susu", 2 ],
        [ "Roti", 4 ],
        [ "Mie", 2 ]
      ],
      "driveTime": 134
    },
    {
      "name": "Eko",
      "groceries": [
        [ "Roti", 2 ],
        [ "Mie", 3 ],
        [ "Telur", 3 ],
        [ "Bakso", 2 ]
      ],
      "driveTime": 110
    },
    {
      "name": "Fajrin",
      "groceries": [
        [ "Susu", 1 ],
        [ "Roti", 2 ],
        [ "Telur", 3 ]
      ],
      "driveTime": 90
    },
    {
      "name": "Abdullah",
      "groceries": [
        [ "Susu", 1 ],
        [ "Roti", 2 ],
        [ "Bakso", 5 ]
      ],
      "driveTime": 120
    },
    {
      "name": "Basil",
      "groceries": [
        [ "Susu", 1 ],
        [ "Roti", 2 ],
        [ "Bakso", 2 ],
        [ "Telur", 5 ]
      ],
      "driveTime": 50
    },
    {
      "name": "Idaz",
      "groceries": [
        [ "Susu", 1 ],
        [ "Roti", 2 ],
        [ "Mie", 3 ],
        [ "Telur", 3 ],
        [ "Bakso", 1 ]
      ],
      "driveTime": 100
    }
  ]
  ));