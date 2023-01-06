//Create Array of Object
const data = [
    ["Basil", 27, "Enjoying Meme"],
    ["Zul Fikar", 27, "Enjoying Meme"],
    ["Damian Stapelkamp", 41, "Cooking"],
    ["Lufft", 20, "Adventure"]
]

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

let hobbies = ["Enjoying Meme", "Cooking"];
let users = createArrayOfObject(data);

// console.log(users);
//Find Hobbies
function findHobbies(users, hobbies) {
    // console.log(users);
    let arr = [];
    for (let i = 0; i < hobbies.length; i++) {
        let obj = {
            hobby: hobbies,
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
let num = 2;
let hobbies2 = findHobbies(users, hobbies)
// console.log(hobbies2);
let arr = [];

function filteringHobbies(hobbies, number){
    // console.log(hobbies);
    for (let i = 0; i < hobbies.length; i++) {
        if(hobbies[i]["people"].length >1){
            hobbies[i]["averageAge"] = hobbies[i]["totalAge"] / hobbies[i]["people"].length;
            if(hobbies[i]["averageAge"] > 45){
                hobbies[i]["note"] = "This hobby is popular among old people";
            } else {
                hobbies[i]["note"] = "This hobby is popular among young people";

            }
            arr.push(hobbies2[i]);
        }
    }
    return arr;
}
console.log(filteringHobbies(hobbies2, num));

//Generate Hobby Data

function generateHobbyEntity(hobbies, selectedHobbies, minimalPeople){

}

console.log(generateHobbyEntity(data, ["Enjoying Meme, Cooking"], 3));
