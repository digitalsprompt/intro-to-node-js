// // import the http module
// const http = require("http")

// // save portaddress in variable
// const port = 9090

// // create the server
// const server = http.createServer((req, res)=>{
//     res.end("welcome to my new server")
// })

// // start the server
// server.listen(port, ()=>{
//     console.log("server started successfully")
// })



// creating server with diffrent routes
// import the http module
const http = require("http")
// save portaddress in variable
const port = 9090

// create the server
const server = http.createServer((req, res)=>{
    let path = req.url
    if(path === "/" || path === "/home"){
        res.end("welcome to home page")
    }else if(path==="/about"){
        res.end("welcome to about page")
    }else if(path==="/contact"){
        res.end("welcome to contact page")
    }else if(path==="/testimonial"){
        res.end("welcome to testimonial page")
    }else if(path==="/project"){
        res.end("welcome to projectpage")
    }else{
        res.end("erroe 404 page not found")
    }
})

// start the server
server.listen(port, ()=>{
    console.log("server started successfully")
})