require('dotenv').config();
const mysql = require('mysql');

const db = mysql.createConnection({
    user: process.env.DB_MYSQL_USER,
    password: process.env.DB_MYSQL_PASSWORD
})

const ignore = new Set(["ER_DB_CREATE_EXISTS", "ER_TABLE_EXISTS_ERROR"]);

db.on("error")

db.query("CREATE DATABASE tasks");
db.query("USE tasks");
db.query(`
CREATE TABLE Tasks (
id INT NOT NULL AUTO_INCREMENT,
task TEXT NOT NULL, PRIMARY KEY ( id )
)
`)

