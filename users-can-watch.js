function filterMovie(genres) {
    let movies = [
        ["Drama", "Boyhood", "The Last of the Mohicans", "The Goldfinch"],
        ["Action", "Mad Max", "The Batman", "Josh Wick"],
        ["Fantasy", "The Fall", "The Forbidden Kingdom", "Ladyhawke", "Sea Beast"],
        ["Comedy", "Safety Last", "The Trip"]
    ];
    // write your code here
    let array = [];
    for (let i = 0; i < genres.length; i++) {
        for (let j = 0; j < movies.length; j++) {
            if (genres[i] === movies[j][0]) {
                array.push(movies[j]);
            }
        }
    }
    return array;
}

// console.log(filterMovie(["Action", "Drama", "Comedy"]));
// /*
// [
//   ["Action", "Mad Max", "The Batman", "Josh Wick"],
//   ["Drama", "Boyhood", "The Last of the Mohicans", "The Goldfinch"],
//   ["Comedy", "Safety Last", "The Trip"]
// ]
// */

// console.log(filterMovie(["Scifi", "Musical"]));
//   // []

function usersCanWatch(users) {
    // write your code here
    // Manual Split
    // console.log(users.menu[0]);
    if(!users){
        return "Invalid Data"
    }
    let menus = [];
    let temp = ""
    for (let i = 0; i < users.menu.length; i++) {
        if(users.menu[i] === ";"){
            menus.push(temp);
            temp = ""
        } else {
            temp += users.menu[i]
        }
    }
    menus.push(temp)
    // return menus
    let filterred = filterMovie(menus)
    if(filterred.length < 1){
        return "Movies not found"
    }
    return filterred
}

console.log(usersCanWatch({
    name: "Bari",
    cinema: "XIV",
    menu: "Action;Drama;Comedy"
})
);
/*
[
  ["Action", "Mad Max", "The Batman", "Josh Wick"],
  ["Drama", "Boyhood", "The Last of the Mohicans", "The Goldfinch"],
  ["Comedy", "Safety Last", "The Trip"]
]
*/

console.log(usersCanWatch({
    name: "Rizka",
    cinema: "Cinepolos",
    menu: "Scifi;Musical"
})
);
// "Movie not found"

console.log(usersCanWatch());
  // "Invalid Data!"