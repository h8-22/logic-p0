//startup doel

// const januaryAbsen = [
//     ["H", "H", "H", "H", "H", "H"],
//     [["A", "B"], ["L", 4], "H", ["L", 3], "H", "H"],
//     ["H", "H", "H", "T", ["A","C"], ["A", "C"]],
//     ["H", "T", ["A", "S"], "H", "H", "H"],
// ]

//H == 24, bonus += 500_000
//T, bonus -= 50_000
//L, bonus += 50_000
//IF A
//  B, gaji -= 200.000
//  S && C.
//IF monthlyAbsen == "kosong" or undefined or null.
//INVALID
//monthlyAbsen <= 4

function payroll(monthlyAbsen) {
  if (
    monthlyAbsen === "" ||
    monthlyAbsen === undefined ||
    monthlyAbsen === null
  ) {
    return "Invalid Data!";
  }
  let gaji = 5000000;
  let hadir = 0;
  let terlambat = 0;
  let bolos = 0;
  let sakit = 0;
  let cuti = 0;
  for (let j = 0; j < monthlyAbsen.length; j++) {
    for (let i = 0; i < monthlyAbsen[j].length; i++) {
      console.log(monthlyAbsen[j][i]);
      switch(monthlyAbsen[j][i]){
        case "H":
          hadir++;
          break;
        case "T":
          terlambat++;
          break;
        case "B":
          bolos;
          break;
        case "A":
          if (monthlyAbsen[i][j][1] === "B") {
            bolos++;
          }
      }
    }
  }
  return hadir;
}

let januari = [
  [
    ["H", "H", "H", "H", "H", "H"],
    [["A", "B"], ["L", 4], "H", ["L", 3], "H", "H"],
    ["H", "H", "H", "T", ["A", "C"], ["A", "C"]],
    ["H", "T", ["A", "S"], "H", "H", "H"],
  ],
];

console.log(payroll(januari));
