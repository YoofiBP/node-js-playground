const fs = require('fs');

const { Transform } = require('stream');
const {stringify} = require('ndjson');

const ws = fs.createWriteStream('piping.txt')

class ObjectTransform extends Transform {
    constructor(options) {
        super(options);
    }

    _transform(chunk, encoding, callback) {
        const { forename, surname } = chunk;
        this.push({name: `${forename} ${surname}`})
        callback();
    }
}

const transformer = new ObjectTransform({objectMode: true})

transformer.pipe(stringify()).pipe(ws)

transformer.write({ forename: "John", surname: "Doe" })
