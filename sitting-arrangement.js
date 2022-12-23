function sittingArrangement(person, column) {
  if(column < 1){
    return "Invalid number";
  }
  let newArr = [];
  let temp = [];
  let i = 0;
  while(true){
    temp = [];
    while(temp.length < column){
      if(person[i]){
        temp.push(person[i]);
      } else {
        temp.push("Kursi Kosong");
      }
      i++
    }
    newArr.push(temp);
    if(!person[i]){
      break;
    }
  }
  return newArr;
}

  // for (let i = 0; i < person.length; i++) {
  //desinya gamasuk
    // if (temp.length < column) {
    //   if (person[i]) {
    //     temp.push(person[i]);
    //   } else {
    //     temp.push("Kursi Kosong");
    //   }
    // } else if(temp.length === column){
    //   newArr.push(temp);
    //   // if (person[i]) {
    //   //   temp.push(person[i]);
    //   // } else {
    //   //   temp.push("Kursi Kosong");
    //   // }
      
    //   temp = []
    // }
    
    

//   }
//   return newArr;
// }
//! problemnya, desi gaikut di push ketika looping ke-3.

//Driver Code
// console.log(sittingArrangement(["Juli", "Nisa", "Desi", "Ulfa", "Puji"], 2));
console.log(sittingArrangement(["Lukman", "Adam", "Dimas", "Hansin", "Orion"], 4));
