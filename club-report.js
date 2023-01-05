function generateMatchResults(club, matches) {
    // Your code here
    let obj = {};
    // console.log(club.name);

    // const wdl = (home, away) => {
    //     if(home )
    // }


    for (let i = 0; i < matches.length; i++) {
        // console.log(matches[i][0].toLowerCase());
        if (matches[i][0] === club.name) {
            // obj.matches[3] = "test"
            // obj[matches[3]] ="test"
            let result = "";
            if (matches[i][1] > matches[i][3]) {
                result = "W";
            } else if (matches[i][1] < matches[i][3]) {
                result = "L";
            } else {
                result = "D"
            }
            obj[matches[i][2]] = result;

            // } else if (matches[i][3].toLowerCase() === club){
        } else if (matches[i][2] === club.name) {
            let result = "";
            if (matches[i][1] > matches[i][3]) {
                result = "L";
            } else if (matches[i][1] < matches[i][3]) {
                result = "W";
            } else {
                result = "D"
            }
            obj[matches[i][0]] = result;
        }
    }
    return obj

}

// const liverpool = {
//     name: 'Liverpool',
//     yellowCards: [2, 4, 2, 0],
//     redCards: [0, 1, 0, 0]
// }

// const matches = [
//     ['Liverpool', 1, 'Manchester United', 3],
//     ['Liverpool', 2, 'Chelsea', 0],
//     ['Chelsea', 1, 'Manchester City', 2],
//     ['Manchester City', 3, 'Liverpool', 3],
//     ['Manchester City', 2, 'Manchester United', 2],
//     ['Manchester United', 2, 'Chelsea', 3],
//     ['Liverpool', 3, 'Tottenham', 1],
//     ['Tottenham', 2, 'Manchester United', 1],
//     ['Tottenham', 2, 'Manchester City', 2],
//     ['Chelsea', 3, 'Tottenham', 2],
// ]

// console.log(generateMatchResults(liverpool, matches))
/**
 * {
 *  'Manchester United': 'L',
 *  Chelsea: 'W',
 *  'Manchester City': 'D',
 *  Tottenham: 'W'
 * }
 **/

function fineCount(club) {
    // Your code here
    let total = 0;
    for (num of club.yellowCards) {
        total += num * 1000
    }
    for (num of club.redCards) {
        total += num * 1500
    }
    return total
}

// console.log(fineCount(liverpool)) // 9500

function clubReport(club, matches) {
    // Your code here
    if (!club) {
        return "Tidak ada klub yang akan di proses";
    }

    let goal = 0;
    // console.log(club.name);
    for (let i = 0; i < matches.length; i++) {
        // console.log(i);
        for (let j = 0; j < matches[i].length; j++) {
            if (matches[i][j] === club.name) {

                goal += matches[i][j + 1]
            }
        }
        // return goal
    }
    let denda = fineCount(club)
    let result = generateMatchResults(club,matches)
    // console.log(goal);
    let obj = {
        name: club.name,
        match: result,
        message: `Klub ${club.name} berhasil mencetak ${goal} goal, dan denda sebesar $${denda}`
    }
    return obj
}

const liverpool = {
    name: 'Liverpool',
    yellowCards: [2, 4, 2, 0],
    redCards: [0, 1, 0, 0]
}

const matches = [
    ['Liverpool', 1, 'Manchester United', 3],
    ['Liverpool', 2, 'Chelsea', 0],
    ['Chelsea', 1, 'Manchester City', 2],
    ['Manchester City', 3, 'Liverpool', 3],
    ['Manchester City', 2, 'Manchester United', 2],
    ['Manchester United', 2, 'Chelsea', 3],
    ['Liverpool', 3, 'Tottenham', 1],
    ['Tottenham', 2, 'Manchester United', 1],
    ['Tottenham', 2, 'Manchester City', 2],
    ['Chelsea', 3, 'Tottenham', 2],
]

console.log(clubReport(liverpool, matches))
  /*
      {
          name : "Liverpool",
          match : {
            'Manchester United': 'L',
            Chelsea: 'W',
            'Manchester City': 'D',
            'Tottenham': 'W'
           },
          message: `Klub Liverpool berhasil mencetak 9 goal, dan denda sebesar $9500`
      }
  */