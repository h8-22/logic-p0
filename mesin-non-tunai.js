let gerbangKeluar = "IC Caruban"
let golonganKendaraan = "I"
let saldo = 800000
let tarif
if (
    gerbangKeluar !== "IC Caruban" &&
    gerbangKeluar !== "IC Nganjuk" ||
    (golonganKendaraan !== "I" &&
    golonganKendaraan !== "II" &&
    golonganKendaraan !== "III")
) {
    console.log("Tarif tidak ditemukan");
} else {
    if (gerbangKeluar === "IC Caruban") {
        if (golonganKendaraan === "I") {
            tarif = 8500;
        } else if (golonganKendaraan === "II" || golonganKendaraan === "III") {
            tarif = 12500;
        }
    } else if (gerbangKeluar === "IC Nganjuk") {
        if (golonganKendaraan === "I") {
            tarif = 12500;
        } else if (golonganKendaraan === "II" || golonganKendaraan === "III") {
            tarif = 65500;
        }
    }

    if (saldo > tarif) {
        console.log(
            `Sisa saldo anda adalah Rp ${saldo - tarif
            },00. Semoga selamat sampai tujuan.`
        );
    } else {
        console.log(
            `Saldo anda kurang Rp ${tarif - saldo},00. Tidak cukup untuk transaksi.`
        );
    }
}
