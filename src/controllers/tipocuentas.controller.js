const mysqlConnection = require('../database');

exports.obtenerTiposCuentas = (req, res) => {

    mysqlConnection.query('Select * from br_tipo_cuenta', (err, rows, fields) => {
        if (!err) {
            if (rows == 0) {
                res.json({message: 'No se han encontrado tipos de cuentas', status: res.statusCode, result: false})
            } else {
                res.json(rows);     
            };
        } else {
            console.log(err);
        }
    });
}