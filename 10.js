function filterMovie(genres) {
    let movies = [
        ["Drama", "Boyhood", "The Last of the Mohicans", "The Goldfinch"],
        ["Action", "Mad Max", "The Batman", "Josh Wick"],
        ["Fantasy", "The Fall", "The Forbidden Kingdom", "Ladyhawke", "Sea Beast"],
        ["Comedy", "Safety Last", "The Trip"]
    ];
    // write your code here
}

function usersCanWatch(users) {
    // write your code here
}

// TEST CASE
const user1 = {
    name: "Bari",
    cinema: "XIV",
    menu: "Action;Drama;Comedy"
};
console.log(usersCanWatch(user1));
/*
[
  ["Action", "Mad Max", "The Batman", "Josh Wick"],
  ["Drama", "Boyhood", "The Last of the Mohicans", "The Goldfinch"],
  ["Comedy", "Safety Last", "The Trip"]
]
*/

const user2 = {
    name: "Tole",
    cinema: "XIIX",
    menu: "Fantasy;Adventure;Comedy"
};
console.log(usersCanWatch(user2));
/*
[
  ["Fantasy", "The Fall", "The Forbidden Kingdom", "Ladyhawke", "Sea Beast"],
  ["Comedy", "Safety Last", "The Trip"]
]
*/

const user3 = {
    name: "Rizky",
    cinema: "Cinepolos",
    menu: "Scifi-Musical"
};
console.log(usersCanWatch(user3));
// "Movie not found"

console.log(usersCanWatch());
// "Invalid Data!"