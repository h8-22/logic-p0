function tentukanDeretGeometri(arr){
    let bool = true;
    for(let i = 0; i< arr.length; i++){
        if((arr[i] / arr[i-1]) !== (arr[1] / arr[0])){
            bool = false;
        }
    }
    return bool;
}

console.log(tentukanDeretGeometri([1,3,9,27,81]));