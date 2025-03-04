const jmlAngkot = 10;
const ankotBeroprasi = 6;

for (let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= ankotBeroprasi && noAngkot !== 5) {
    console.log('Angkot No.' + noAngkot + ' Sedang beroprasi.')

  } else if (noAngkot === 5 || noAngkot === 8 || noAngkot === 10) {
    console.log('Angkot No.' + noAngkot + ' Sedang lembur.')

  } else {
    console.log('Angkot No.' + noAngkot + ' Sedang tidak beroprasi.')
  }
}