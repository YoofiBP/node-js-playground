const fs = require('fs');

const rs = fs.createReadStream('file.txt');

const run = async () => {
    for await (const chunk of rs) {
        console.log(`Read data ${chunk}`);
    }
}

run()