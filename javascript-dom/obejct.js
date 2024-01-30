var siswa = new Object();
siswa.namaDepan = "agung";
siswa.namaBelakang = "alfatah";
siswa.alamat = "bandung";
siswa.namaLengkap = function () {
  return this.namaDepan + " " + this.namaBelakang;
};

alert("Nama : " + siswa.namaBelakang);

// function namaLengkap() {

// }
