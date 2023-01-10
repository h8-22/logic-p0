// //Create Array of Object
// const data = [
//     ["Basil", 27, "Enjoying Meme"],
//     ["Zul Fikar", 27, "Enjoying Meme"],
//     ["Damian Stapelkamp", 41, "Cooking"],
//     ["Lufft", 20, "Adventure"]
// ]

function createArrayOfObject(array) {
    let arr = [];
    let obj = {};
    // return result;
    // obj.test = "asfd"        
    // console.log(obj);
    for (let i = 0; i < array.length; i++) {
        // console.log(i);
        obj = {};
        obj.name = array[i][0];
        obj.age = array[i][1];
        obj.hobby = array[i][2];
        arr.push(obj);
    }
    return arr;
}

// console.log(createArrayOfObject(data))

// let hobbies = ["Enjoying Meme", "Coo king"];
// let users = createArrayOfObject(data);

// console.log(users);
//Find Hobbies
function findHobbies(users, hobbies) {
    // console.log(users);
    let arr = [];
    for (let i = 0; i < hobbies.length; i++) {
        let obj = {
            hobby: hobbies[i],
            people: [],
            totalAge: 0
        };
        for (let j = 0; j < users.length; j++) {
            if(users[j]["hobby"] === hobbies[i]){
                obj["people"].push(users[j]["name"]);
                obj["totalAge"] += users[j]["age"];
            }
        }
        arr.push(obj);
    }
    return arr;
}
// console.log(findHobbies(users, hobbies));

//Filtering Hobbies
// let num = 2;
// let hobbies2 = findHobbies(users, hobbies)
// console.log(hobbies2);
// let arr = [];

function filteringHobbies(hobbies, number){
    // console.log(hobbies);
    let arr = [];
    for (let i = 0; i < hobbies.length; i++) {
        // console.log(hobbies[0]["people"]);
        if(hobbies[i]["people"].length >= number){
            hobbies[i]["averageAge"] = hobbies[i]["totalAge"] / hobbies[i]["people"].length;
            if(hobbies[i]["averageAge"] > 45){
                hobbies[i]["note"] = "This hobby is popular among old people";
            } else {
                hobbies[i]["note"] = "This hobby is popular among young people";

            }
            arr.push(hobbies[i]);
        }
    }
    return arr;
}


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
  

//   console.log(filteringHobbies(data, num));
//Generate Hobby Data

function generateHobbyEntity(hobbies, selectedHobbies, minimalPeople){
if(!hobbies || !selectedHobbies || !minimalPeople){
    return "Invalid input"
} 
if(data.length < 1){
    return "Data is empty"
}
let users = createArrayOfObject(hobbies);
// console.log(users);
let found = findHobbies(users, selectedHobbies);
// console.log(found);
let filttered = filteringHobbies(found, minimalPeople);
// console.log(filttered);
if(filttered.length < 1){
    return `All hobby has total people below ${minimalPeople}`
}
return filttered;
}

console.log(generateHobbyEntity(data, ["Enjoying Meme", "Cooking"], 7));
