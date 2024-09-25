// Get the client
const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'Youtube',
  port: '3307' ,// mariadb 포트 번호 3307로 변경했음
  dateStrings: true
});

module.exports=connection