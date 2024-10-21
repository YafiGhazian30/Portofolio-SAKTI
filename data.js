document.getElementById('pesanForm').addEventListener('submit', function(event){
    event.preventDefault (); //Mnecegah form kirim secara default
    const nama = document.getElementById('nama').value; //Mengambil nilai input nama
    const email = document.getElementById('email').value;
    const pesan = document.getElementById('pesan').value; //Mengambil nilai textarea pesan

    //Mengecek apakah input telah diisi
    if(nama && email) {
        alert(`Terima kasih, ${nama}. Pesan anda sudah terkirim!`); //Pesan sukses
        document.getElementById('pesanForm').reset(); //Mengosongkan form setelah submit
    } else {
        alert('Tolong diisi form ini yaa'); //Pesan eror jika ada yang kosong
    }
});