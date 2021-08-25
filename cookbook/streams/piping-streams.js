const fs = require('fs');

const readStream = fs.createReadStream('file.txt', {encoding: "utf8"});

const writeStream = fs.createWriteStream('write.txt');

readStream.pipe(writeStream);
