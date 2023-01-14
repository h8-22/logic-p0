// //Release 1
// class Animal {
//     constructor (name, age, type, favoriteFoods, totalLegs){
//         this.name = "Ruru";
//         this.age = 1;
//         this.type = "Cat"
//         this.favoriteFoods = ["Salmon", "Tuna", "Chicken"];
//         this.totalLegs = 4;
//     }

//     move() {
//         console.log("I walking and running with my legs");
//         return this;
//     }

//     getInformation(greet){
//         // console.log);
//         console.log(`${greet} My name ${this.name}`);
//         console.log(`My current age is ${this.age} year(s) old`);
//         console.log(`I am a ${this.type}`);
//         console.log(`My favorite foods is ${this.favoriteFoods}`);
//     }
// }

// let ruruTheCat = new Animal();
// console.log(ruruTheCat);
// ruruTheCat.name = "Ruru the cat";
// console.log(ruruTheCat);

// //Release 2
// ruruTheCat.move().getInformation("Hallo")

//Release 3

class Animal {
    constructor (name, age, type, favoriteFoods, totalLegs){
        this.name = this.name;
        this.age = this.age;
        this.type = this.type;
        this.favoriteFoods = this.favoriteFoods;
        this.totalLegs = this.legs;
    }

    move() {
        console.log("I walking and running with my legs");
        return this;
    }

    getInformation(greet){
        // console.log);
        console.log(`${greet} My name ${this.name}`);
        console.log(`My current age is ${this.age} year(s) old`);
        console.log(`I am a ${this.type}`);
        console.log(`My favorite foods is ${this.favoriteFoods}`);
    }
}
let charlieTheDog = new Animal("Charlie", 2, "Dog",["Meal", "Cake"])
console.log(charlieTheDog);