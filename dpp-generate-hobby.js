const data = [
    ['Basil', 27, 'Enjoying Meme'],
    ['Zul Fikar', 27, 'Enjoying Meme'],
    ['Damian Stapelkamp', 41, 'Cooking'],
    ['Arthur', 46, 'Cooking'],
    ['Luffy', 20, 'Adventure'],
    ['Brett Yang', 25, 'Playing Violin'],
    ['Eddy Chen', 49, 'Cooking'],
    ['Okumura Rin', 16, 'Playing Violin'],
    ['Linn Yang', 45, 'Playing Violin'],
    ['Alexander', 17, 'Enjoying Meme'],
    ['Kosasih', 45, 'Cooking']
]

function createArrayOfObject(array) {
    // Code here
    let result = [];

    for (let x = 0; x < array.length; x++) {
        let perUser = array[x];
        let [name, age, hobby] = perUser;

        result.push({ name, age, hobby })
    }

    return result;
} // Done 
//  clear

// console.log(createArrayOfObject(data));

function findHobbies(users, hobbies) {
    // Code here
    let result = [];

    for (let x = 0; x < hobbies.length; x++) {
        let perNamaHobi = hobbies[x];

        let currentHobby = {
            name: perNamaHobi,
            people: [],
            totalAge: 0
        }

        for (let y = 0; y < users.length; y++) {
            let perObjUser = users[y];
            let { name, age, hobby } = perObjUser;

            if (hobby === perNamaHobi) {
                currentHobby.people.push(name);
                currentHobby.totalAge += age;
            }
        }

        result.push(currentHobby);
    }

    return result;
} // Done

function filteringHobbies(hobbies, number) {
    // Code here
    let result = [];
    console.log(number);

    for (let x = 0; x < hobbies.length; x++) {
        let perFavHobby = hobbies[x];
        let { people, totalAge } = perFavHobby;
        // console.log({people,totalAge});

        if (people.length >= number) {
            let avg = totalAge / people.length;

            perFavHobby.averageAge = avg;

            if (avg > 45) {
                perFavHobby.note = 'this hobby is popular among old people'
            } else {
                perFavHobby.note = 'this hobby is popular among young people'
            }

            //add delete object "total age" feature
            delete perFavHobby["totalAge"]

            result.push(perFavHobby);
        }
    }

    return result;
} // Done

function generateHobbyEntity(hobbies, selectedHobbies, minimalPeople) {
    // Code here
    if (!hobbies || selectedHobbies === undefined || !minimalPeople) {
        return 'Invalid input';
    }

    if (hobbies.length === 0) {
        return 'Data is empty';
    }

    let arrayOfObject = createArrayOfObject(hobbies);
    let hobi = findHobbies(arrayOfObject, selectedHobbies);
    let filtered = filteringHobbies(hobi, minimalPeople);

    if (filtered.length === 0) {
        return `All hobby has total people below ${minimalPeople}`;
    }

    return filtered;
} // Done

// const data = [
//   ['Basil', 27, 'Enjoying Meme'],
//   ['Zul Fikar', 27, 'Enjoying Meme'],
//   ['Damian Stapelkamp', 41, 'Cooking'],
//   ['Arthur', 46, 'Cooking'],
//   ['Luffy', 20, 'Adventure'],
//   ['Brett Yang', 25, 'Playing Violin'],
//   ['Eddy Chen', 49, 'Cooking'],
//   ['Okumura Rin', 16, 'Playing Violin'],
//   ['Linn Yang', 45, 'Playing Violin'],
//   ['Alexander', 17, 'Enjoying Meme'],
//   ['Kosasih', 45, 'Cooking']
// ]

console.log(generateHobbyEntity(data, ['Enjoying Meme', 'Cooking'], 3))
/*
ERROR
[
  {
    people: [ 'Basil', 'Zul Fikar', 'Alexander' ],
    totalAge: NaN,
    averageAge: NaN,
    note: 'this hobby is popular among young people'
  },
  {
    people: [ 'Damian Stapelkamp', 'Arthur', 'Eddy Chen', 'Kosasih' 
],
    totalAge: NaN,
    averageAge: NaN,
    note: 'this hobby is popular among young people'
  }
]

FIXED
[
  {
    name: 'Enjoying Meme',
    people: [ 'Basil', 'Zul Fikar', 'Alexander' ],
    totalAge: 71,
    averageAge: 23.666666666666668,
    note: 'this hobby is popular among young people'
  },
  {
    name: 'Cooking',
    people: [ 'Damian Stapelkamp', 'Arthur', 'Eddy Chen', 'Kosasih' ],
    totalAge: 181,
    averageAge: 45.25,
    note: 'this hobby is popular among old people'
  }
]
*/

// Tambahkan fitur!

// Tambahkan sebuah fitur proses untuk menghapus property totalAge 
// Pada setiap object yang di hasilkan generateHobbyEntity

// Output :
// [
//     {
//         name: 'Enjoying Meme',
//         people: [ 'Basil', 'Zul Fikar', 'Alexander' ],
//         averageAge: 23.666666666666668,
//         note: 'this hobby is popular among young people'
//     },
//     {
//         name: 'Cooking',
//         people: [ 'Damian Stapelkamp', 'Arthur', 'Eddy Chen', 'Kosasih' ],
//         averageAge: 45.25,
//         note: 'this hobby is popular among old people'
//     }
// ]

module.exports = {
    createArrayOfObject,
    findHobbies,
    filteringHobbies,
    generateHobbyEntity
}