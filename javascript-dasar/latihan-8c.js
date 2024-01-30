var pilihanUser = prompt("Apakah kamu gajah, orang, atau semut?");
var pilihanComputer = Math.random();

if (pilihanComputer < 0.34) {
  pilihanComputer = "gajah";
} else if (pilihanComputer <= 0.67) {
  pilihanComputer = "orang";
} else {
  pilihanComputer = "semut";
}

function bandingkanPilihan(user, computer) {
  if (user === computer) {
    return "Hasilnya seri";
  } else if (
    (user === "gajah" && computer === "orang") ||
    (user === "orang" && computer === "semut") ||
    (user === "semut" && computer === "gajah")
  ) {
    return "Kamu menang!";
  } else {
    return "Komputer menang!";
  }
}

if (
  pilihanUser === "gajah" ||
  pilihanUser === "orang" ||
  pilihanUser === "semut"
) {
  var hasil = bandingkanPilihan(pilihanUser, pilihanComputer);
  alert(
    "Kamu memilih: " +
      pilihanUser +
      "\nKomputer memilih: " +
      pilihanComputer +
      "\n\n" +
      hasil
  );
} else {
  alert("Minimal Milih KAK!!!!!! Gimana Mau Main");
}
