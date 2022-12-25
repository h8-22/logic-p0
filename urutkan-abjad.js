function urutkanAbjad(str) {
  let character = "abcdefghijklmnopqrstuvwxyz";
  let newStr = "";
  for (let i = 0; i < character.length; i++) {
    for (let j = 0; j < str.length; j++) {
      // console.log(j);
      if (character[i] === str[j]) [(newStr += character[i])];
    }
  }
  return newStr;
}


console.log(urutkanAbjad("truncate"));
