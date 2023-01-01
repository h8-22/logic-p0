function susunPesan(arr) {
	// Tulis kode disini
    let flag = true; 
    while(flag){
        flag = false;
        for (let i = 1; i < arr.length; i++) {
            if(arr[i-1][1] > arr[i][1]){
                flag = true; 
                let temp = arr[i-1];
                arr[i-1] = arr[i];
                arr[i] = temp;
            }
        }
    }
    let result = "";
    for (let j = 0; j < arr.length; j++) {
        result += arr[j][0] + " "
    } 
    // result[result.length-1] = "";
    return result
}


console.log(susunPesan([
    ['besok', 4],
    ['kita', 1],
    ['akan', 2],
    ['menyerang', 3],
    ['pagi', 5],
  ]));
//   outputnya : 'kita akan menyerang besok pagi'
  
  
//   [
//     ['granat', 3],
//     ['musuh', 1],
//     ['membawa', 2],
//   ]
  
//   outputnya : 'musuh membawa granat'