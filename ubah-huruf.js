let kata = "i love javascript";
let vowel = "aiueo";
let result = "";
for (let i = 0; i < kata.length; i++) {
  let flag = true;
  for (let j = 0; j < vowel.length; j++) {
    if (kata[i] === vowel[j]) {
        console.log(j);
        flag = false;
        break;
    }
  }
  if (flag) {
    result += kata[i];
  } else {
    result += "$";
  }
}
console.log(result);
