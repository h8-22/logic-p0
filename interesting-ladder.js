function ladder(word){
    let wordArr = [];
    // console.log(wordArr);
    
    // create new array
    console.log(word.length);
    for(let i = 0; i < word.length; i++){
        wordArr.push(word[i]);
    }
    // console.log(wordArr);
   
    let newArr = [];
    //urgently to ask. knp wordArr.length tidak di loop sampe 0. 
    for(let j = 0; j < wordArr.length; j++){
        console.log("dfsaa",wordArr.length);
        let temp = [];
        for(let k = 0; k < wordArr.length; k++){
            console.log(k);

            temp.push(word[k]);
        }
        newArr.push(temp);
        console.log(`ini word ${wordArr}`);
        wordArr.pop();
        console.log(wordArr.length);
    }

    // return newArr
    // return wordArr;
    return newArr
}

console.log(ladder('developer'));
//problemnya stop di devel
