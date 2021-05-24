const mysqlConnection = require('../database');

exports.obtenerDatosCliente = async (req, res) => {

    const id = req.params.id;

    mysqlConnection.query('Select * from br_cliente where id = ?', [id], (err, result, fields) => {
        if (!err) {
            if (result == 0) {
                res.json({message: 'No se han encontrado datos del cliente', status: result.statusCode, exito: false})
            } else {
                res.json(result);     
            };
        } else {
            console.log(err);
        }
    });
}