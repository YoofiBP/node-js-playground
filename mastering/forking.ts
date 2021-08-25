//Demonstrating interprocess communication in node

const cp = require('child_process');
const server = require('http').createServer((req, res) => {});
const child = cp.fork('./mastering/child.ts');

server.on("connection", socket => {
    console.log("Parent connected")
    socket.end('Parent handled connection');
})

server.listen(4000, () => {
    console.log(`Server running on 4000`)
    child.send('The parent message', server);
})
