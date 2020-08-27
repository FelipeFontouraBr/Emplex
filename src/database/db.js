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
    const query = `
        INSERT INTO services (
            name,
            image,
            email,
            address,
            telephone,
            city,
            items            
        ) VALUES (?,?,?,?,?,?,?);
    `

    db.run(query, [
        "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "Hadassa Servicios",
        "Calle Pintor Barjola, Badajoz Nº 5",
        "hadassa@emplex.com",
        "652 123 456",
        "Badajoz",
        "Limpiador, Jardinero"
    ])

    // 3-Consulting date to table

    // 4-Delete data from table

}) 