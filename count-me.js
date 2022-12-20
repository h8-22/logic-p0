function countMe(arr){
    let obj = {};
    for(let i = 0; i < arr.length; i++){
        // let arrStr = String(arr[i])
        if(arr[i] === obj.arr[i].toString()){
            obj.arr[i].toString() ++;
        } else 
        obj.arr[i].toString() = 1;
    }
    return obj;
}

console.log((countMe([1,2,3,4,5,1,2,3,1,2,1,4,5])));

// obj = {
//     a: 2,
//     b: 3
// }
// console.log(obj.a);