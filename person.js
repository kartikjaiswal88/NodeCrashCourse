// const person = {
//     name:"Kartik Jaiswal",
//     age:22
// }

// module.exports = person


class Person{
    constructor(name,age)
    {
        this.name = name;
        this.age = age;
    }

    greeting(){
        console.log(`My name is ${this.name} and I am ${this.age} years old`)
    }
}

module.exports = Person


// Module Wrapper Function
// (function(exports,module,require, __filename, __dirname){

// })

console.log(__filename, __dirname)