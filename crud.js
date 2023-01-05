let produk = [
  {
    ukuran : 350,
    favorite : true,
    // mandatory: true ,
    warna: ['merah','kuning','hijau'],
    shape: ['kotak','lonjong'],
    harga: 350000,
    name: 'Botol 350 ml',
  },
  {
    name: 'Botol 650 ml',
    ukuran : 650,
    favorite: true,
    mandatory: false,
    warna: ['merah','kuning','hijau','pastel','biru','ungu','pastel','pastel'],
    shape: ['lonjong'],
    harga: 650000
  },
  {
    name: 'Botol 1lt',
    ukuran: 1000,
    favorite: false,
    warna: ['merah','kuning','hijau','biru','pastel'],
    shape: ['kotak','lonjong'],
    harga: 1000000
  },
  {
    name: 'Botol 2lt',
    ukuran: 2000,
    favorite: false,
    warna: ['kuning','hijau'],
    shape: ['kotak','persegi'],
    harga: 2000000
  }
]


let user = [
  {
    username: 'asd',
    password: 'asddsa',
    active: true
  }
  ,{
    username: 'asd',
    password: 'asddsa',
    active: false
  }
]


// CRUD
// create read update delete
// 1 . create botol baru

let botolBaru = {
  name: 'Botol 3lt',
  ukuran: 3000,
  favorite: false,
  warna: ['kuning','hijau'],
  shape: ['kotak'],
  harga: 300000
}

produk.push(botolBaru)

// console.log(produk)

// 2. read , filter atau munculkan produk yang favorite saja

let produkFavorite = []

for( let i = 0 ; i < produk.length ; i++){
  // console.log(produk[i])
  // console.log(i, '  ke sekian')
  if(produk[i]['favorite']){
    // jika produk[i]['favorite'] == true
    produkFavorite.push(produk[i])
    // maka push ke produkFavorite
  }
}

// console.log(produkFavorite)

// 3. read , munculkan produk dengan harga tertinggi 

let max = Number.MIN_VALUE
// min infinity itu brarti angka paling kecil banget
let produkTertinggi = {}

console.log(max)

for( let i = 0 ; i < produk.length ; i++){
  if(produk[i]['harga']>max){
    max = produk[i]['harga']
    produkTertinggi = produk[i]
  }
}

console.log(produkTertinggi)

// 4. Munculkan produk dengan warna pastel sekali aja

let produkDenganWarnaPastel = []

for( let i = 0 ; i < produk.length ; i++){
  for( let j = 0 ; j < produk[i]['warna'].length ; j++){
    if(produk[i]['warna'][j] == 'pastel'){
      produkDenganWarnaPastel.push(produk[i])
      break;
    }
  }
}

console.log(produkDenganWarnaPastel)

// Tidak mau pengulangan brarti break
// Kalau mau filtrasi pake flag

// 5. Munculkan produk yang tidak punya warna pastel

let produkTidakWarnaPastel = []

for( let i = 0 ; i < produk.length ; i++){
  let flag = false
  
  for( let j = 0 ; j < produk[i]['warna'].length ; j++){
    if(produk[i]['warna'][j] == 'pastel'){
      flag = true
      break ;
    }
  }

  if(!flag){
    produkTidakWarnaPastel.push(produk[i])
  }

}

console.log(produkTidakWarnaPastel)

// 5. update , ubah botol 1 lt menjadi favorite

for(let i in produk){
  console.log(produk[i])
  if(produk[i]['name']=='Botol 1lt'){
    produk[i]['favorite'] = 'trueee'
  }
}

console.log(produk)


// 6. shape: ['kotak','lonjong']
// Grouping name produk sesuai shape 
// let obj = {kotak:[],lonjong:[],persegi:[]}

// in itu di array dan object , of di array


let obj = {}

for(let i in produk){
  for(let j in produk[i]['shape']){
    if(!obj[produk[i]['shape'][j]]){
      obj[produk[i]['shape'][j]]=[]
    }
    obj[produk[i]['shape'][j]].push(produk[i]['name'])
  }
}

console.log(obj)