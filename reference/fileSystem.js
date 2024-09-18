// Studying fileSystem Module of Nodejs

const fs = require('fs')
const path = require('path')

/*
// Create folder
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if (err) throw err
    console.log("Congrats! Folder is created.....")
})


// Create and Write to a file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
    if (err) throw err
    console.log("Congrats! File is created and written.....")

    // Append to a file
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), "I love Node.js",err=>{
        if(err) throw err
        console.log("Appended to the file")
    })
})
*/


// Reading File
fs.readFile(path.join(__dirname,'/test', 'hello.txt'),'utf-8',(err,data)=>{
    if(err) throw err
    console.log(data)
})

fs.rename(path.join(__dirname,'/test', 'hello.txt'),path.join(__dirname,'/test', 'helloWorld.txt'),(err)=>{
    if(err) throw err
    console.log("File Renamed......")
})