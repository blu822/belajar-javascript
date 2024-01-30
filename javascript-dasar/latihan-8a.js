var nilai = prompt ("Masukan Nilai Kamu Manis");
if (nilai <= 10 ) {
    alert(nilai + " " + "Nilai Kamu Ga Ada, Udah Ga Usah Sekolah");

} else if (nilai <= 10 && nilai >= 39) {
    alert(nilai + " " + "Nilai Kamu : E, HARUS BANGET SEMANGAT");

} else if (nilai <= 64 && nilai >= 39) {
    alert(nilai + " " + "Nilai Kamu : D, Lebih Semangat Lagi Ya");

} else if (nilai <= 74 && nilai >= 64 ) {
 alert(nilai + " " + "Nilai Kamu : C, Udah Lumayan");

} else if (nilai <= 84 && nilai >= 74 ) {
    alert(nilai + " " + "Nilai Kamu : B, Udah Bagus Kok");

} else if (nilai <= 100 && nilai >= 84 ) {
    alert(nilai + " " + "Nilai Kamu : A, Pinter Banget Sihhh");
} else {
    alert("Itu Bukan Angka Cerdas☺")
}