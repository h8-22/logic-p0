let x = 0;
let o = 0;
var kata = "xoxoxoxo";
for (let i = 0; i < kata.length; i++) {
  if (kata[i] === "o") {
    o++;
  } else if (kata[i] === "x") {
    x++;
  }
}
// console.log(o);
console.log(x == o);
