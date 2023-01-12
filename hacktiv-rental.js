function carSelections(capacity, facility) {
    const car = {
      Premium: [
        {
          carName: 'Sprinter',
          brand: 'Mercedez-Benz',
          facilities: ['Wifi', 'Sunroof', 'TV'],
          fuel: 'Pertamax',
          price: 2000000
        },
        {
          carName: 'Traveller',
          brand: 'Peugeot',
          facilities: ['TV', 'Karaoke', 'Baby Seat', 'Wifi'],
          fuel: 'Pertamax',
          price: 1700000
        },
        {
          carName: 'V-Class',
          brand: 'Mercedez-Benz',
          facilities: ['Baby Seat', 'Massage Seat', 'Wifi', 'Sunroof', 'TV'],
          fuel: 'Pertamax',
          price: 2500000
        },
        {
          carName: 'Sedona',
          brand: 'Kia',
          facilities: ['Mini Fridge', 'Safe Box', 'TV', 'Karaoke'],
          fuel: 'Pertalite',
          price: 1500000
        }
      ],
      Regular: [
        {
          carName: 'e-NV200',
          brand: 'Nissan',
          facilities: ['TV', 'Karaoke', 'Baby Seat'],
          fuel: 'Pertalite',
          price: 1300000
        },
        {
          carName: 'HiAce',
          brand: 'Toyota',
          facilities: ['Baby Seat', 'Massage Seat', 'Wifi'],
          fuel: 'Pertalite',
          price: 1350000
        },
        {
          carName: 'NV350 CARAVAN',
          brand: 'Nissan',
          facilities: ['Wifi', 'Sunroof', 'TV', 'Karaoke'],
          fuel: 'Pertalite',
          price: 1400000
        },
        {
          carName: 'MINICAB MiEV',
          brand: 'Mitsubishi',
          facilities: ['Mini Fridge', 'Safe Box', 'Sunroof', 'Baby Seat'],
          fuel: 'Pertamax',
          price: 1200000
        }
      ]
    }
    // Insert your code here
    let arrResult = [];
    let type = "";
    if (capacity < 10) {
      type = car.Regular;
    } else if (capacity >= 10) {
      type = car.Premium;
    }
  
    for (let i = 0; i < type.length; i++) {
      const perCar = type[i];
      let facilityArr = perCar.facilities;
      // console.log(facility);
      for (let j = 0; j < facilityArr.length; j++) {
        const facilityChecker = facilityArr[j];
        if (facilityChecker === facility) {
          arrResult.push(perCar);
          break;
        }
      }
    }
    return arrResult;
  }
  
  //TEST CAR SELECTION
  // console.log(carSelections(2, 'Baby Seat'))
  /**
    [
       {
          carName: 'e-NV200',
          brand: 'Nissan',
          facilities: ['TV', 'Karaoke', 'Baby Seat'],
          fuel: 'Pertalite',
          price: 1300000
        },
        {
          carName: 'HiAce',
          brand: 'Toyota',
          facilities: ['Baby Seat', 'Massage Seat', 'Wifi'],
          fuel: 'Pertalite',
          price: 1350000
        },
        {
          carName: 'MINICAB MiEV',
          brand: 'Mitsubishi',
          facilities: ['Mini Fridge', 'Safe Box', 'Sunroof', 'Baby Seat'],
          fuel: 'Pertamax',
          price: 1200000
        }
  
    ]
    */
  
  function getFuelPriceTotal(fuelType, destination) {
    // Insert your code here
    let distanceDatabyCity = {
      Bogor: 60,
      Bandung: 120,
      Cirebon: 180,
      Jogja: 360
    }
    let fuel = {
      Pertamax: {
        distancePerLiter: 30,
        price: 8000
      },
      Pertalite: {
        distancePerLiter: 20,
        price: 7000
      }
    }
    let distance = (distanceDatabyCity[destination]);
    let totalPrice = distance / fuel[fuelType]["distancePerLiter"] * fuel[fuelType]["price"];
    return totalPrice;
  }
  
  //TEST GET FUEL PRICE TOTAL
  // console.log(getFuelPriceTotal('Pertalite', 'Jogja')) // 126000
  
  function getCarsInformation(customer) {
    // Insert your code here
    let arrResult = [];
    let filtered = carSelections(customer.passengers, customer.facility);
    // console.log(filtered);
    for (let i = 0; i < filtered.length; i++) {
      const perCar = filtered[i];
      let fuel = getFuelPriceTotal(perCar.fuel, customer.destination)
      // console.log(fuel);
      perCar.totalPrice = perCar.price + fuel;
      delete perCar.price
    }
    return filtered;
  }
  
  function selectCar(customer) {
  
    if(!customer){
      return "Tidak ada customer"
    }
  
    // Insert your code here
    let selectedCar;
    let cheapest = Number.MAX_VALUE;
    let carChoices = getCarsInformation(customer);
  
    if(carChoices.length < 1){
      return "Tidak ada mobil yang memenuhi permintaan customer"
    }
  
    // console.log(carChoices);
    for (let i = 0; i < carChoices.length; i++) {
      const perCar = carChoices[i];
      if(perCar.totalPrice < cheapest){
        cheapest = perCar.totalPrice;
        selectedCar = perCar;
      }
    }
    return selectedCar;
  }
  
  const sandita = {
    name: 'Sandita',
    destination: 'Jogja',
    passengers: 2,
    facility: 'Baby Seat'
  }
  
  //TEST GET CARS INFORMATION
  // console.log(getCarsInformation(sandita))
  
  /**
   [
    {
      carName: 'e-NV200',
      brand: 'Nissan',
      facilities: [ 'TV', 'Karaoke', 'Baby Seat' ],
      fuel: 'Pertalite',
      totalPrice: 1426000
    },
    {
      carName: 'HiAce',
      brand: 'Toyota',
      facilities: [ 'Baby Seat', 'Massage Seat', 'Wifi' ],
      fuel: 'Pertalite',
      totalPrice: 1476000
    },
    {
      carName: 'MINICAB MiEV',
      brand: 'Mitsubishi',
      facilities: [ 'Mini Fridge', 'Safe Box', 'Sunroof', 'Baby Seat' ],
      fuel: 'Pertamax',
      totalPrice: 1296000
    }
  ]
  **/
  
  console.log(selectCar(sandita))
  
  // /**
  //  {
  //   carName: 'MINICAB MiEV',
  //   brand: 'Mitsubishi',
  //   facilities: [ 'Mini Fridge', 'nSafe Box', 'Sunroof', 'Baby Seat' ],
  //   fuel: 'Pertamax',
  //   totalPrice: 1296000
  // }
  //  */
  
  // const sadewa = {
  //   name: 'Sadewa',
  //   destination: 'Bandung',
  //   passengers: 15,
  //   facility: 'Wifi'
  // }
  
  // console.log(selectCar(sadewa))
  
  // /**
  //   {
  //   carName: 'Traveller',
  //   brand: 'Peugeot',
  //   facilities: [ 'TV', 'Karaoke', 'Baby Seat', 'Wifi' ],
  //   fuel: 'Pertamax',
  //   totalPrice: 1732000
  // }
  //  */
  
  // const nakula = {
  //   name: 'Nakula',
  //   destination: 'Cirebon',
  //   passengers: 25,
  //   facility: 'Mini Fridge'
  // }
  
  // console.log(selectCar(nakula))
  
  // /**
  //   {
  //   carName: 'Sedona',
  //   brand: 'Kia',
  //   facilities: [ 'Mini Fridge', 'Safe Box', 'TV', 'Karaoke' ],
  //   fuel: 'Pertalite',
  //   totalPrice: 1563000
  // }
  //  */
  
  // const sahadeva = {
  //   name: 'Sahadeva',
  //   destination: 'Bandung',
  //   passengers: 5,
  //   facility: 'Karaoke'
  // }
  
  // console.log(selectCar(sahadeva))
  // /**
  //  {
  //   carName: 'e-NV200',
  //   brand: 'Nissan',
  //   facilities: [ 'TV', 'Karaoke', 'Baby Seat' ],
  //   fuel: 'Pertalite',
  //   totalPrice: 1342000
  // }
  //  */
  
  // const panda = {
  //   name: 'Panda',
  //   destination: 'Bandung',
  //   passengers: 10,
  //   facility: 'Sunroof'
  // }
  
  // console.log(selectCar(panda))
  // /**
  //   {
  //     carName: 'Sprinter',
  //     brand: 'Mercedez-Benz',
  //     facilities: [ 'Wifi', 'Sunroof', 'TV' ],
  //     fuel: 'Pertamax',
  //     totalPrice: 2032000
  //   }
  // */
  
  // const pandu = {
  //   name: 'Pandu',
  //   destination: 'Bandung',
  //   passengers: 5,
  //   facility: 'Smoking Area'
  // }
  
  // console.log(selectCar(pandu)) // Tidak ada mobil yang memenuhi permintaan customer
  
  // console.log(selectCar()) // Tidak ada customer
  
  module.exports = {
    carSelections,
    getFuelPriceTotal,
    getCarsInformation,
    selectCar
  }
  