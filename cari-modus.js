function cariModus(arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]]++
        } else {
            obj[arr[i]] = 1
        }
    }
    console.log(obj);
    for (i,keys in obj) {
        console.log(keys);
    }
}

console.log(cariModus([10, 4, 5, 2, 4])); //4