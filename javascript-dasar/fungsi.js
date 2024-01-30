var x = "25";
var y = "3.14";

var toNum = parseInt(x);
var toFloat = (y);
var toString = toNum.toString();
console.log(toString + toString);

// fungsi deklarasi
function jumlah(a, b) {
    return a + b;
}

// fungsi expresi
var kurang = function (a, b) {
    return a - b;
};
alert(jumlah(5, 20));
alert(kurang(20, 5));