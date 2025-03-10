let loop = true;
do {
  // Menangkap pilihan player
  const p = prompt('pilih: gajah, semut, orang');
  
  // Menangkap pilihan komputer
  // Mengambil angka random
  let comp = Math.random();
  if (comp < 0.34) {
    comp = 'gajah';
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = 'orang';
  } else {
    comp = 'semut';
  }

  // Menentukan Rules
  let hasil = '';
  if (p === comp) {
    hasil = 'SERI';
  } else if (p === 'gajah') {
    // if (comp === 'orang') {
    //   hasil = 'MENANG';
    // } else {
    //   hasil = 'KALAH';
    // } 
    hasil = (comp === 'orang') ? 'MENANG' : 'KALAH' // -> ternary operator untuk meringkas if else
  } else if (p === 'orang') {
    if (comp === 'semut') {
      hasil = 'MENANG';
    } else {
      hasil = 'KALAH';
    } 
  } else if (p === 'semut') {
    if (comp === 'gajah') {
      hasil = 'MENANG';
    } else {
      hasil = 'KALAH';
    } 
  } else {
    hasil = 'memasukkan input yang salah!';
  }
  alert('Kamu memilih ' + p + ' dan komputer memilih ' + comp + '\nMaka hasilnya : kamu ' + hasil);
  loop = confirm('main lagi?');
} while (loop);

alert('terimakasih sudah bermain');