// function antrian(array, person) {
//   return array.push(person);
// }

// function panggilAntrian(array) {
//   return array.shift();
// }

// function tumpukan(array, title) {
//   return array.unshift(title);
// }

function ganjilGenap(plat) {
  let odd = 0;
  let even = 0;
  splittedPlat = plat.split(";");
  // console.log(splittedPlat);
  // console.log(Number(splittedPlat[1]));

  if (plat.length > 0) {
    for (let i = 0; i < splittedPlat.length; i++) {
      // console.log(i);
      if (Number(splittedPlat[i]) % 2 == 0) {
        even++;
      } else {
        odd++;
      }
    }

    if (even > 0) {
      if (odd == 0) {
        return `plat genap sebanyak ${even} dan plat ganjil tidak ditemukan`;
      }
    } else if (odd > 0) {
      if (even == 0) {
        return `plat ganjil sebanyak ${odd} dan plat genap tidak ditemukan`;
      }
    } 
    // console.log(even);
  } else {
    return `Invalid data`; 
  }
}

console.log(ganjilGenap("1321;2131"));
