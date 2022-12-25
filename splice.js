function splice(data, add, start, del) {
  // Insert your code here

  if (!Array.isArray(data)) {
    return [];
  }
  if (!start && !del) {
    // data.unshift(add)
    return data;
  }

  let newData = [];
  let tempData = "";
  for (let i = 0; i < start; i++) {
    tempData = data[i];
    newData.push(tempData);
  }

  let tempArr = [];
  let tempData2 = "";
  let j = start;
  let counter = 0;
  let length = data.length - 1;
  if ((start, del)) {
    while (counter < data.length - (start + del)) {
      tempData2 = data[length];
      tempArr.push(tempData2);
      counter++;
      length--;
    }
  } else if (start) {
    while (counter < data.length - start) {
      tempData2 = data[length];
      tempArr.push(tempData2);
      counter++;
      length--;
    }
  }

  // console.log(tempArr);
  newData.push(add);

  let tempData3 = "";
  for (let j = tempArr.length - 1; j >= 0; j--) {
    tempData3 = tempArr[j];
    newData.push(tempData3);
  }

  return newData;
}

// Test case: hasil function splice()
console.log(
  splice(["idaz", "fajrin", "samir", "titus", "arra"], "anggara", 1, 2)
);
// [ 'idaz', 'anggara' ]

console.log(splice(["eko", "basil", "abdullah", "dear"], "idaz", 3, 0));
// // [ 'eko', 'basil', 'abdullah', 'idaz', 'dear' ]

console.log(splice([100, 200, 300], "150", 1, 0));
// // [ 100, '150', 200, 300 ]

// // Test case: function menerima parameter start dan del kosong!
console.log(splice(["anggara"], "idaz"));
// // [ 'idaz', 'anggara' ]

// Test case: function menerima parameter del kosong!
console.log(splice(["aku", "kamu"], "dia", 1));
// [ 'aku', 'dia', 'kamu' ]

// Test case: catch error!
console.log(splice("aku", "dia"));
// []
console.log(splice());
// []
