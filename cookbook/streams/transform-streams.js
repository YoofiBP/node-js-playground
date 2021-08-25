const fs = require('fs');

const { Transform } = require('stream');

const rs = fs.createReadStream('sample.txt');
const ws = fs.createWriteStream('newFile.txt');

const uppercase = new Transform({
transform(chunk, encoding, callback){
    callback(null, chunk.toString().toUpperCase())
}
})


rs.pipe(uppercase).pipe(ws);