// Studying the OS module of Node.js

const os = require("os")

// Platform
console.log(os.platform())

// CPU Architecture
console.log(os.arch())

// CPU Core Info
console.log(os.cpus())

// Total Memory
console.log(os.totalmem())

// Free Memory
console.log(os.freemem())

// Home directory
console.log(os.homedir())

// Uptime
console.log(os.uptime())