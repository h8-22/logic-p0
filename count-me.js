const countMe = (arr) => {
    // console.log(arr);
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        // console.log(i);
        if (obj[arr[i]]) {
            obj[arr[i]] ++
        } else {
            obj[arr[i]] = 1
        }
    }
    return obj;
}


console.log((countMe(["Sofyan", "Ricky", "Sofyan", "Semmi", "Semmi", "Wika"])));
console.log((countMe([1,15,9,10,8,1,12,15,10,3])));



// obj = {
//     a: 2,
//     b: 3
// }
// console.log(obj.a); 