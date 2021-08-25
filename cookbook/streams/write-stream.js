const fs = require('fs');

const writeStream = fs.createWriteStream('file.txt', {encoding: "utf8"})

for (let i = 0; i < 100; i++) {
    writeStream.write('Whats good\n');
}