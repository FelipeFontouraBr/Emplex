// Import the depend of the sqlite3
const sqlite3 = require("sqlite3").verbose()

// Create an object of the database
const db =  new sqlite3.Database("./src/database/database.db") //Iniciando um novo objeto ao constructor

module.exports = db 

// Utilizando o objeto de banco de dados, para nossas operações 
db.serialize(()=> {

    // Com comando sql

    // 1-Created table with comand sql
    /*db.run(`
        CREATE TABLE IF NOT EXISTS services (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,            
            email TEXT,
            telephone NUMBER,
            city TEXT,
            items TEXT
        );
    `)
    
    // 2-To add data to table
    const query = `
        INSERT INTO services (
            image,
            name,
            address,
            email,            
            telephone,
            city,
            items            
        ) VALUES (?,?,?,?,?,?,?);
    `
    const values = [
        "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "Hadassa Servicios",
        "Calle Pintor Barjola, Badajoz Nº 5",
        "hadassa@emplex.com",
        "652 123 456",
        "Badajoz",
        "Limpiezas, Jardinería"
    ]

    function afterInsertData(err) {        
        if(err) {
            return console.log(err)
        }

        console.log("Cadastrado com sucesso")
        console.log(this)
    }

    //db.run(query, values, afterInsertData)

    // 3-Consulting date to table
    db.all(`SELECT * FROM services`, function(err, rows){
        if(err) {
            return console.log(err)
        }

        console.log("Aquí están sus registros: ")
        console.log(rows)
    })

    // 4-Delete data from table
    /*db.run(`DELETE FROM services WHERE id = ?`, [13], function(err){
        if(err) {
            return console.log(err)
        }

        console.log("Registro eliminado correctamente!")
    })*/

}) 