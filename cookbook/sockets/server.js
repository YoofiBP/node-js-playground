const net = require('net');

const HOSTNAME = "localhost";
const PORT = 3000;

net.createServer(socket => {
    console.log('Client Connected')

    socket.on('data', (name) => {
        socket.write(`Hello ${name}`)
    })

}).listen(PORT, HOSTNAME, () => {
    console.log(`Server listening on port :${PORT}`)
});