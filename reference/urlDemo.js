// Studying the url module of Node.js
const url = require("url") // deprecated

const myURL = new URL("http://mywebsite.com:8080/hello.html?id=200&status=active");

// Serialized URL
console.log(myURL.href);
console.log(myURL.toString())

// Host (root domain)
console.log(myURL.host)

// HostName
console.log(myURL.hostname)

// Pathname
console.log(myURL.pathname)

// Serialized Query
console.log(myURL.search)

// Search Parameter
console.log(myURL.searchParams)

// Add Parameter
myURL.searchParams.append("kartik", "Jaiswal")
console.log(myURL.searchParams)

// Loop through each Parameter
myURL.searchParams.forEach((value,name)=>console.log(`${name}:${value}`))