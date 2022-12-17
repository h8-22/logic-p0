let kalimat = "test hai";
let i = 0;
let total = 0;

while (i < kalimat.length) {
  if (kalimat[i] === " ") {
    total++;
  }
  i++;
}

total++;
console.log(total);
