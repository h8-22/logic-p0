function filterByContent(filter, data) {
    let output = {
        nationality: data.nationality,
        owners: [],
        channels: [],
        contents: []
    };
    // console.log("saf");
    // write your code here
    let splited = [];
    // console.log(data["contents"][0]);
    let konten = data["contents"]

    let temp = "";
    let tempArr = [];

    for (let i = 0; i < konten.length; i++) {
        temp = "";
        tempArr = [];
        for (let j = 0; j < konten[i].length; j++) {
            if (konten[i][j] === "-") {
                tempArr.push(temp);
                temp = "";
                // break;
            } else {
                temp += konten[i][j];
            }
        }
        tempArr.push(temp);
        splited.push(tempArr);
    }
    // return splited
    console.log(splited.length);
    for (let k = 0; k < splited.length; k++) {
        for (let l = 0; l < splited[k].length; l++) {


            // for(word of splited){
            //     console.log();
            // }

            if (splited[k][l] === filter) {
                // console.log("ts");
                output["owners"].push(data["owners"][k]);
                output["channels"].push(data["channels"][k]);
                output["contents"].push(data["contents"][k]);
            }
        }
    }
    return output
}

const rawDatas = {
    nationality: 'Canada',
    owners: [
        'Linus',
        'James Hobson',
        'Mehdi',
        'Ryan George'
    ],
    channels: [
        'Linus Tech Tips',
        'Hacksmith',
        'ElectroBoom',
        'Ryan George'
    ],
    contents: [
        'Technology-Review',
        'Engineering-Invention',
        'Engineering-Comedy-Education',
        'Comedy-Sketch'
    ]
};

//   console.log(filterByContent('Engineering', rawDatas));
/*
{
  nationality: 'Canada',
  owners: [ 'James Hobson', 'Mehdi' ],
  channels: [ 'Hacksmith', 'ElectroBoom' ],
  contents: [ 'Engineering-Invention', 'Engineering-Comedy-Education' ]
}
*/

// console.log(filterByContent('Comedy', rawDatas));
/*
{
  nationality: 'Canada',
  owners: [ 'Mehdi', 'Ryan George' ],
  channels: [ 'ElectroBoom', 'Ryan George' ],
  contents: [ 'Engineering-Comedy-Education', 'Comedy-Sketch' ]
}
*/

//   console.log(filterByContent('Music', rawDatas));
/*
{ nationality: 'Canada', owners: [], channels: [], contents: [] }
*/


function scrapChannel(content, data) {
    // write your code here
    // if (!content || !data) {
    //     return "'input invalid'"
    // }
    let filttered = filterByContent(content, data)
    // return filttered
    // console.log(filttered);
    // console.log(filttered["contents"].length);
    if(filttered["contents"].length === 0){
        return "content not found"
    }
    let result = [];
    let arr = [filttered.nationality]
    for (let i = 0; i < filttered["contents"].length; i++) {
        // console.log(filttered[key]);
        arr = [filttered.nationality];
        for (key in filttered) {
            if(key === "nationality"){
                continue
            }
            arr.push(filttered[key][i]);
        }
        result.push(arr)
    }
    return result
}



// console.log(scrapChannel("Engineering", rawDatas));
// /*
// [
//   [ "Canada", "James Hobson", "Hacksmith", "Engineering-Invention" ],
//   [ "Canada", "Mehdi", "ElectroBoom", "Engineering-Comedy-Education" ]
// ]
// */

// console.log(scrapChannel("Comedy", rawDatas));
// /*
// [
//   [ "Canada", "Mehdi", "ElectroBoom", "Engineering-Comedy-Education" ],
//   [ "Canada", "Ryan George", "Ryan George", "Comedy-Sketch" ]
// ]
// */

console.log(scrapChannel("Music", rawDatas));
// // 'content not found'

// console.log(scrapChannel("", rawDatas));
// // 'input invalid'

// console.log(scrapChannel());
  // 'input invalid'