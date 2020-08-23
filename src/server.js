const express = require("express")
const server = express()

// Setting statics file
server.use(express.static("public"))


// Setting ways of the application
// Home
server.get("/", function(req,res) {
    res.sendFile(__dirname + "/views/index.html")
})

// Create-service
server.get("/", function(req,res) {
    res.sendFile(__dirname + "/views/create-service.html")
})

server.listen(3000) // Start the server