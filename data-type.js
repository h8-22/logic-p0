let kata = false;

if(kata == 0 || kata == "" || kata == undefined || kata == null || kata == NaN && typeof kata !== "Boolean"){
    console.log("Invalid data");
} else if(typeof kata === "string"){
    console.log(`username ${kata}`);
} else if(typeof kata === "number"){
    console.log(`age ${kata}`);
} else if(typeof kata === "boolean"){
    if(kata == true){
        console.log("thank you for agreeing");
    } else {
        console.log("cannot proceed without agreement");
    }
} 

// tanya buddy.
// console.log(
//   typeof kata === "string"
//     ? `username ${kata}`
//     : typeof kata === "number"
//     ? `age ${kata}`
//     : kata === true
//     ? "thank you for agreeing"
//     : "cannot proceed without agreement"
//     ? kata == 0 || kata === ""
//     : "Invalid data"
// );
