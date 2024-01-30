function login() {
    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;

    if(username === "" || password === "") {
        alert("Minimal Isi Dulu Lah");
        return;
    }

    if(username === "admin" && password === "admin") {
        alert("Selamat Datang Sayang🥰");
        document.location.href = "admin.html";
    } else {
        alert("Lu Siapa Sok Asik Banget")
    }
}