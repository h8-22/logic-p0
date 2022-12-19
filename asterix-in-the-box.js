let row = 3;
let coordinate = "23";
let baris = Number(coordinate[0]);
let kolom = Number(coordinate[1]);
console.log(baris, kolom);

for (let i = 0; i < row; i++) {
  let temp = "";
  for (let j = 0; j < 5; j++) {
    if (i == baris - 1 && j == kolom - 1) {
      temp += "* ";
    } else {
      temp += "# ";
    }
}
console.log(temp);
}