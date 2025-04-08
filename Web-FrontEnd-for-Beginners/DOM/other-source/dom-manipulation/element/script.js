// // Penggunaan innerHTML
// const judul = document.getElementById('judul');
// judul.innerHTML = 'rashifAra';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = '<em>Hello World</em>';

// // Penggunaan element.style.<propertiCSS>
// const judul = document.querySelector('#judul');
// judul.style.color = 'blue';
// judul.style.backgroundColor = 'salmon';

// Penggunaan setAttribute(), getAttribute(), removeAttribute(), dan berbagai macam classList 
const judul = document.getElementsByTagName('h1')[0];
judul.setAttribute('name', 'rashif');

const a = document.querySelector('section#a a');
a.setAttribute('target', '#');
a.innerHTML = 'Instagram Rashif Aminurrohim';
a.setAttribute('href', 'http://instagram.com/rasifara_');
a.getAttribute('href');
a.removeAttribute('target');

// manipulasi kelas menggunakan classList
const p2 = document.getElementsByClassName('p2')[0];
// menambahkan kelas baru
// p2.setAttribute('class', 'label');
p2.classList.add('label'); // ditambahkan
p2.classList.remove('label'); // dihapus
p2.classList.toggle('label'); // ditambahkan
p2.classList.toggle('label'); // dihapus

p2.classList.add('satu');
p2.classList.add('dua');
p2.classList.add('tiga');
p2.classList.item(2); // mengembalikan "dua"
p2.classList.contains('empat'); // mengembalikan false
p2.classList.replace('tiga', 'empat'); // mereplace class tiga dengan empat

