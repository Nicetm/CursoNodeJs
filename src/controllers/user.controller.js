const mysqlConnection = require('../database');

exports.getAllUsers = async (req, res) => {

    mysqlConnection.query('Select * from br_users', (err, rows, fields) => {
        if (!err) {
            if (rows == 0) {
                res.status(404).json({error: true, msg: 'No se han encontrado usuarios', result: false})
            } else {
                res.status(200).json(rows);     
            };
        } else {
            console.log(err);
        }
    });
}