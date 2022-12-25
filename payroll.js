// // // const januaryAbsen = [
// // //     ["H", "H", "H", "H", "H", "H"],
// // //     [["A", "B"], ["L", 4], "H", ["L", 3], "H", "H"],
// // //     ["H", "H", "H", "T", ["A","C"], ["A", "C"]],
// // //     ["H", "T", ["A", "S"], "H", "H", "H"],
// // // ]

// // //H == 24, bonus += 500_000
// // //T, bonus -= 50_000
// // //L, bonus += 50_000
// // //IF A
// // //  B, gaji -= 200.000
// // //  S && C.
// // //IF monthlyAbsen == "kosong" or undefined or null.
// // //INVALID
// // //monthlyAbsen <= 4

// // function payroll(monthlyAbsen) {
// //   // if (
// //   //   monthlyAbsen === "" ||
// //   //   monthlyAbsen === undefined ||
// //   //   monthlyAbsen === null
// //   // ) {
// //   //   return "Invalid Data!";
// //   // }
// //   let gaji = 5000000;
// //   let hadir = 0;
// //   let terlambat = 0;
// //   let bolos = 0;
// //   let sakit = 0;
// //   let cuti = 0;
// //   // console.log('test');
// //   // console.log(monthlyAbsen);
// //   console.log(monthlyAbsen[0][1][0]);
// //   console.log(monthlyAbsen[0].length);
// //   for (let i = 0; i < monthlyAbsen[0].length; i++) {
// //     // console.log(j);
// //     for (let j = 0; j < monthlyAbsen[0].length; i++) {
// //       // console.log(monthlyAbsen[j][i]);
// //       switch(monthlyAbsen[0][i][0]){
// //         case "H":
// //           hadir++;
// //           break;
// //         case "T":
// //           terlambat++;
// //           break;
// //         case "B":
// //           bolos;
// //           break;
// //         case "A":
// //           if (monthlyAbsen[i][j][1] === "B") {
// //             bolos++;
// //           }
// //       }
// //       // console.log(hadir);
// //     }
// //     // console.log("test2");
// //   }
// //   return terlambat;
// // }

// // let januari = [
// //   [
// //     ["H", "H", "H", "H", "H", "H"],
// //     [["A", "B"], ["L", 4], "H", ["L", 3], "H", "H"],
// //     ["H", "H", "H", "T", ["A", "C"], ["A", "C"]],
// //     ["H", "T", ["A", "S"], "H", "H", "H"],
// //   ],
// // ];
// // // console.log(januari.length);
// // console.log(payroll(januari));

// const payroll = (monthlyAbsen) => {
//   let gaji = 5000000;
//   let hadir = 0;
//   let terlambat = 0;
//   let lembur = 0;
//   let bolos = 0;
//   let sakit = 0;
//   let cuti = 0;
//   let jamLembur = 0;
//   // console.log(monthlyAbsen.length);
//   let absen = monthlyAbsen[0];
//   // console.log(absen[0].length);
//   for (let i = 0; i < absen.length; i++) {
//     for (let j = 0; j < absen[i].length; j++) {
//       if (absen[i][j].length < 2) {
//         if (absen[i][j] === "H") {
//           hadir++;
//         } else if (absen[i][j] === "T") {
//           terlambat++;
//           gaji -= absen[i][j][1];
//         } else if (absen[i][j] === "L") {
//           lembur++;
//           jamLembur += absen[i][j][1];
//         } else if (absen[i][j] === "B") {
//           bolos++;
//         } else if (absen[i][j] === "A") {
//           if (absen[i][j][0] === "A") {
//             if (absen[i][j][1] === "B") {
//               bolos++;
//               gaji -= 200000;
//             } else if (absen[i][j][1] === "C") {
//               cuti++;
//             }
//           }
//         }
//         // console.log(j);
//       }
//     }
//     // for(let j = 0)
//     // console.log(i);
//     // if(absen[i] === "H"){
//     //   hadir++
//     // }
//   }
//   return `Absensi Bulan ini:\nHadir: ${hadir}\nSakit: ${sakit}\nTerlambat: ${terlambat}\nAlpa: \nLebur: ${jamLembur}\nGaji yang anda terima bualan ini adalah ${gaji}`;
// };

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

function payroll(monthlyAbsen) {
  // write your code here
  let gaji = 5000000;
  let h = 0;
  let s = 0;
  let t = 0;
  let a = 0;
  let b = 0; 
  let c = 0;
  let l = 0;
  let jamLembur = 0;

  if(monthlyAbsen === [] || monthlyAbsen === undefined || monthlyAbsen === null){
    return "Invalid data";
  } 

  if(monthlyAbsen.length < 4){
    return "Data absen tidak lengkap";
  }

  for (let i = 0; i < monthlyAbsen.length; i++) {
    for (let j = 0; j < monthlyAbsen[i].length; j++) {
      // console.log(monthlyAbsen[i][j]);
      if (monthlyAbsen[i][j] === "H") {
        h++;
      } else if (monthlyAbsen[i][j] === "T") {
        h++;
        t++;
        gaji -= 50000
      } else if (monthlyAbsen[i][j] === "L") {
        l++;
      } else if (Array.isArray(monthlyAbsen[i][j])) {
        if (monthlyAbsen[i][j][0] === "A") {
          a++;
          switch (monthlyAbsen[i][j][1]) {
            case "B":
              gaji -= 200000
              b++;
              break;
            case "S":
              s++;
              break;
            case "C":
              c++;
              break;
            default:
              break;
          }
        } else if (monthlyAbsen[i][j][0] === "L") {
          h++;
          l++;
          jamLembur += monthlyAbsen[i][j][1]
          gaji += 50000 * monthlyAbsen[i][j][1];
        }
      }
    }
    //   t++;
    // }
  }
  if(h === 24){gaji += 500000}
  console.log(h, t, c, a, b, s, c, l, gaji);
  return `Absensi Bulan ini:\nHadir: ${h}\nSakit: ${s}\nTerlambat: ${t}\nAlpa: ${0}\nCuti: ${c}\nLembur: ${jamLembur}jam\nGaji yang anda terima bulan ini adalah Rp. ${gaji}. `
}

let januari = [
    0     1    2   3    4    5
  0["H", "H", "H", "T", "H", "H"],
  1["H", "H", ["A", "C"], "H", "H", "H"],
  2["H", "H", "H", "H", "H", "H"],
  3["H", "H", "H", "H", ["A", "S"], "H"],
];

let februari = [
  ["H", "H", "H", "H", ["L", 3], "H"],
  ["H", "H", "H", "H", "H", "H"],
  ["H", ["L", 2], "H", "H", "H", "H"],
  ["H", "H", "H", "H", "H", "H"],
];

// let maret = [
//   ["H", "H", "H", "H", "H", "H"],
//   [["A", "B"], "H", "H", "H", "H", "H"],
//   ["H", "H", "T", "H", "H", "H"],
//   ["H", "H", "H", "H", ["A", "B"], "H"],
// ];

// let april = [["H", "H", "H", "H", "H", "H"]];

console.log(payroll(januari));
/*
Absensi Bulan ini :
Hadir: 22
Sakit: 1
Terlambat: 1
Alpa: 0
Cuti: 1
Lembur: 0 jam
Gaji yang anda terima bulan ini adalah Rp. 4950000.
*/
console.log(payroll(februari));
/*
Absensi Bulan ini :
Hadir: 24
Sakit: 0
Terlambat: 0
Alpa: 0
Cuti: 0
Lembur: 5 jam
Gaji yang anda terima bulan ini adalah Rp. 5750000.
*/
// console.log(payroll(maret));
/*
Absensi Bulan ini :
Hadir: 22
Sakit: 0
Terlambat: 1
Alpa: 2
Cuti: 0
Lembur: 0 jam
Gaji yang anda terima bulan ini adalah Rp. 4550000.
*/
// console.log(payroll(april));
// Data absen tidak lengkap!
// console.log(payroll());
// Invalid data!
