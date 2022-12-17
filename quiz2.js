let input = "Test string"; // TeSt sTrInG
// let input = "Weekends are just a myth"; // WeEkEnDs aRe jUsT A MyTh
// let input = "Every journey has its final day, don't rush"; // EvErY JoUrNeY HaS ItS FiNaL DaY, dOn't rUsH

let result = "";

// Code Here

// yang index genap di huruf besar.
let i = 0;
while(i < input.length){
    if(i % 2 == 0){
        result += input[i].toUpperCase()
    } else {
        result += input[i]
    }
    i++;
}

console.log(1%2);