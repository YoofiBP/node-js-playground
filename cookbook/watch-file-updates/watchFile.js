const fs = require('fs');

const filename = 'watch.txt';

fs.watchFile(filename, (current, previous) => {

})