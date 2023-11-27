let belanja = parseInt(prompt("Masukan Nominal Belanja"))
if ( belanja >= 0 && belanja < 100000){
    document.writeln(`Anda Belanja = ${belanja}<br>`)
    document.writeln("Anda Tidak Dapat Diskon<br>")
}
else if(belanja >= 100000 && belanja < 200000){
    document.writeln(`Anda Belanja = ${belanja}<br>`)
    document.writeln("Anda Mendapat Diskon 10%<br>")
    let diskon = belanja * 0.10
    let hasil = belanja - diskon
    document.writeln(`Jumlah Bayar = ${hasil}<br>`)
    
}
else if(belanja >= 200000){
    document.writeln(`Anda Belanja = ${belanja}<br>`)
    document.writeln("Anda Mendapat Diskon 25%<br>")
    let diskon = belanja * 0.25
    let hasil = belanja - diskon
    document.writeln(`Jumlah Bayar = ${hasil}<br>`)
}
else {
    document.writeln("Nilai Yang Anda Masukan Salah")
}