// mendapatkan konten-konten pada elemen dengan tag <head> melalui objek document dengan kode berikut:
const head = document.head;
// Bagaimana jika kita ingin mendapatkan elemen <body> saja?
const body = document.body;
// Kedua properti yakni head dan body akan mengembalikan elemen yang sama seperti document yakni sebuah objek.

// Bagaimana jika kita ingin lebih spesifik lagi? Misalnya sebuah elemen tunggal?
//  Salah satu method yang bisa kita gunakan adalah getElementById(). 
// Method tersebut berfungsi untuk mendapatkan elemen berdasarkan nilai id-nya.
const gambar = document.getElementById('gambarUtama');
// Mengembalikan banyak elemen (HTMLCollection) yang memiliki attribute name dengan nilai "button".
document.getElementsByName('button')
// Mengembalikan banyak elemen (HTMLCollection) yang memiliki attribute class dengan nilai "button".
document.getElementsByClassName('button')
// Mengembalikan banyak elemen (HTMLCollection) yang merupakan <div> element.
document.getElementsByTagName('div')
// Mengembalikan elemen pertama (node) yang menerapkan class "button".
document.querySelector('.button')
// Mengembalikan banyak Node dalam bentuk NodeList yang menerapkan class "button".
document.querySelectorAll('.button')