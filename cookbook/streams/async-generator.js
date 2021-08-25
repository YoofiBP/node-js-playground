const { Readable } = require('stream');

async function* generate(){
    yield "Node.js";
    yield "is";
    yield "a";
    yield "Javascript";
    yield "Runtime"
}