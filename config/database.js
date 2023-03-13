let mysql = require('mysql2');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    socketPath:'/Applications/MAMP/tmp/mysql/mysql.sock',
    password: 'root',
    database: 'tp_hiren'
});

connection.connect();

module.exports = connection;