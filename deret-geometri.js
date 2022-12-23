function tentukanDeretGeometri(arr){
    let divider = arr[1] / arr[0]
    for(let i = 1; i< arr.length; i++){
        if((arr[i] / arr[i-1]) !== divider){
            return false
        }
    }
    return true
}

console.log(tentukanDeretGeometri([1,3,9,27,81]));