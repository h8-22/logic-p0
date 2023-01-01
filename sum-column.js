function sumColumn(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if(result[j]){
                result[j] += array[i][j]
            } else {
                result.push(array[i][j])
            }
        }
    }
    return result;
}

console.log(sumColumn(
    [
//       j
//       0  1   2  3
        [5],
        [2, 5, 12, 8],
        [4, 56, 3]
    ],
)) // [11, 61, 15, 8 ]