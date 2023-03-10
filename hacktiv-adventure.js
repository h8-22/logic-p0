// # Hacktiv Adventure

// ## Restriction

// - Hanya boleh menggunakan built-in function yang diperbolehkan di README

// ## Objectives

// - Mampu menyelesaikan sebuah permasalahan dengan membuat kode Javascript.
// - Dapat mengakses data pada array, object dan array of object .
// - Mampu menggunakan dan menggabungkan modular function yang disediakan.
// - Mampu memanggil modular function di dalam sebuah loop
// - Mampu menggunakan looping.
// - Mampu melakukan perbandingan dua data.
// - Mampu membuat array of object baru dari hasil proses yang dilakukan

// ## Direction

// Disebuah kerajaan bernama Cribia terdapat sebuah guild. Pada guild ini terdapat adventurer-adventurer yang memiliki kelas dan status kemampuan yang berbeda-beda yaitu `Swordman`, `Mage`, `Tank`, dan `Assassin`.
// Kamu baru saja ditunjuk menjadi pimpinan di guild tersebut, dan ditugaskan untuk memperbaiki sistem guild. Hal-hal yang harus dilakukan untuk memperbaiki sistem guild diantaranya:

// - Membuat id untuk masing-masing adventurer karena ada beberapa adventurer yang memiliki nama sama.
// - Mengklasifikasikan ranking adventurer berdasarkan rata-rata status kemampuan dan menentukan salary berdasarkan ranking.
// - Menentukan siapa yang akan dikirim mengikuti permintaan client
// 
// ### Release 1 - `generateId`

// - Function ini memiliki sebuah parameter berupa object dan mengembalikan sebuah string.
// - Function ini berfungsi untuk membuat id unik untuk setiap adventurer.
// - Id terdiri dari:

//   - umur adventurer
//   - length nama adventurer
//   - huruf pertama dari nama adventurer

// **Example**

// ```js
const arthur = {
  name: 'Arthur',
  age: 28,
  status: {attack: 890, defense: 700, agility: 800, magic: 870}
}

function generateId(adventurer) {
  // Insert your code here
  let id = adventurer["age"] + String(adventurer["name"].length) +  adventurer["name"][0]
  return id;
}

console.log(generateId(arthur)) // 286A
// ```

// ### Release 2 - `generateRankingAndSalary`

// - Function ini tidak menerima parameter dan akan mengembalikan **array of object**.
// - Function ini berfungsi untuk mengklasifikasikan ranking berdasarkan rata-rata `status` adventurer dan menentukan salary berdasarkan ranking.
// - Klasifikasi ranking dan salary:
//   - Jika rata-rata `status` lebih dari 800 maka ranking-nya adalah `A` dan salary-nya adalah `42000`
//   - Jika rata-rata `status` diantara 650 hingga 800 maka ranking-nya adalah `B`dan salary-nya adalah `20000`
//   - Jika rata-rata `status` lebih kecil dari 650 maka ranking-nya adalah `C` dan salary-nya adalah `9000`
// - Function ini akan mengembalikan **array of object**, dimana setiap **object** didalamnya akan memiliki properti:
//   - `id` => id dari adventurer tersebut
//   - `name` => nama dari adventurer tersebut
//   - `age` => umur dari adventurer tersebut
//   - `class` => class dari adventurer tersebut
//   - `rank` => rank dari adventurer tersebut
//   - `salary` => salary dari adventurer tersebut

// **Hints**

// - Gunakan function untuk mengenerate `ID` pada function ini
// - `status` dari seorang adventurer **pasti** terdiri dari: `attack`, `defense`, `agility`, `magic`

// **Example**

// ```js
function generateRankingAndSalary() {
  // Insert your code here
  const players = [
    {name: 'Arthur', age: 28, status: {attack: 890, defense: 700, agility: 800, magic: 870}, class: 'Swordman'},
    {name: 'Loren', age: 28, status: {magic: 400, attack: 920, defense: 800, agility: 760}, class: 'Swordman'},
    {name: 'Nimo', age: 38, status: {magic: 200, attack: 300, defense: 100, agility: 200}, class: 'Swordman'},
    {name: 'Jared', age: 25, status: {attack: 700, defense: 640, agility: 520, magic: 1200}, class: 'Mage'},
    {name: 'Arthur', age: 16, status: {agility: 520, attack: 550, defense: 470, magic: 800}, class: 'Mage'},
    {name: 'Takahasi', age: 23, status: {agility: 130, attack: 550, defense: 670, magic: 890}, class: 'Mage'},
    {name: 'Takeda', age: 28, status: {attack: 640, agility: 520, defense: 1100, magic: 400}, class: 'Tank'},
    {name: 'Takahasi', age: 21, status: {attack: 400, agility: 312, defense: 815, magic: 500}, class: 'Tank'},
    {name: 'Yuki', age: 22, status: {attack: 450, agility: 520, defense: 1000, magic: 300}, class: 'Tank'},
    {name: 'Nagisa', age: 16, status: {defense: 320, agility: 1000, attack: 580, magic: 520}, class: 'Assasin'},
    {name: 'Nimo', age: 20, status: {defense: 400, agility: 230, attack: 611, magic: 700}, class: 'Assasin'},
    {name: 'Loren', age: 30, status: {defense: 516, agility: 961, attack: 977, magic: 300}, class: 'Assasin'}
  ]
  // Insert your code here
  let arrayResult = [];
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    let pla
    
  }
}

console.log(generateRankingAndSalary())
/**
 [
  {
    id: '286A',
    name: 'Arthur',
    age: 28,
    class: 'Swordman',
    rank: 'A',
    salary: 42000
  },
  {
    id: '285L',
    name: 'Loren',
    age: 28,
    class: 'Swordman',
    rank: 'B',
    salary: 20000
  },
  {
    id: '384N',
    name: 'Nimo',
    age: 38,
    class: 'Swordman',
    rank: 'C',
    salary: 9000
  },
  {
    id: '255J',
    name: 'Jared',
    age: 25,
    class: 'Mage',
    rank: 'B',
    salary: 20000
  },
  {
    id: '166A',
    name: 'Arthur',
    age: 16,
    class: 'Mage',
    rank: 'C',
    salary: 9000
  },
  {
    id: '238T',
    name: 'Takahasi',
    age: 23,
    class: 'Mage',
    rank: 'C',
    salary: 9000
  },
  {
    id: '286T',
    name: 'Takeda',
    age: 28,
    class: 'Tank',
    rank: 'B',
    salary: 20000
  },
  {
    id: '218T',
    name: 'Takahasi',
    age: 21,
    class: 'Tank',
    rank: 'C',
    salary: 9000
  },
  {
    id: '224Y',
    name: 'Yuki',
    age: 22,
    class: 'Tank',
    rank: 'C',
    salary: 9000
  },
  {
    id: '166N',
    name: 'Nagisa',
    age: 16,
    class: 'Assasin',
    rank: 'C',
    salary: 9000
  },
  {
    id: '204N',
    name: 'Nimo',
    age: 20,
    class: 'Assasin',
    rank: 'C',
    salary: 9000
  },
  {
    id: '305L',
    name: 'Loren',
    age: 30,
    class: 'Assasin',
    rank: 'B',
    salary: 20000
  }
]
 */
// ```

// ### Release 3 - `fulfillClientRequest`

// - Function `fulfillClientRequest` memiliki satu buah parameter berupa sebuah **array multi dimensi** kumpulan class dan rank yang diminta oleh client.
// - **array multi dimensi** tersebut akan memiliki format `[class, rank]`.
// - Function `fulfillClientRequest` akan mengembalikan **array of object** berupa kumpulan adventurer yang memiliki `class` dan `rank` seperti yang diminta oleh client.
// - Setiap **object** pada **array of object** yang dikembalikan akan memiliki properti:
//   - `id` => id dari adventurer tersebut
//   - `name` => nama dari adventurer tersebut
//   - `age` => umur dari adventurer tersebut
//   - `class` => class dari adventurer tersebut
//   - `rank` => rank dari adventurer tersebut
//   - `salary` => salary dari adventurer tersebut

// **Notes**

// - List `adventurer` yang bisa diambil dapat menggunakan hasil dari function `generateRankingAndSalary`

// **Example**

// ```js
const request = [
  ['Swordman', 'A'],
  ['Mage', 'B'],
  ['Tank', 'C']
]

function fulfillClientRequest(requests) {
  // Insert your code here
}

console.log(fulfillClientRequest(request))
/**
 [
  {
    id: '286A',
    name: 'Arthur',
    age: 28,
    class: 'Swordman',
    rank: 'A',
    salary: 42000
  },
  {
    id: '255J',
    name: 'Jared',
    age: 25,
    class: 'Mage',
    rank: 'B',
    salary: 20000
  },
  {
    id: '218T',
    name: 'Takahasi',
    age: 21,
    class: 'Tank',
    rank: 'C',
    salary: 9000
  },
  {
    id: '224Y',
    name: 'Yuki',
    age: 22,
    class: 'Tank',
    rank: 'C',
    salary: 9000
  }
]
*/
// ```

// ### Release 4 - `adventurerInvoice`

// - Function `adventurerInvoice` memiliki satu parameter. Parameter pertama berupa **object** berisi informasi mengenai client yang akan menyewa `adventurer`.
// - Function `adventurerInvoice` berfungsi untuk mengembalikan sebuah `object` yang akan berisi properti:

//   - `name` => Nama dari client tersebut
//   - `players` => Kumpulan dari `adventurer` sesuai dengan permintaan client
//   - `totalSalary` => Jumlah salary seluruh player yang harus dibayarkan oleh client

// - Buatlah sebuah validasi pada function `adventurerInvoice` dengan syarat:

//   - Jika **object** client yang dikirimkan adalah falsy maka tampilkan: `Tidak ada client yang dikirimkan`

// **Example**

// ```js
const hiruma = {
  name: 'hiruma',
  adventureRequests: ['Swordman', 'Swordman', 'Mage', 'Tank', 'Tank', 'Assasin']
}

function adventurerInvoice(client) {
  // Insert your code here
}

console.log(adventurerInvoice(hiruma))
/**
   {
  name: 'hiruma',
  players: [
    {
      id: '286A',
      name: 'Arthur',
      age: 28,
      class: 'Swordman',
      rank: 'A',
      salary: 42000
    },
    {
      id: '255J',
      name: 'Jared',
      age: 25,
      class: 'Mage',
      rank: 'B',
      salary: 20000
    },
    {
      id: '218T',
      name: 'Takahasi',
      age: 21,
      class: 'Tank',
      rank: 'C',
      salary: 9000
    },
    {
      id: '224Y',
      name: 'Yuki',
      age: 22,
      class: 'Tank',
      rank: 'C',
      salary: 9000
    }
  ],
  totalSalary: 80000
}
 */
// ```
