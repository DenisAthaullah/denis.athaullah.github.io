
var pass = 123456
let saldo = 1000000

let tanya = true

while(tanya == true){
    
    var pin = parseInt(prompt(`Selamat Datang Di ATM Bank ABC. Silahkan Masukan pin`))
    
    if (pin == pass ) {
        // document.write(saldo)
    var Ambil = parseInt(prompt(`Saldo Anda 1.000.000 Ketik Jumlah Yang Ingin Anda Ambil`))

    if (Ambil <= saldo) {
        hasil = saldo - Ambil
    }else if (Ambil > saldo){
        alert("saldo kurang")
    }

    alert(`Uang yang di ambil : ${Ambil} ` + `\nSaldo Tersisa ${hasil}`)
    var hasil = (confirm(`Transaksi Anda Berhasil Silahkan Ambil Uang Anda`))

    tanya = confirm("Mau mangulang?")

}else{
    // alert("ERROR!!")
    tanya = confirm("pin anda salah mau ulang?")
}
}