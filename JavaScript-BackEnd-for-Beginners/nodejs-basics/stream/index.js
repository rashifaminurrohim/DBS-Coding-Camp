const fs = require('fs');
const path = require('path');

// Readable Stream
const readableStream = fs.createReadStream( path.resolve(__dirname, './input.txt'), {
    highWaterMark: 15
});

// Writeable stream
const writableStream = fs.createWriteStream(path.resolve(__dirname, './output.txt'));

readableStream.on('readable', () => {
    try {
        writableStream.write(`${readableStream.read()}\n`);
    } catch(error) {
        // catch the error when the chunk cannot be read.
        console.log('chunk cannot be read');
    }
});

readableStream.on('end', () => {
    writableStream.end();
});