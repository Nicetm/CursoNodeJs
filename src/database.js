const mysql = require('mysql');


const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bancoripley'
});

// const mysqlConnection = mysql.createConnection({
//     host: 'wcwimj6zu5aaddlj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
//     user: 'jncvribhcotki3zh',
//     password: 'rsqs5t61mzmahxd1',
//     database: 'jobjsr8uylwdqgxy',
//     port: 3306
// });

mysqlConnection.connect(function(err) {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('BD conectada');
    }
});

module.exports = mysqlConnection;