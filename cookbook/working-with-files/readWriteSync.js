const fs = require('fs').promises;
const path  = require('path');

const filePath = path.join(__dirname, 'hello.txt')

const run = async () => {
    const data = await fs.readFile(filePath, {encoding: "utf8"});
    const newData = data.toUpperCase();
    try {
        await fs.writeFile(filePath, newData);
        console.log('Writing success')
    } catch (e) {
        console.log('Writing failed')
    }
}


run();

