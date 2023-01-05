/*

Seseorang  ingin membeli minuman-minuman karena kebetulan sedang ada promosi dengan diskon maksimal 40%.
Semua sellers direpresentasikan dengan array bernama "sellers", yang memiliki properti berupa object juga.

satu sellers, misal "Kokumi" menjual barang-barang yang terdapat di items dan dia sedang memberikan promo diskon sebesar
"discount" (40%).

Implementasikan function beliTermurah yang akan menerima input berupa minuman yang ingin dibeli oleh user.
Function akan mengoutput hasil berupa harga dan rekomendasi tempat membeli minuman-minuman tersebut dengan harga
yang paling murah.

*/

function beliTermurah(toBuy) {
    let sellers = [
        {
            seller: "BobaFett",
            items: [
                { name: "Fett Drink", price: 30000 },
                { name: "Dragon Boba Juice", price: 40000 },
                { name: "Star Big Boba", price: 25000 },
            ],
            discount: 0.15,
        },
        {
            seller: "BobaFest",
            items: [
                { name: "Fett Drink", price: 30000 },
                { name: "Dragon Boba Juice", price: 40000 },
                { name: "Star Big Boba", price: 25000 },
            ],
            discount: 0.35,
        },
        {
            seller: "ChaTime",
            items: [
                { name: "Fett Drink", price: 18000 },
                { name: "Dragon Boba Juice", price: 24000 },
                { name: "Star Big Boba", price: 21000 },
            ],
            discount: 0.1,
        },
        {
            seller: "Kokumi",
            items: [
                { name: "Fett Drink", price: 32000 },
                { name: "Dragon Boba Juice", price: 42000 },
                { name: "Star Big Boba", price: 27000 },
            ],
            discount: 0.4,
        },
    ];

    
    let cheapest = Number.MAX_VALUE
    let index = 0; 
    // console.log(sellers[0]["items"][0]["price"]);
    console.log(sellers[0]["items"][2]["name"] === toBuy);
    for (let i = 0; i < sellers.length; i++) {
        for (let j = 0; j < sellers[i]["items"].length; j++) {
            // const element = sellers["items"][j];
            let total = 0;
            if(sellers[i]["items"][j]["name"] === toBuy){
                total = sellers[i]["items"][j]["price"] * (1 - sellers[i]["discount"]);
                if(total < cheapest){
                    cheapest = total;
                    index = i;
                }
            }
        }
    }
    let store = sellers[index]["seller"]
    return `${toBuy} bisa dibeli dengan harga paling murah ${cheapest} di ${store} `;
}


console.log(beliTermurah("Star Big Boba"));
// Star Big Boba bisa dibeli dengan harga paling murah 16200 di Kokumi

/*
Star Big Boba

BobaFett => 25000 - 15% = 21250
BobaFest => 25000 - 35% = 16250
ChaTime => 21000 - 10% = 18900
Kokumi => 27000 - 40% = 16200 <-- termurah

expected: 
Star Big Boba bisa dibeli dengan harga paling murah 16200 di Kokumi
*/