const mysqlConnection = require('../database');

// Funcion para insertar nuevos destinatarios
exports.crearDestinatario = (req, res, next) => {
   
    const { id_cliente, rut, nombre, apellido_materno, aoellido_paterno, correo, telefono, numero_cuenta, id_banco, id_tipo_cuenta } = req.body;

    // Definimos el prcedimiento a llamar
    const query = 'CALL crearDestinatario(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

    // Creamos la conexion y le pasamos como parametros el procedimiento, y lo que viene por el body
    mysqlConnection.query(query, [ id_cliente, rut, nombre, apellido_materno, aoellido_paterno, correo, telefono, numero_cuenta, id_banco, id_tipo_cuenta ], (err, result, fields) => {

        // Si no hay errores retornamos un json con el mensaje de OK
        if (!err) {
            res.json({message: 'Destinatario Guardado', status: res.statusCode}); 
        } else {
            console.log(err);
        }
    });
}

// Funcion para listar todos los destinatarios de un cliente
exports.buscarDestinatarioPorIdUsuario = (req, res) => {
    
    const id = req.params.id;

    // Definimos el prcedimiento a llamar
    const query = 'CALL destinatariosPorCliente(?)';

    // Creamos la conexion y le pasamos como parametros el procedimiento, y lo que viene por el body
    mysqlConnection.query(query, [id], (err, result, fields) => {

        // Si no hay errores retornamos un json con el mensaje de OK
        if (!err) {
            res.json(result[0]);     
        } else {
            console.log(err);
        }
    });

}