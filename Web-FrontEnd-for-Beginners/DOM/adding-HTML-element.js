// Menambahkan Elemen dengan appendChild()
const newElement = document.createElement('li');
newElement.innerText = 'Selamat Menikmati!';
const daftar = document.getElementById('daftar');
daftar.appendChild(newElement);

// Menambahkan Elemen dengan insertBefore()
const elementAwal = document.createElement('li');
elementAwal.innerText = 'Hidupkan Kompor.';
// const daftar = document.getElementById('daftar');
const itemAwal = document.getElementById('awal');
daftar.insertBefore(elementAwal, itemAwal);
