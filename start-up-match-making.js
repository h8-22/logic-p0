function splitJobcharacters(str) {
  let arr = [];
  let temp = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "-" || str[i] === ",") {
      arr.push(temp);
      temp = "";
    } else {
      temp += str[i];
    }
  }
  arr.push(temp);
  return arr;
}

function reverseJobCharacters(arr) {
  let newArr = splitJobcharacters(arr);
  let temp = "";
  for (let i = 0; i < newArr.length; i++) {
    temp = "";
    if (i % 2 !== 0) {
      for (let j = newArr[i].length - 1; j >= 0; j--) {
        temp += newArr[i][j];
      }
      newArr[i] = temp;
    }
  }
  return newArr;
}

function decryptJobCharacters(arr) {
  let revArr = reverseJobCharacters(arr);
  // return revArr
  let letters = "abcdefghijklmnopqrstuvwxyz";
  let newArr = [];
  let temp = [];
  for (let i = 0; i < revArr.length; i++) {
    if (i % 2 !== 0) {
      for (let j = 0; j < revArr[i].length; j++) {
        for (let k = 0; k < letters.length; k++) {
          if (revArr[i][j] === letters[k]) {
            temp += letters[k - 1];
          }
        }
      }
    } else {
      temp = revArr[i];
    }
    newArr.push(temp);
    temp = "";
  }
  return newArr;
}

function makingDreamTeam(arr) {
  let decryptArr = decryptJobCharacters(arr);
  // return decryptArr;
  let newArr = [];
  let temp = [];
  // console.log(decryptArr.length);
  for (let i = 0; i < decryptArr.length; i++) {
    // console.log(i);
    // console.log(temp.length);

    temp.push(decryptArr[i]);
    if (temp.length == 2) {
      newArr.push(temp);
      temp = [];
    }

    // console.log(temp);
    // ---INI KENAPA GA RUNNING YA--- (FAJRINNYA GA KENA)
    // if (temp.length < 2) {
    //   temp.push(decryptArr[i]);
    // } else if (temp.length == 2) {
    //   newArr.push(temp);
    // console.log(temp);
    //   temp = []

    // } else {
    //   temp = [];
    // }
  }
  // newArr.push(temp);
  return newArr;
}

function startUpMatchMaking(arr) {
  let team = makingDreamTeam(arr);
  if (team.length < 3) {
    return "Minimum 3 members in the team";
  }
  let hustler = 0;
  let hacker = 0;
  let hipster = 0;
  for (let i = 0; i < team.length; i++) {
    if (team[i][1] === "hustler") {
      hustler++;
    } else if (team[i][1] === "hacker") {
      hacker++;
    } else {
      hipster++;
    }
  }
  // console.log(hustler, hacker, hipster);
  if(hustler === 1 && hacker === 1 && hipster === 1){
    return "Match your Start-up team";
  } else {
    return "The job composition in the team is not suitable"
  }
  return team;
}

// console.log(splitJobcharacters("idaz-sfmutvi,fajrin-sfutqji,fika-sfldbi"));
// console.log(reverseJobCharacters("idaz-sfmutvi,fajrin-sfutqji,fika-sfldbi"));
// console.log(decryptJobCharacters("idaz-sfmutvi,fajrin-sfutqji,fika-sfldbi"));
// console.log(makingDreamTeam("idaz-sfmutvi,fajrin-sfutqji,fika-sfldbi"));
console.log(startUpMatchMaking("idaz-sfmutvi,fajrin-sfutqji,fika-sfldbi"));

// let test = ["dasf", "dasfa"]
// console.log(test[1][2]);

console.log(startUpMatchMaking( 'eko-sfldbi, fajrin-sfmutvi, abdullah-sfutqji, anggara-sfutqji'))
// Match your Dream Start-Up Team

console.log(startUpMatchMaking('abdullah-sfldbi, fajrin-sfmutvi, samir-sfldbi, eko-sfmutvi, basil-sfmutvi'))

// The job composition in the team is not suitable

console. log(startUpMatchMaking( 'samir-sfmutvi, basil-sfutqji,eko-sfmutvi'))

// The job composition in the team is not suitable

console. log(startUpMatchMaking( 'samir-sfmutvi, basil-sfutqji'))

// Minimum 3 members in the team
