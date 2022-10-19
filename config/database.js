const mysql = require("mysql");

//konfigurasi koneksi
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_hotel",
  multipleStatements: true
});

//koneksi database
connection.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log("koneksi berhasil !!");
  }
})

module.exports = connection;