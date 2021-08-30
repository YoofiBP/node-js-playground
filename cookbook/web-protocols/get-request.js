const https = require('https');

https.get('https://jsonplaceholder.typicode.com/users', (res) => {
    res.pipe(process.stdout)
});