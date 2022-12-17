let text = "abaacbbad";
// abcd
// let text = 'zaahijkhukz'
// zahijku
let newText = ""; // abcd

for (let i = 0; i < text.length; i++) {
  let flag = true;
  for (let j = 0; j < newText.length; j++) {
    if (text[i] === newText[j]) {
      flag = false;
    }
  }
  if (flag) {
    newText += text[i];
  }
}l
console.log(newText);
