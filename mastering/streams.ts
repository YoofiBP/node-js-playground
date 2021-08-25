const stream = require('stream');

const Feed = function(){
    const readable = stream.Readable()

    const data = ["Chelsea", "United"]

    readable._read = () => {
        if(data.length){
            console.log("Here")
            return readable.push(data.shift() + "\n")
        }

        readable.push(null)
    }
    return readable;
}

const feed = Feed();

feed.on("readable", () => {
    const data = feed.read()
    data && process.stdout.write(data)
})

feed.on("end", () => {
    console.log("Ended")
})

console.log(global)