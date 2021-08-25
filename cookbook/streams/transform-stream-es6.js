const fs = require('fs');
const { Transform } = require('stream');

const rs = fs.createReadStream('sample.txt');

class Uppercase extends Transform {
    constructor() {
        super();
    }
    _transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase())
        callback();
    }
}

const ws = fs.createWriteStream('newFile.txt');

rs.pipe(new Uppercase()).pipe(ws);