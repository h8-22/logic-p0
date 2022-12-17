console.log("OUTPUT");
console.log("------");
let i = 1;
while (i <= 100) {
  if (i % 2 == 0) {
    console.log(`${i} - genap`);
  } else {
    console.log(`${i} - ganjil`);
  }
  i+=3;
}

console.log("OUTPUT");
console.log("-------");
let j = 50;
while (j <= 200) {
  if (j % 3 != 0) {
    console.log(`${j} - tidak bisa dibagi 3`);
  } else if(j % 5 == 0){
    console.log(`${j} - faktor 3`);
  }
  j+=5;
}

console.log("OUTPUT");
console.log("-------");
let k = 100;
while(k <= 200){
    if(k % 8 == 0){
        console.log(k);
    }
    k += 7;
}


