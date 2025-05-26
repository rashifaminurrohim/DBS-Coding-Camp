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

// Readable Stream
const readableStream = fs.createReadStream( path.resolve(__dirname, './article.txt'), {
    highWaterMark: 10
});

readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch(error) {
        // catch the error when the chunk cannot be read.
        console.log('chunk cannot be read');
    }
});

readableStream.on('end', () => {
    console.log('Done');
});

// Writeable stream
const writableStream = fs.createWriteStream('output.txt');

writableStream.write('Ini merupakan teks baris pertama!\n');
writableStream.write('Ini merupakan teks baris kedua!\n');
writableStream.end();