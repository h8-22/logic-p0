let applicant = "Fajrin";
let code = "aBdfmjn";
let experience = 5;
let scoreTest = 90;

let jobDesk ;
for(let i = 0; i < code.length; i++){
    if(code[i] === "F"){
        jobDesk = "Frontend Developer";
    } else if(code[i] === "B"){
        jobDesk = "Backend Developer";
    }
}
// console.log(jobDesk);
let gaji = 0;
if(jobDesk === "Frontend Developer"){
    gaji += 11000000;
    if(scoreTest >= 90){
        gaji += 1000000;
    }
} else {
    gaji += 10000000;
    if(scoreTest >= 85){
        gaji += 1000000;
    }
}

let level;
if(experience > 4){
    level = "Sr.";
    gaji += 1000000
} else {
    level = "Jr.";
}

console.log(`Selamat ${applicant} kamu diterima menjadi ${level} ${jobDesk} Developer dengan gaji pokok sebesar ${gaji}.`);