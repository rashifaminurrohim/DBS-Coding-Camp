// jika kita ingin membuat sebuah elemen HTML dengan tag <p>, sintaksnya adalah sebagai berikut:
const newElement = document.createElement('p');
newElement.innerText = 'Selamat datang ke HTML kosong ini :)';
// Misalnya kita ingin menambahkan tag <b> untuk membungkus kata "Selamat datang". 
// Oleh karena itu, kita tulis ulang nilai string dan melakukan assignment menggunakan properti innerHTML.
newElement.innerHTML = '<b>Selamat datang</b> ke HTML kosong ini :)';

// membuat element gambar
const newImg = document.createElement('img');
// Untuk memberikan atribut src pada elemen <img>, kita bisa memanggil function setAttribute().
newImg.setAttribute('src', 'https://picsum.photos/200/300');

// untuk memunculkannya di browser element-element diatas harus disematkan ke berkas HTML