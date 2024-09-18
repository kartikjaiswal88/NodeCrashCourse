
/* Importing the Javascript Object */
// import Person from "./person"; //Requires Babel to compile it (ES6)
// const person = require("./person")  //Common Js
// console.log(person)


/* Importing the Javascript Class */
// const Person = require("./person")
// const person = new Person('Kartik Jaiswal', 23);
// person.greeting()
// console.log(person)


// const Logger = require("./logger")


const http = require("http")
const fs = require("fs")
const path = require("path")

const server = http.createServer((req, res) => {
    // console.log(req.url);

    // if (req.url === "/") {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //         if (err) throw err
    //         res.writeHead(200, { 'Content-Type': 'text/html' })
    //         res.end(content)

    //     })
    //     // res.end("<h1>Hello World <br> Kartik Jaiswal</h1>")
    //     // res.end("")
    // }
    // else if (req.url === "/aboutus") {
    //     console.log("Inside else if")
    //     fs.readFile(path.join(__dirname, 'public', 'aboutus.html'), (err, content) => {
    //         if (err) throw err
    //         res.writeHead(200, { 'Content-Type': 'text/html' })
    //         res.end(content)

    //     })
    // }
    // else if (req.url === "/api/users") {
    //     res.writeHead(200, { "Content-Type": "application/json" })
    //     const users = [
    //         { name: "Kartik Jaiswal", age: 22 },
    //         { name: "Kartik Sharma", age: 21 }
    //     ]

    //     res.end(JSON.stringify(users))
    // }







    // Building Dynamic File Path
    const filePath = path.join(__dirname, 'public', req.url == '/' ? "index.html" : (req.url))

    // Building the Extension Name
    const extName = path.extname(filePath)

    // Initial Content Type
    let contentType = "text/html"

    // Check Extension and Set Content Type
    switch (extName) {
        case '.js':
            contentType = "text/javascript";
            break;
        case '.css':
            contentType = "text/css";
            break;
        case '.json':
            contentType = "application/json";
            break;
        case '.png':
            contentType = "image/png";
            break;
        case '.jpg':
            contentType = "image/jpg";
            break;
    }


    // Read File
    fs.readFile(filePath, (err, content) => {
        if(err) {
            if(err.code =="ENOENT")
            {
                // Page Not Found
                fs.readFile(path.join(__dirname,'public','404.html'), (err,content)=>{
                    res.writeHead(200,{"Content-Type":"text/html"})
                    res.end(content,"utf-8")
                })
            }
            else{
                // Some Server Error
                res.writeHead(500)
                res.end(`Server Error:${err.code}`)
            }
        }
        else{
            //Success
            res.writeHead(200, { "Content-Type": contentType })
            res.end(content,'utf-8')

        }
    })
})

const PORT = process.env.PORT || 4000

server.listen(PORT, () => {
    console.log("Server is Running on:", PORT)
})





