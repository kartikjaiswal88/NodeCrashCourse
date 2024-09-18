// Studying the event Module of Node.js
const EventEmitter = require("events")

// Create Class
class MyEmitter extends EventEmitter{}

// Initialize Object
const myEmitter = new MyEmitter();

// Event Listener
myEmitter.on("event", ()=>{
    console.log("Event is fired")
})

// Init Event
myEmitter.emit("event")
myEmitter.emit("event")
myEmitter.emit("event")