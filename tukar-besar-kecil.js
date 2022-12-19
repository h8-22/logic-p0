function tukarBesarKecil(kalimat){
    let newWord = "";
    for(let i = 0; i < kalimat.length; i++){
        if(kalimat[i] === kalimat[i].toUpperCase()){
            newWord += kalimat[i].toLowerCase()
        } else {
            newWord += kalimat[i].toUpperCase()
        }
    }
    return newWord;
}

console.log(tukarBesarKecil("001-A-3-5World"));