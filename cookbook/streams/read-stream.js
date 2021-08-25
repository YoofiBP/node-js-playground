const fs = require('fs');

const readStream = fs.createReadStream('file.txt', {encoding: "utf8"});

readStream.on('readable', () => {
    const data = readStream.read();

})