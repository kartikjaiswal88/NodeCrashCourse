// Studying Path module of NodeJs
const path = require('path')

// Base File Name
console.log(__filename)
console.log(path.basename(__filename))

// Directory Name
console.log(__dirname)
console.log(path.dirname(__filename))

// File Extension
console.log(path.extname(__filename))

// Create path object
console.log(path.parse(__filename))
console.log(path.parse(__filename).base)

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'))