const express = require("express")
const server = express()

// Setting statics file
server.use(express.static("public"))

// Template Engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

// Setting ways of the application
// Home
server.get("/", function(req,res) {
    return res.render("index.html")
})

// Create-service
server.get("/create-service", function(req,res) {
    return res.render("create-service.html")
})

server.listen(3000) // Start the server