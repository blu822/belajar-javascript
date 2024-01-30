var siswa = new Object();
siswa.namaDepan = "agung";
siswa.namaBelakang = "alfatah";
siswa.alamat = "bandung";
siswa.namaLengkap = function () {
  return this.namaDepan + " " + this.namaBelakang;
};

var siswa2 = {
  namaDepan: "ilham",
  namaBelakang: "anugrah",
  alamat: "bandung",
  namaLengkap: function () {
    return this.namaDepan + " " + this.namaBelakang;
  },
};

alert("Nama : " + siswa.namaLengkap());
alert("Nama : " + siswa2.namaLengkap());

// function namaLengkap() {

// }
