const webToken = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const mysqlConnection = require('../database');

exports.login = async (req, res) => {

    const { email, password } = req.body;

    // Consultamos el rut del cliente
    mysqlConnection.query('SELECT * FROM br_acceso a INNER JOIN br_users u ON a.id_user = u.id WHERE a.email = ?', [email], (err, rows, fields) => {
        if (!err) {
            if (rows == 0) {
                // Si rut no se encuentra retornamos error de rut
                res.status(401).json({error: true, msg: 'Rut o clave incorrectos', data: null});
            } else {
                // Si encontramos el rut comparamos la clave con la clave encriptada de la BD
                bcrypt.compare(password, rows[0].password, function (err, result) {
                    if (result) {
                        // Si todo esta OK generamos el token y enviamos los datos del cliente al front
                        const userDetail = { rut: rows[0].rut, id: rows[0].id_user, fullname: rows[0].name + ' ' + rows[0].lastname, avatar: rows[0].avatar, work: rows[0].work }
                        const token = webToken.sign(userDetail, process.env.secret_key, { expiresIn: "1h" });
                        res.json({ 
                            error: false,
                            msg: "Acceso Correcto",
                            data: {
                                fullname: userDetail.fullname, 
                                age: 39,
                                id: userDetail.id,
                                token, 
                                avatar: userDetail.avatar,
                                work: userDetail.work
                            }
                        });
                    } else {
                        // Clave incorrecta retornamos error
                        res.json({ error: true, msg: "CLave incorrecta ", status: 401, data: null });
                    }
                });
            }
        } else {
            console.log(err);
        }
    });
}