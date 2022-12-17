let num = "010101";
let nyala = 0;
let mati = 0;

for(let i = 0; i < num.length; i++){
    if(num[i] === "0"){
        mati ++;
    } else if (num[i] === "1"){
        nyala++;
    }
}
console.log(`lampu nyala ada ${nyala}`);
console.log(`lampu mati ada ${mati}`);


// let angka = "12345"
// console.log(angka[1]);