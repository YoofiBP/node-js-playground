const fs = require('fs');

const dataBuffer = Buffer.from('Hello World');

fs.writeFileSync('./test.txt', dataBuffer);