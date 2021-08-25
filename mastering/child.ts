process.on("message", (message, server) => {
    server.on("connection", (socket) => {
        console.log("Child connected")
        socket.end("Child handled connection");
    })
})