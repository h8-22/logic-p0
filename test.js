let word = 'developer'
let wordArr = [];
    // console.log(wordArr);
    
    // create new array
    for(let i = 0; i < word.length; i++){
        wordArr.push(word[i]);
    }
    console.log("sajfda",wordArr);

   
    let newArr = [];
    for(let j = 0; j < wordArr.length; j++){
        console.log(wordArr.length);
        let temp = [];
        for(let k = 0; k < wordArr.length; k++){
            temp.push(word[k]);
        }
        newArr.push(temp);
        console.log(`ini word ${wordArr}`);
        wordArr.pop();
    }
