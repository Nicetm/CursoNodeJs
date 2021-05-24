const mysqlConnection = require('../database');

exports.obtenerHistorialCliente = (req, res) => {

    const id = req.params.id;

    const query = 'CALL obtenerHistorialPorCliente(?)';

    mysqlConnection.query(query, [id], (err, rows, fields) => {
        if (!err) {
            if (rows == 0) {
                res.json({message: 'No se han encontrado el historial', status: res.statusCode, result: false})
            } else {
                res.json(rows[0]);     
            };
        } else {
            console.log(err);
        }
    });
}