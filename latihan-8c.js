function getPilihanKomputer() {
  const komputer = Math.random();

  if (komputer < 0.34) return "gajah";
  if (komputer >= 0.34 && komputer < 0.67) return "orang";
  return "semut";
}

function getHasil(user, komputer) {
  if (user == komputer) return "SERI!";
  if (user == "gajah") return komputer == "orang" ? "MENANG!" : "KALAH!";
  if (user == "orang") return komputer == "semut" ? "MENANG!" : "KALAH!";
  if (user == "semut") return komputer == "gajah" ? "MENANG!" : "KALAH!";
  return "Pilihan tidak valid! Silakan pilih gajah, orang, atau semut.";
}

function suitJawa() {
  const user = prompt("Pilih: gajah, orang, atau semut?").toLowerCase();
  const komputer = getPilihanKomputer();
  const hasil = getHasil(user, komputer);

  alert(`Kamu memilih ${user}, komputer memilih ${komputer}.\nHasil: ${hasil}`);
}

suitJawa();
