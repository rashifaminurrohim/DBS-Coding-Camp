// TODO: tampilkan teks pada notes.txt pada console.
const fs = require('fs');
const path = require('path');

const fileReadCallBack = (error, data) => {
  if (error) {
    console.log('gagal membaca file');
    return;
  }

  console.log(data);
};

fs.readFile( path.resolve(__dirname, 'notes.txt') , 'UTF-8', fileReadCallBack );