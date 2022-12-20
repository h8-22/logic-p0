// function getUnique(arrArtist) {
//     // code here
//     let temp= [];
//     temp.push(arrArtist[0]);
//     console.log(temp);
//     for(let i = 0; i < arrArtist.length; i++){
//         for( let j= 0; j < temp.length; j++){
//             if(arrArtist[i] !== temp[j]){
//                 temp.push(arrArtist[i])
//             } 
//         }
//     }
//     return temp;
// }

const femaleArtists = [
    "Billie Eilish",
    "Billie Eilish",
    "Selena Gomez",
    "Taylor Swift",
    "Taylor Swift",
    "Lady Gaga",
    "Taylor Swift",
    "Billie Eilish",
    "Selena Gomez",
    "Barbie Ken",
];

console.log(getUnique(femaleArtists));
  /*
  output
  [
    "Billie Eilish",
    "Selena Gomez",
    "Taylor Swift",
    "Lady Gaga",
    "Barbie Ken"
  ]
*/

function getUnique(arrArtist) {
    // code here
    let tmp = [];
    tmp.push(arrArtist[0]);

    for (i = 0; i < arrArtist.length; i++){
        let flag = true;
        for (j = 0; j < tmp.length; j++){
            if (arrArtist[i] === tmp[j]){
                flag = false;
            }
        }
        if(flag){
            tmp.push(arrArtist[i]);
        }
    }
    return tmp;
}

const femaleArtists = [
    "Billie Eilish",
    "Billie Eilish",
    "Selena Gomez",
    "Taylor Swift",
    "Taylor Swift",
    "Lady Gaga",
    "Taylor Swift",
    "Billie Eilish",
    "Selena Gomez",
    "Barbie Ken",
];