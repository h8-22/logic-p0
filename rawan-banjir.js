function kotaTerendah(data) {
  // Your code here
  let lowestMdpl = Number.MAX_VALUE;
  let lowestCityMdpl = "";
  for (let i = 0; i < data.length; i++) {
    const cityMdpl = data[i]["mdpl"];
    if(cityMdpl < lowestMdpl){
      lowestMdpl = cityMdpl;
      lowestCityMdpl = data[i];
    }
  }
  return lowestCityMdpl;
}

function rawanBanjir(data) {
  // Your code here

  if(!data){
    return "invalid input";
  }

  if(data.length <= 3){
    return "data tidak lengkap"
  }

  let potency = {
    potensiRendah: [],
    potensiSedang: [],
    potensiTinggi: []
  }

  for (let i = 0; i < data.length; i++) {
    const checkCity = data[i];
    let prevCity = data[i-1];
    let nextCity = data[i+1];
    
    if(!prevCity || !nextCity){
      continue;
    }

    if(checkCity["mdpl"] < prevCity["mdpl"] && checkCity["mdpl"] < nextCity["mdpl"]){
      potency["potensiTinggi"].push(checkCity.city)
    } else if(checkCity["mdpl"] > nextCity["mdpl"] && checkCity["mdpl"] > nextCity["mdpl"]){
      potency["potensiRendah"].push(checkCity.city)
    } else {
      potency["potensiSedang"].push(checkCity.city)
    }
  }
  potency["daerahTerendah"] = kotaTerendah(data);
  return potency;
}

let cities = [
  { city: "Tangerang", mdpl: 400 },
  { city: "Jakarta Selatan", mdpl: 25 },
  { city: "Bekasi", mdpl: 350 },
  { city: "Karawang", mdpl: 275 },
  { city: "Purwakarta", mdpl: 500 },
  { city: "Sragen", mdpl: 50 },
  { city: "Mojokerto", mdpl: 150 },
  { city: "Sidoarjo", mdpl: 175 },
  { city: "Pasuruan", mdpl: 250 },
  { city: "Probolinggo", mdpl: 50 }
]

console.log(rawanBanjir(cities));
// /*
// {
//   potensiRendah: [ 'Bekasi', 'Purwakarta', 'Pasuruan' ],
//   potensiSedang: [ 'Mojokerto', 'Sidoarjo' ],
//   potensiTinggi: [ 'Jakarta Selatan', 'Karawang', 'Sragen' ],
//   daerahTerendah: { city: 'Jakarta Selatan', mdpl: 25 }
// }
// */

// console.log(rawanBanjir([
//   { city: "Tangerang", mdpl: 400 },
//   { city: "Jakarta Selatan", mdpl: 25 },
// ]));
// // data tidak lengkap

// console.log(rawanBanjir());
// // invalid input

module.exports = {
  kotaTerendah,
  rawanBanjir
};
