function changeMe(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(`${i+1}. ${arr[i][0], arr[i][1]}`);
        let obj = {};
        for(let j = 0; j< arr[i].length; j++){
            obj.firstname = arr[i][0];
            obj.lastName = arr[i][1];
            obj. gender = arr[i][2]
            if(arr[i][3] === undefined || arr[i][3] ===""){
                obj.age = "Invalid Birth Year";
            } else {
                obj.age = 2022 - arr[i][3]
            }
        }
        console.log(obj);
    }
}

changeMe([["Christ", "Evans", "Male", 1982], ["Robert", "Downey", "Male"]])

