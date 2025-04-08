// DOM: Node Manipulation
// buat element baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');
// simpan teks ke dalam paragraf
pBaru.appendChild(teksPBaru);
// simpan pBaru di akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

// menyisipkan item list baru di tengah ul
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');
// simpan teks li baru ke dalam tag <li>
liBaru.appendChild(teksLiBaru);
// buat parent element list nya
const ul = document.querySelector('section#b ul');
// pilih elemen list sesudah nya agar bisa menggunakan insert before
const li2 = ul.querySelector('li:nth-child(2)');
ul.insertBefore(liBaru, li2);


// penggunaan removeChild() dan replaceChild()
// removeChild membutuhkan parent dan child yang mau di remove
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

// replaceChild membutuhkan parent dan child yang mau di remove
// get parent
const sectionB = document.getElementById('b');
// tentukan element yang mau diganti
const parag4 = sectionB.querySelector('p');
// buat element pengganti
const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru!');
h2Baru.appendChild(teksH2Baru);
// jalankan method replaceChilde
sectionB.replaceChild(h2Baru, parag4);


// daftar element baru since starter project
pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';
