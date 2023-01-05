function getAnimals(arr) {
    // Write your code here
    let k = "";
    let h = "";
    let o = "";
    for (let i = 0; i < arr.length; i++) {
        if(arr[i][arr[i].length-1] === "K" && arr[i].length > k.length){
            k = arr[i]
        }
        if(arr[i][arr[i].length-1] === "H" && arr[i].length > h.length){
            h = arr[i]
        }
        if(arr[i][arr[i].length-1] === "O" && arr[i].length > o.length){
            o = arr[i]
        }
    }
    const splice = (test) => {
        let spliced = "";
        for (let i = 0; i < test.length; i++) {
            if(test[i] === ":"){
                break;
            } else {
                spliced += test[i];
            }
        }
        return spliced;
    }
    let result = [splice(k), splice(h), splice(o)];
    return result;
    
  }
  
  //Test Case 
  
  console.log(getAnimals(['Singa:K','Kuda:H','Monyet:O']))
  // [ 'Singa','Kuda','Monyet' ]
  
  console.log(getAnimals(['Macan:K', 'Ayam:O', 'Gajah:H', 'Monyet:O', 'Kerbau:H', 'Musang:O', 'Burung:H', 'Hiu:K']))
//   // [ 'Macan', 'Kerbau', 'Monyet' ]
  
  console.log(getAnimals(['Tikus:O', 'Merpati:H', 'Beruang:O', 'Elang:K', 'Perkutut:H', 'Harimau:K']))
//   // [ 'Harimau', 'Perkutut', 'Beruang' ]