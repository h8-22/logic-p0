// # Number 1 Live Code 3

// ## **PLANT GROUPING**

// ## Restrictions
// - Mengikuti aturan umum saat briefing

// ## Objectives
// - Mampu menyelesaikan masalah yang diberikan
// - Mampu membuat `object literal`
// - Mengerti konsep dan cara penggunaan `conditional`
// - Mengerti konsep dan cara penggunaan `looping`
// - Mengerti konsep dan cara penggunaan `modular function`
// - Mampu mengakses informasi dari type data `array of object`

// ## Directions

// Kebun Raya Bogor akan melakukan pengelompokan tanaman berdasarkan family tanaman tersebut. Pada database mereka, terdapat berbagai macam jenis tanaman yang di simpan dalam bentuk data array of object.

// Buatlah sebuah program yang akan menampilkan informasi tanaman tertua berdasarkan familynya, serta tentukan tinggi rata-rata dari seluruh tanaman.

// Untuk mengerjakan project tersebut, kamu membagi pekerjaanmu ke dalam function-function, terdapat 2 function untuk memudahkanmu, yaitu :

// ### Function `calculateAverage`

// - Function `calculateAverage` digunakan untuk menghitung tinggi rata-rata dari seluruh tanaman.
// - Input :
//   - Parameter `data` berupa `array of object`
// - Output :
//   - Berupa `number`.

// ### Examples
// ```js

function calculateAverage(data) {
    // Your code here
    let total = 0;
    for (let i = 0; i < data.length; i++) {
        const plant = data[i];
        const plantHeight = plant["height"];
        total += plantHeight;
    }
    return total / data.length;
}


// let plantData = [
//     { name: "Jeruk Bali", height: 2.4, age: 2, family: "Rutaceae" },
//     { name: "Pisang Susu", height: 1, age: 0.4, family: "Musaceae" },
//     { name: "Mangga Arumanis", height: 10.3, age: 5.5, family: "Anacardiaceae" },
//     { name: "Jeruk Purut", height: 3.3, age: 2.1, family: "Rutaceae" },
//     { name: "Mangga indramayu", height: 6.3, age: 3.6, family: "Anacardiaceae" },
//     { name: "Pisang Ambon", height: 1.2, age: 0.3, family: "Musaceae" },
//     { name: "Mangga Madu", height: 5.3, age: 2.5, family: "Anacardiaceae" },
//     { name: "Pisang Raja", height: 2.3, age: 0.5, family: "Musaceae" },
//     { name: "Jeruk Nipis", height: 2.3, age: 1.4, family: "Rutaceae" },
//     { name: "Mangga Golek", height: 4.7, age: 3.5, family: "Anacardiaceae" },
// ];

// console.log(calculateAverage(plantData));
// 3.91
// ```

// ### Function `plantGrouping`

// - Function `plantGrouping` digunakan untuk mendapatkan informasi tanaman tertua berdasarkan familynya.
// - Tanaman tertua ditentukan dari property `age` dalam family tersebut.
// - Input :
//   - Parameter `data` berupa `array of object`
// - Output :
//   - Berupa `object` dengan property family-family dari tanaman dan `averageHeight`.
//   - Jika panjang parameter `data` kurang dari 3, maka outputnya `data tidak lengkap`.
//   - Jika parameter `data` berupa `undefined`, maka outputnya `invalid input`.
// - Function `plantGrouping` akan memanggil function `calculateAverage` untuk mengisi value dari property `averageHeight`.

// ### Examples
// ```js
function plantGrouping(data) {
    // Your code here
    let resultObj = {};
    for (let i = 0; i < data.length; i++) {
        const plant = data[i];
        let plantAge = plant["age"];
        let plantFamily = plant["family"];

        if (!resultObj[plantFamily]) {
            resultObj[plantFamily] = {
                oldestPlant: {
                    name: plant.name,
                    age: plantAge,
                    height: plant.height
                }
            }
        } else { 
            if (resultObj[plantFamily]["oldestPlant"]["age"] < plantAge) {
                resultObj[plantFamily]["oldestPlant"]["name"] = plant.name;
                resultObj[plantFamily]["oldestPlant"]["age"] = plantAge;
                resultObj[plantFamily]["oldestPlant"]["height"] = plant.height;
            }
        }
    }
    resultObj["averageAge"] = calculateAverage(data);
    return resultObj
}

let plantData = [
    { name: "Jeruk Bali", height: 2.4, age: 2, family: "Rutaceae" },
    { name: "Pisang Susu", height: 1, age: 0.4, family: "Musaceae" },
    { name: "Mangga Arumanis", height: 10.3, age: 5.5, family: "Anacardiaceae" },
    { name: "Jeruk Purut", height: 3.3, age: 2.1, family: "Rutaceae" },
    { name: "Mangga indramayu", height: 6.3, age: 3.6, family: "Anacardiaceae" },
    { name: "Pisang Ambon", height: 1.2, age: 0.3, family: "Musaceae" },
    { name: "Mangga Madu", height: 5.3, age: 2.5, family: "Anacardiaceae" },
    { name: "Pisang Raja", height: 2.3, age: 0.5, family: "Musaceae" },
    { name: "Jeruk Nipis", height: 2.3, age: 1.4, family: "Rutaceae" },
    { name: "Mangga Golek", height: 4.7, age: 3.5, family: "Anacardiaceae" },
];

console.log(plantGrouping(plantData));
/*
{
  Rutaceae: {
    oldestPlant: {
      name: 'Jeruk Purut',
      age: 2.1,
      height: 3.3
    }
  },
  Musaceae: {
    oldestPlant: {
      name: 'Pisang Raja',
      age: 0.5,
      height: 2.3
    }
  },
  Anacardiaceae: {
    oldestPlant: {
      name: 'Mangga Arumanis',
      age: 5.5,
      height: 10.3
    }
  },
  averageHeight: 3.91
}
*/

// console.log(plantGrouping([
//     { name: "Jeruk Bali", height: 2.4, age: 2, family: "Rutaceae" },
//     { name: "Pisang Susu", height: 1, age: 0.4, family: "Musaceae" }
// ]));
// data tidak lengkap

// console.log(plantGrouping());
// invalid input
// ```
