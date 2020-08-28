const express = require("express")
const server = express()

// Get database
const db = require("./database/db")

// Setting statics file
server.use(express.static("public"))

// Habilit req.body of the application
server.use(express.urlencoded({extended: true}))

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

server.post("/saveservice", function(req,res) {

    // Added data to database
    const query = `
        INSERT INTO services (
            image,
            name,
            email,
            address,            
            telephone,
            city,
            items            
        ) VALUES (?,?,?,?,?,?,?);
    `
    const values = [
        req.body.image,
        req.body.name,
        req.body.email,
        req.body.address,
        req.body.telephone,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err) {        
        if(err) {
            return console.log(err)
        }

        console.log("Registered successfully")
        console.log(this)

        return res.render("create-service.html", { saved: true})
    }

    db.run(query, values, afterInsertData)    
})

// Search-results
server.get("/search", function(req,res) {

    const search = req.query.search
    if(search == "") {
        //pesquisa vazia
        return res.render("search-results.html", { total: 0})
    }


    // get data from database
    db.all(`SELECT * FROM services WHERE city = '${search}'`, function(err, rows){
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