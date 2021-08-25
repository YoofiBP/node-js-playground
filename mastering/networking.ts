const dgram = require('dgram');
const client = dgram.createSocket("udp4");
const server = dgram.createSocket("udp4");

const message = process.argv[2] || "placeholder message";

console.log(process.versions.v8);

server.on("message", function(msg){
    process.stdout.write("Got message: " + msg + "\n");
    process.exit();
}).bind(41235)

client.send(message, 0, message.length, 41235, "localhost");
