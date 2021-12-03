const mysql = require("mysql2");

const pool = mysql.createPool({
  connectionLimit: 10,
  password: "",
  user: "root",
  database: "expressdb",
  host: "localhost",
  port: "3306",
});

module.exports = pool;
