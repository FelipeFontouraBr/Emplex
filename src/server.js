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
    return res.render("index.html", { title: "umtítulo"})
})

// Create-service
server.get("/create-service", function(req,res) {
    return res.render("create-service.html")
})

// Search-results
server.get("/search", function(req,res) {
    return res.render("search-results.html")
})

server.listen(3000) // Start the server
console.log("Server is running")