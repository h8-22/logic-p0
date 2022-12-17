let kata = "kataki";
let reverse = "";

for(let i = kata.length-1; i >= 0; i--){
    // console.log(i);
    // console.log(kata[i]);
    reverse += kata[i];
}
// console.log(kata);
// console.log(reverse);
console.log(kata == reverse);