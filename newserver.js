const http = require("http")
const fs = require('fs')
const port = 7070



const homePage = fs.readFileSync('./pages/index.html', 'utf-8')
const aboutPage = fs.readFileSync('./pages/about.html', 'utf-8')
const contactPage = fs.readFileSync('./pages/contact.html', 'utf-8')
const projectPage = fs.readFileSync('./pages/project.html', 'utf-8')
const testimonialPage = fs.readFileSync('./pages/testimonial.html', 'utf-8')
const errorPage = fs.readFileSync('./pages/error.html', 'utf-8')

const server = http.createServer((req, res)=>{
    let path = req.url
    if(path==="/" || path==="/home"){
        res.end(homePage)
    }else if(path==="/about"){
        res.end(aboutPage)
    }else if(path==="/project"){
        res.end(projectPage)
    }else if(path==="/contact"){
        res.end(contactPage)
    }else if(path==="/testimonal"){
        res.end(testimonialPage)
    }else{
        res.end(errorPage)
    }
})

server.listen(port, ()=>{
    console.log("newserver started successfully")
})