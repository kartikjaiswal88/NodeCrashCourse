const EventEmitter = require("events")
const uuid = require("uuid")

console.log(uuid.v4())

class Logger extends EventEmitter{
    log(msg){
        // Call event
        this.emit('message',{id:uuid.v4(), msg})
    }
}

// module.exports = Logger;

const logger = new Logger();
// Event Listener
logger.on("message", data=> console.log("Called listener:",data))

// Calling the log Method which will fire the event
logger.log("Hello World")
logger.log("Hiii")
logger.log("Hey Buddy!")