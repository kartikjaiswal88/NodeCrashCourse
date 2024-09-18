// Studying http Module of Node.js
const http = require("http")

http.createServer((req,res) =>{
    res.write("Chal Gya Bhai Server.......")
    res.end()
}).listen(4000,()=> console.log("Server is Running....."))