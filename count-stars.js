function countStars(params) {
    let obj = {
        "*****": 0,
        "****": 0,
        "***": 0,
        "**": 0,
        "*": 0,
    };
    for (let i = 0; i < params.length; i++) {
        temp = "";
        for (let j = 0; j < params[i].length; j++) {
            if (params[i][j] === "*") {
                temp += "*";
            }
        }
        obj[temp]++;
    }
    return obj;
}

console.log(countStars([
    ['*', '*', '*', ' ', ' '],
    ['*', '*', '*', '*', ' '],
    ['*', '*', '*', ' ', ' '],
    ['*', '*', '*', '*', '*'],
    ['*', '*', ' ', ' ', ' '],
    ['*', '*', '*', ' ', ' '],
    ['*', '*', '*', '*', ' '],
    ['*', '*', ' ', ' ', ' '],
    ['*', '*', '*', ' ', ' '],
    ['*', '*', ' ', ' ', ' '],
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', ' '],
]));

console.log(
    countStars([
        ['*', '*', '*', ' ', ' '],
        ['*', '*', '*', '*', ' '],
        ['*', '*', '*', ' ', ' '],
        ['*', '*', '*', '*', '*'],
        ['*', '*', ' ', ' ', ' '],
        ['*', '*', '*', ' ', ' '],
        ['*', '*', '*', '*', ' '],
        ['*', '*', ' ', ' ', ' '],
        ['*', '*', '*', ' ', ' '],
        ['*', '*', ' ', ' ', ' '],
        ['*', '*', '*', '*', '*'],
        ['*', '*', '*', '*', ' ']
    ])
)