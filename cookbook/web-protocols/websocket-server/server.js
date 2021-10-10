const WebSocket = require('ws');

const server = new WebSocket.Server({
    port:3000
});

server.on('connection', (socket) => {
    socket.on('message', (msg) => {
        console.log(`Server received: ${msg}`);
        if(msg.toString() === "Hello"){
            socket.send("World!");
        }
    })
})