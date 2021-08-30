const https = require('https');

const payload = `{
    "name": "Yoofi"
}`

const opts ={
    method: 'POST',
    hostname: 'jsonplaceholder.typicode.com',
    path: '/users',
    headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(payload)
    }
}

const req = https.request(opts, res => {
    process.stdout.write(`Status code: ${res.statusCode}\n`);
    process.stdout.write(`Body: `);
    res.pipe(process.stdout);
})

req.on('error', err => {
    console.error(`Error ${err}`)
})

req.end(payload);