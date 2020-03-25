
// Tanggal format Indonesia
var bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei','Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
var hari = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum&#39;at', 'Sabtu', 'Minggu'];
var tanggal = new Date().getDate(); // menampilkan tanggal hari ini
var _hari = new Date().getDay(); // menampilkan hari dalam bentuk angka dimulai dari 0 = minggu
var _bulan = new Date().getMonth(); // menampilkan bulan ini dalam bentuk angka dimulai dari 0 = januari
var tahun = new Date().getFullYear(); // menampilkan tahun ini
var hari = hari[_hari]; // mengubah hari menjadi format indonesia
        
var bulan = bulan[_bulan]; // mengubah bulan menjadi format inodnesia
var tanggalIndo = hari + ', ' + tanggal + ' ' + bulan + ' ' + tahun;
document.querySelector('.tampilTgl').innerHTML = tanggalIndo;