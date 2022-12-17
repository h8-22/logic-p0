function shoutOut(){
    return "Halo function";
}
console.log(shoutOut());

function calculateMultiply(a, b){
    return a * b;
}
let num1 = 5; 
let num2 = 6; 

var hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian);

function processSentence(a,b,c,d){
    return `Nama saya ${a}, umur saya ${b} tahun, alamat saya di ${c}, dan saya punya hobby yaitu ${d}!`
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogyakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);

