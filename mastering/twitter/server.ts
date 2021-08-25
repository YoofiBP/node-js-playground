const fs = require('fs');
const http = require('http');

let theUser = null;
let userPos = 0;
const tweetFile = 'tweets.txt';

const twitterPayload = require('./tweets.json');


http.createServer((request, response) => {
    //Write headers to response
    response.writeHead(200,{
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
    });

    theUser = response;

    //write data to stream
    response.write(`: ${Array(2049).join(' ')}\n`);
    response.write('retry: 2000\n');

    response.socket.on('close', () => {
        console.log("Connection closed")
        theUser = null;
    })

}).listen(8080);

const cleanBuffer = function(bufferLength){
    const buffer = Buffer.alloc(bufferLength);
    buffer.fill('\0');
    return buffer;
}

//writing tweets to file
const writeStream = fs.createWriteStream(tweetFile, {flags: 'a'});

const check = function(){
    const twitterStatuses = twitterPayload.statuses;
    const buffer = cleanBuffer(twitterStatuses.length * 140);
    twitterStatuses.forEach((status, index) => {
        buffer.write(status.text, index * 140);
    })
    writeStream.write(buffer);
    setTimeout(check, 10000)
}

check()

const sendNext = function (fd) {
    const buffer = Buffer.alloc(140);
    fs.read(fd, buffer, 0, 140, userPos * 140, function (err, bytesRead) {
        if(!err && bytesRead > 0 && theUser){
            ++userPos;
            theUser.write(`data: ${buffer.toString('utf-8', 0, bytesRead)}\n\n`);
            return process.nextTick(function () {
                sendNext(fd)
            })
        }
    })
}

const start = function() {
    fs.open(tweetFile, 'r', (err, fd) => {
        if(err){
            return setTimeout(start, 1000)
        }

        fs.watch(tweetFile, (event, _filename) => {
            if(event === 'change'){
                sendNext(fd)
            }
        })
    })
}
start();
