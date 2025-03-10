/**
 * code di bawah akan memunculkan alert browser jika menjalankan window.alert().
 * Padahal, seharusnya tidak ada alert browser muncul karena tergantikan dengan function alert yang terbuat.
 * Jadi, harap hati-hati jika kita mendefinisikan sebuah method dengan nama yang sama dengan method milik window. 
 */
function alert(nama) {
  console.log('Hati-hati, ' + nama);
}

// Silakan aktifkan kode di bawah ini dengan hapus komentar untuk melihat hasilnya

// 1. Output di bawah akan tercetak ke console browser
alert('Chewbacca'); // Output: Hati-hati, Chewbacca

// 2. Output di bawah akan tetap tercetak pada console browser
window.alert('Chewbacca'); // Output: Hati-hati, Chewbacca