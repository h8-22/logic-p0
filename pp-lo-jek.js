function splitData(drivers) {
    //code here
    let result = [];

    for (let x = 0; x < drivers.length; x++) {
        let perDriver = drivers[x];
        let belanjaan = perDriver.groceries

        let temp = [];
        for (let y = 0; y < belanjaan.length; y++) {
            let perBarang = belanjaan[y];

            let namaBarang = perBarang[0];
            let jumlahBarang = perBarang[1];

            temp.push(namaBarang);
            temp.push(jumlahBarang);
        }

        result.push(temp);
    }

    return result;
} // Done

function calculateMoney(groceriesDrivers) {
    let listGroceries = [
        { name: "Susu", price: 10000 },
        { name: "Roti", price: 20000 },
        { name: "Mie", price: 5000 },
        { name: "Telur", price: 7000 },
        { name: "Sabun", price: 3000 },
        { name: "Bakso", price: 25000 },
    ];
    //code here
    let result = [];

    for (let x = 0; x < groceriesDrivers.length; x++) {
        let belanjaanPerDriver = groceriesDrivers[x];

        let totalBelanja = 0;

        for (let y = 0; y < belanjaanPerDriver.length; y += 2) {
            let namaItem = belanjaanPerDriver[y];
            let jumlahItem = belanjaanPerDriver[y + 1];

            for (let z = 0; z < listGroceries.length; z++) {
                let perObject = listGroceries[z];
                let { name, price } = perObject;

                if (namaItem === name) {
                    totalBelanja += (jumlahItem * price);
                }
            }

        }

        result.push(totalBelanja);
    }

    return result;
} // Done

function calculateDistance(drivers) {
    //code here
    let result = [];

    for (let x = 0; x < drivers.length; x++) {
        let perDriver = drivers[x];
        let waktu = perDriver.driveTime;

        let kilo = (waktu * 500) / 1000;

        result.push(kilo);
    }

    return result;
} // Done

function reward(data) {
    //code here
    let result = {};

    let splittedData = splitData(data);
    let calculatedMoney = calculateMoney(splittedData);
    let distance = calculateDistance(data);

    for (let x = 0; x < data.length; x++) {
        let perDriver = data[x];
        let namaDriver = perDriver.name;
        let moneyPerDriver = calculatedMoney[x];
        let distancePerDriver = distance[x];

        let currentReward = "";

        if (moneyPerDriver >= 100_000 && distancePerDriver >= 50) {
            currentReward = "Rumah";
        } else if (
            moneyPerDriver <= 99_999 &&
            moneyPerDriver >= 50_000 &&
            distancePerDriver <= 49 &&
            distancePerDriver >= 20
        ) {
            currentReward = "Mobil";
        } else if (
            moneyPerDriver >= 20_000 &&
            moneyPerDriver <= 49_999 &&
            distancePerDriver >= 10 &&
            distancePerDriver <= 19
        ) {
            currentReward = "Motor";
        } else {
            currentReward = "NoReward"
        }

        if (!result[currentReward]) {
            result[currentReward] = [];
        }
        result[currentReward].push(namaDriver);
    }

    return result;
} // Done

console.log(
    reward([
        {
            name: "Samir",
            groceries: [
                ["Susu", 2],
                ["Roti", 4],
                ["Mie", 5],
                ["Telur", 2],
                ["Bakso", 1],
            ],
            driveTime: 134, //minutes,
        },
        {
            name: "Menmen",
            groceries: [
                ["Susu", 1],
                ["Roti", 2],
                ["Telur", 3],
            ],
            driveTime: 90, //minutes
        },
        {
            name: "Mika",
            groceries: [
                ["Susu", 1],
                ["Roti", 1],
            ],
            driveTime: 22, //minutes
        },
        {
            name: "Eko",
            groceries: [
                ["Susu", 1],
                ["Roti", 2],
                ["Mie", 3],
                ["Telur", 3],
                ["Bakso", 2],
            ],
            driveTime: 134, //minutes,
        },
        {
            name: "Fajrin",
            groceries: [
                ["Susu", 1],
                ["Roti", 2],
                ["Bakso", 2],
                ["Telur", 3],
            ],
            driveTime: 90, //minutes
        },
        {
            name: "Abdullah",
            groceries: [
                ["Susu", 1],
                ["Roti", 2],
                ["Bakso", 5],
            ],
            driveTime: 120, //minutes,
        },
        {
            name: "Varneh",
            groceries: [
                ["Bakso", 1],
                ["Roti", 1],
            ],
            driveTime: 26, //minutes
        },
        {
            name: "Basil",
            groceries: [
                ["Susu", 1],
                ["Roti", 2],
                ["Bakso", 2],
                ["Telur", 5],
            ],
            driveTime: 40, //minutes
        },
    ])
);

/*
  BEFORE
  {
    Rumah: [ 'Samir', 'Eko', 'Abdullah' ],
    Mobil: [ 'Menmen' ],
    NoReward: [ 'Mika', 'Fajrin', 'Varneh', 'Basil' ]
  }
 
  AFTER
  {
    Rumah: [ 'Samir', 'Eko', 'Abdullah' ],
    Mobil: [ 'Menmen' ],
    Motor: [ 'Mika', 'Varneh' ],
    NoReward: [ 'Fajrin', 'Basil' ]
  }
*/