const express = require("express")
const server = express()

// Get database
const db = require("./database/db")

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

    console.log(req.query)


    return res.render("create-service.html")
})

// Search-results
server.get("/search", function(req,res) {

    // get data from database
    db.all(`SELECT * FROM services`, function(err, rows){
        if(err) {
            return console.log(err)
        }

        const total = rows.length

        // Show page .html with data from database
        return res.render("search-results.html", { services: rows, total: total})
    })    
})

server.listen(3000) // Start the server
console.log("Server is running")