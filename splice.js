// ask if push built in function only.

function splice(data, add, start, del){
    for(let i = start; i <= del; i++){
        data.pop(data[i])
        console.log(data);
        
    }
    data[start] = add;
    return data;
}


console.log(splice(['idaz', 'adi', 'dear'], 'anggara', 1, 2));
//['idaz', 'anggra']

// let data1 = ['idaz', 'adi', 'dear'];
// data1.pop()
// console.log(data1);