// Import the depend of the sqlite3
const sqlite3 = require("sqlite3").verbose()

// Create an object of the database
const db =  new sqlite3.Database("./src/database/database.db") //Iniciando um novo objeto ao constructor

// Utilizando o objeto de banco de dados, para nossas operações
db.serialize(()=> {

    // Com comando sql

    // 1-Created table with comand sql
    db.run(`
        CREATE TABLE IF NOT EXISTS services (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            image TEXT,
            email TEXT,
            address TEXT,
            telephone NUMBER,
            city TEXT,
            items TEXT
        );
    `)
    
    // 2-To add data to table
    db.run(`
        INSERT INTO services (
            name,
            image,
            email,
            address,
            telephone,
            city,
            items            
        ) 
        VALUES (

        );
    `)

    // 3-Consulting date to table

    // 4-Delete data from table

}) 