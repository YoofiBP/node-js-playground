const fs = require('fs');

const fileName = process.argv[2];

function printMetaData(file){
    const fileStats = fs.statSync(file);
    console.log(fileStats)
}

printMetaData(fileName)
