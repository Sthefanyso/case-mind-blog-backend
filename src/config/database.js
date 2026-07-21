
console.log("Arquivo database carregado");

require("dotenv").config();

const mysql = require("mysql2");

console.log({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

connection.connect((err) => {
    if (err) {
        console.log("Erro ao conectar:", err);
        return;
    }

    console.log("Banco conectado!");
});

module.exports = connection;