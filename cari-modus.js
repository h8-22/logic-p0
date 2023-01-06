function cariModus(arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]]++
        } else {
            obj[arr[i]] = 1
        }
    }
    let mode = Number.MIN_VALUE
    let num = 0;
    let flag = true;
    let test = obj[arr[0]]
    for (i in obj) {
        if(obj[i] > mode){
            mode = obj[i];
            num = i;
        }

        if(obj[i] !== test){
            flag = false;
        }
        test = obj[i];
    }
    if(flag == true ){
        return -1;
    }
    
    return num; 
}

console.log(cariModus([10, 4, 5, 2])); //4