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

