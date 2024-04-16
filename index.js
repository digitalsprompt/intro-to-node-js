// importing file system
const fs = require("fs")
// reading the file
const content = fs.readFileSync("./files/idris.txt", "utf-8")
// display to console
console.log(content)

// practice read file
const output = fs.readFileSync("./files/tete.txt", "utf-8")
console.log(output)

// writing files
const christiana = "is a web developer"
fs.writeFileSync("./files/christiana.txt", christiana)

const tboy = "software engineer"
fs.writeFileSync("./files/tboy.txt", tboy)

const lloyd = "data scientist"
fs.writeFileSync("./files/lloyd.txt", lloyd)

// reading asynchronously
fs.readFile("./files/asynchronous.txt", "utf-8", (error, data) => {
    if(error){
        console.log(error)
    }else{
        console.log(data)
    }
})

fs.readFile("./files/async.txt", "utf-8", (error, data) => {
    if(error){
        console.log(error)
    }else{
        console.log(data)
    }
})