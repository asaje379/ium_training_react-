const mysql = require('mysql');
const connnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todos'
});

module.exports = connnection;