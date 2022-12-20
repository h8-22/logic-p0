// // const januaryAbsen = [
// //     ["H", "H", "H", "H", "H", "H"],
// //     [["A", "B"], ["L", 4], "H", ["L", 3], "H", "H"],
// //     ["H", "H", "H", "T", ["A","C"], ["A", "C"]],
// //     ["H", "T", ["A", "S"], "H", "H", "H"],
// // ]

// //H == 24, bonus += 500_000
// //T, bonus -= 50_000
// //L, bonus += 50_000
// //IF A
// //  B, gaji -= 200.000
// //  S && C.
// //IF monthlyAbsen == "kosong" or undefined or null.
// //INVALID
// //monthlyAbsen <= 4

// function payroll(monthlyAbsen) {
//   // if (
//   //   monthlyAbsen === "" ||
//   //   monthlyAbsen === undefined ||
//   //   monthlyAbsen === null
//   // ) {
//   //   return "Invalid Data!";
//   // }
//   let gaji = 5000000;
//   let hadir = 0;
//   let terlambat = 0;
//   let bolos = 0;
//   let sakit = 0;
//   let cuti = 0;
//   // console.log('test');
//   // console.log(monthlyAbsen);
//   console.log(monthlyAbsen[0][1][0]);
//   console.log(monthlyAbsen[0].length);
//   for (let i = 0; i < monthlyAbsen[0].length; i++) {
//     // console.log(j);
//     for (let j = 0; j < monthlyAbsen[0].length; i++) {
//       // console.log(monthlyAbsen[j][i]);
//       switch(monthlyAbsen[0][i][0]){
//         case "H":
//           hadir++;
//           break;
//         case "T":
//           terlambat++;
//           break;
//         case "B":
//           bolos;
//           break;
//         case "A":
//           if (monthlyAbsen[i][j][1] === "B") {
//             bolos++;
//           }
//       }
//       // console.log(hadir);
//     }
//     // console.log("test2");
//   }
//   return terlambat;
// }

// let januari = [
//   [
//     ["H", "H", "H", "H", "H", "H"],
//     [["A", "B"], ["L", 4], "H", ["L", 3], "H", "H"],
//     ["H", "H", "H", "T", ["A", "C"], ["A", "C"]],
//     ["H", "T", ["A", "S"], "H", "H", "H"],
//   ],
// ];
// // console.log(januari.length);
// console.log(payroll(januari));


const payroll = (monthlyAbsen) => {
  let gaji = 5000000;
  let hadir = 0; let terlambat =0; let lembur = 0; let bolos = 0; let sakit = 0; let cuti =0; 
  let jamLembur = 0;
  // console.log(monthlyAbsen.length);
  let absen = monthlyAbsen[0]
  // console.log(absen[0].length);
  for(let i =0; i < absen.length; i++){
    for(let j=0; j < absen[i].length; j++){
      if(absen[i][j].length < 2){
        if(absen[i][j] === "H"){
          hadir++;
        } else if (absen[i][j] === "T"){ terlambat++; gaji -=(absen[i][j][1] * 50000)
        } else if (absen[i][j] === "L"){ lembur++; jamLembur += absen[i][j][1];
        } else if (absen[i][j] === "B"){ bolos++; 
        } else if (absen[i][j] === "A"){ if(absen[i][j][0] === "A"){
          if(absen[i][j][1] === "B"){
            gaji -= 200000
          } else if(absen[i][j][1] === "C"){
            cuti++;
          } else if(absen[i][j][1] === "B") {
            bolos++
          }
        }  
      }
    // console.log(j);
    }
  }
    // for(let j = 0)
    // console.log(i);
    // if(absen[i] === "H"){
    //   hadir++
    // }  
  }
  return `Absensi Bulan ini:\nHadir: ${hadir}\nSakit: ${sakit}\nTerlambat: ${terlambat}\nAlpa: \nLebur: ${jamLembur}\nGaji yang anda terima bualan ini adalah ${gaji}`
}



let januari = [
  [
    ["H", "H", "H", "H", "H", "H"],
    [["A", "B"], ["L", 4], "H", ["L", 3], "H", "H"],
    ["H", "H", "H", "T", ["A", "C"], ["A", "C"]],
    ["H", "T", ["A", "S"], "H", "H", "H"],
  ],
];
// console.log(januari.length);
console.log(payroll(januari));
