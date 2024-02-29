// Modulo MySQL
const mysql = require("mysql");
const dbConfig = require("./db.config.js");

//Cria uma conexão com o DB
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSOWORD,
  database: dbConfig.DB,
  port: dbConfig.PORT,
});

//Nova conexão com o MySQL
connection.connect((err) => {
  if (err) throw err;
  console.log("Banco de dados conectado!!!");
});

module.exports = connection;
