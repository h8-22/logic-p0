// // var exercise = "<>";
// // var userInput = "<>";
// // let score = 99;
// // let category;

// // // Anda mendapatkan score 50 / 70. Persentase: 71%, Kategori : Good
// // // console.log(exercise.length);
// // // console.log(userInput.length);
// // // console.log(exercise.length === userInput.lenght);
// // if(exercise.length === userInput.length) {
// //   for (let i = 0; i < exercise.length; i++) {
// //     if (exercise[i] === userInput[i]) {
// //       score += 10;
// //     }
// //   }
// //   //   console.log("test");
// //   // }

// //   let totalScore = (score / exercise.length) * 10;
// //   console.log(totalScore);
// //   if (totalScore == 100) {
// //     category = "Perfect";
// //   }
// //   if (totalScore >= 80) {
// //     category = "Great";
// //   }
// //   if (totalScore >= 60) {
// //     category = "Good";
// //   } else {
// //     category = "Bad";
// //   }

// //   console.log(
// //     `Anda mendapatkan score ${score} / ${
// //       exercise.length * 10
// //     }. Presentase ${Math.floor(totalScore)}, Kategori : ${category}`
// //   );
// // } else {
// //     console.log("Input yang anda masukkan tidak lengkap!");
// // }

// // // let test = "Anda mendapatkan score 50 / 70. Persentase: 71%, Kategori : Good"
// // // let result "Anda mendapatkan score 50 / 70. Presentase: 71%, Kategori : Good"

// // // console.log(test === result)

// /*

// Seseorang  ingin membeli minuman-minuman karena kebetulan sedang ada promosi dengan diskon maksimal 40%.
// Semua sellers direpresentasikan dengan array bernama "sellers", yang memiliki properti berupa object juga.

// satu sellers, misal "Kokumi" menjual barang-barang yang terdapat di items dan dia sedang memberikan promo diskon sebesar
// "discount" (40%).

// Implementasikan function beliTermurah yang akan menerima input berupa minuman yang ingin dibeli oleh user.
// Function akan mengoutput hasil berupa harga dan rekomendasi tempat membeli minuman-minuman tersebut dengan harga
// yang paling murah.

// */

// function beliTermurah(toBuy) {
//     let sellers = [
//         {
//             seller: "BobaFett",
//             items: [
//                 { name: "Fett Drink", price: 30000 },
//                 { name: "Dragon Boba Juice", price: 40000 },
//                 { name: "Star Big Boba", price: 25000 },
//             ],
//             discount: 0.15,
//         },
//         {
//             seller: "BobaFest",
//             items: [
//                 { name: "Fett Drink", price: 30000 },
//                 { name: "Dragon Boba Juice", price: 40000 },
//                 { name: "Star Big Boba", price: 25000 },
//             ],
//             discount: 0.35,
//         },
//         {
//             seller: "ChaTime",
//             items: [
//                 { name: "Fett Drink", price: 18000 },
//                 { name: "Dragon Boba Juice", price: 24000 },
//                 { name: "Star Big Boba", price: 21000 },
//             ],
//             discount: 0.1,
//         },
//         {
//             seller: "Kokumi",
//             items: [
//                 { name: "Fett Drink", price: 32000 },
//                 { name: "Dragon Boba Juice", price: 42000 },
//                 { name: "Star Big Boba", price: 27000 },
//             ],
//             discount: 0.4,
//         },
//     ];

    
// }

// // let a = Number.MAX_VALUE
// // console.log(a*0);
// console.log(Number.MIN_VALUE);

// let a = ["Enjoying Meme, Cooking"];

// let a = false;
// let b = false;
// if(a&&b){
//     console.log("test");
// }

/*looping pertama 
andre.
    looping kedua
    marsya
        looping ketiga
        expectation dari andre match apa engga sama traits punya marsya. 
        let flag = true
        looping keempat
        expectation dari marsya match apa engga sama traits punya andre. 
        let flag2 = true;
    flag1 flag2 -> push nama;



*/


// console.log(tinderMatch([
//     { name: 'Andre', gender: 'Men', traits: ['Dewasa', 'Tampan'], expectation: ['Cantik', 'Jujur', 'Kaya'] },
//     { name: 'Marsya', gender: 'Women', traits: ['Cantik', 'Kaya'], expectation: ['Kaya', 'Olahragawan'] },
//     { name: 'Dimas', gender: 'Men', traits: ['Pintar', 'Kaya'], expectation: ['Cantik', 'Pintar'] },
//     { name: 'Bella', gender: 'Women', traits: ['Cantik', 'Pintar'], expectation: ['Pintar', 'Jujur'] },
//     { name: 'Derpina', gender: 'Women', traits: ['Cantik', 'Sederhana', 'Rajin'], expectation: ['Pintar', 'Jujur', 'Baik'] },
//     // { name: 'Hitler', gender: 'Man', traits: ['Tampan', 'Kaya'], expectation: ['Cantik'] }
// ]))