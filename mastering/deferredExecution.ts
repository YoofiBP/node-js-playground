const events = require('events');

const getEmitter = () => {
    const emitter = new events.EventEmitter();
    process.nextTick(() => emitter.emit("start"));
    return emitter;
}

const myEmitter = getEmitter();

myEmitter.on("start", () => console.log("started"))

console.log("this should be first")

setTimeout(() => console.log("This should be last"), 500)