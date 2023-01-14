// class User {
//     constructor(name, birthYear) {
//       this.name = name;
//       this.birthYear = birthYear;
//     }
//   }
  
//   const user1 = new User('Acong', 1970); // Instantiation, hasilnya adalah object User yang ditampung pada user1
//   const user2 = new User('Sitorus', 1975); // Instantiation, hasilnya adalah object User yang ditampung pada user2
  
//   console.log(user1.name, user1.birthYear); // Mengakses property user1
//   console.log(user2.name, user2.birthYear); // Mengakses property user2

//   console.log(User);

// class User {
//     constructor(name, birthYear) {
//       this.name = name;
//       this.birthYear = birthYear;
//     }
  
//     greet() {
//       console.log('Hello');
//     }
  
//     whoAmI() {
//       console.log(this);
//     }
//   }
  
//   const user1 = new User('Acong', 1970);
//   const user2 = new User('Sitorus', 1975);
  
// //   user1.whoAmI();
// //   user2.whoAmI();

//   console.log(User.user1);

// class User {
//     constructor(name, birthYear) {
//       this.name = name;
//       this.birthYear = birthYear;
//     }
  
//     greet() {
//       console.log('Hello');
//     }
  
//     introduce() {
//       console.log(`Hello my name is ${this.name}, I am born on ${this.birthYear}`);
//     //   return this;
//     }
  
//     whoAmI() {
//       console.log(this);
//     }
//   }
  
//   const user1 = new User('Acong', 1970);
//   const user2 = new User('Sitorus', 1975);
  
//   user1.introduce().greet();
//   user2.introduce().greet();

// class User {
//     constructor(name, birthYear) {
//       this.name = name;
//       this.birthYear = birthYear;
//     }
  
//     greet() {
//     //   console.log('Hello');
//     //   return this;
//     }
  
    // introduce() {
    //   console.log(`Hello my name is ${this.name}, I am born on ${this.birthYear}`);
    // //   return this;
    // }
  
//     whoAmI() {
//       console.log(this);
//     }
//   }
  
//   const user1 = new User('Acong', 1970);
//   const user2 = new User('Sitorus', 1975);
  
//   user1.introduce().greet();
//   user1.introduce().greet();
//   user2.introduce().greet();
//   user2.greet();
//   user2.greet();

// function Dog() {
//     this.name= "adf";
//     this.color= "adsf";
//     this.numLegs = 5;
//   }


// const Dog = () => {
//     this.name= "adf";
//     this.color= "adsf";
//     this.numLegs = 5;
// }

// console.log(Dog());

// function Bird(name) {
//     this.name = name;
//     this.numLegs = 2;
//   }
  
//   let canary = new Bird("Tweety");
//   let ownProps = [];

//   // Only change code below this line
//   for(let property in canary){
//     console.log(property)
//     ownProps.push(property);
//   }
  
//   console.log(ownProps)

//   //!afdjasd
// // 

let arr = ["asd","asdf"]
arr.split("asf")
console.log(arr);