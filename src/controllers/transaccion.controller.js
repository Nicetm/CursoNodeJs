const mysqlConnection = require('../database');

exports.obtenerMontoCliente = async (req, res) => {

    const id = req.params.id;
    // Obtener el saldo del cliente
    mysqlConnection.query('Select saldo from br_cliente_cuenta', [id], (err, result, fields) => {
        if (!err) {
            res.json(result[0]);     
        } else {
            console.log(err);
        }
    });
}


exports.guardarTransaccion = async (req, res) => {

    const transaccion = { id, id_banco, id_cliente, id_destinatario, monto, nuevoSaldo } = req.body
    
    // Definimos el prcedimiento a llamar
    const query = 'CALL guardarTransaccion(?, ?, ?, ?, ?, ?)';

    // Creamos la conexion y le pasamos como parametros el procedimiento, y lo que viene por el body
    mysqlConnection.query(query, [ id, id_banco, id_cliente, id_destinatario, monto, nuevoSaldo ], (err, result, fields) => {

        // Si no hay errores retornamos un json con el mensaje de OK
        if (!err) {
            res.json({ message: 'Transaccion realizada', status: res.statusCode }); 
        } else {
            console.log(err);
        }
    });
}

