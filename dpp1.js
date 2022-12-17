// Pair Programming
    // Ketika umur nya 50 tahun keatas, maka tampilkan 'Anda seharusnya sudah pensiun'

let city = "Thamgo";
let age = 49;
let departement = "Departemen Keamanan";
// departement = "Departemen Intelijen";

if (city === "Thamgo") {
  if (age < 50) {
    if (age > 17) {
      //harusnya comparison
      // Ketika kota nya adalah Thamgo
      // Ketika umur nya lebih dari 17
      if (age > 30) {
        // Umur diatas 30
        if (departement === "Departemen Keamanan") {
          //kurungnnya kelebihan dan harusnya comparison
          // Ketika masuk departemen keamanan
          console.log(
            "Anda diterima di divisi senior dan berada dibawah pimpinan James Lordon."
          );
        } else {
          // Ketika masuk deparemen intelijen
          console.log(
            "Anda diterima di divisi senior dan berada dibawah pimpinan Barbara Lordon."
          );
        }
      } else {
        // Umur diantara 18 - 30
        if (departement === "Departemen Keamanan") {
          //kurungnnya kelebihan dan harusnya comparison
          // Ketika masuk departemen keamanan
          console.log(
            `Anda diterima di divisi junior dan berada dibawah pimpinan Jason Toad, dan ${
              31 - age
            } tahun lagi anda masuk divisi senior.`
          );
        } else {
          // Ketika masuk deparemen intelijen
          console.log(
            `Anda diterima di divisi junior dan berada dibawah pimpinan Tim Brake, dan ${
              31 - age
            } tahun lagi anda masuk divisi senior.`
          );
        }
      }
    } else {
      // Ketika umur nya 17 kebawah
      console.log(
        `Anda masih ${
          18 - age
        } tahun dibawah usia minimal agar dapat diterima kerja.`
      );
    }
  } else {
    console.log("'Anda seharusnya sudah pensiun'");
  }
} else {
  // Ketika kota nya bukan Thamgo
  console.log("Maaf anda tidak bisa mendaftar karena bukan warga kota Thamgo.");
}
