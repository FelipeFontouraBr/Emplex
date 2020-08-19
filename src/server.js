const express = require("express")
const server = express()

// Setting ways of the application

// Home
server.get("/", function(req,res) {
    res.send("oi")
})

server.listen(3000) // Start the server