// Memanipulasi Atribut Melalui setAttribute
// element.setAttribute('nama_atribut_sasaran', 'nilai_atribut_sasaran');

/** Target
 * Menyesuaikan ukuran gambar yang terlalu kecil.
 * Menonaktifkan button ke-4 (Play (Coming Soon)).
 */

// Menyesuaikan ukuran gambar yang terlalu kecil.
const gambar = document.getElementById('gambar');
gambar.setAttribute('width', 300);
gambar.setAttribute('height', 215)

//  Menonaktifkan button ke-4 (Play (Coming Soon)).
const buttons = document.querySelectorAll('.button');
const playButton = buttons[3];
const playButtonElement = playButton.children[0];
playButtonElement.setAttribute('type', 'submit');

// Memanipulasi Konten Melalui innerText, innerHTML, dan style.property
const links = document.getElementById('links');
/**
 * innerHTML mengambil semua konten dalam sebuah elemen beserta tag-tag HTML yang ada, 
 * sedangkan innerText hanya mengambil teks tanpa tag-tag HTML yang ada. 
 */
const dicoding = document.getElementById('dicodingLink');
dicoding.innerText = 'Belajar Programming di Dicoding';
dicoding.innerHTML = '<i>Belajar Programming di Dicoding</i>';

// Manipulasi Style Konten dengan style.property
const buttonss = document.getElementsByClassName('button');
for(const button of buttonss) {
  button.children[0].style.borderRadius = '6px';
}