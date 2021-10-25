// * IF
var jam = 22;
if(jam < 10) { // (kondisi 1)
    sambutan = "Selamat Pagi!"; // kode yang akan dijalankan jika kondisi 1 true
} // * Else IF 
else if(jam > 10 && jam < 18) { // (kondisi 2)
    sambutan = "Selamat Siang!"; //jalankan jika kondisi 1 false dan kondisi 2 true
} 
// * Else
else { 
    sambutan = "Selamat Malam!"; //jalankan jika kondisi 1 false dan kondisi 2 false
}
console.log(sambutan);