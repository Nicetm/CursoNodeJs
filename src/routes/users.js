const express = require('express');
const router = express.Router();
const users = require('../controllers/user.controller');

// Ruta GET que llama al controllador para obtener monto por id de cliente
router.get('/', users.getAllUsers);

// Ruta Post que llama al controllador para para guardar una transaccion
//router.post('/', transaccion.guardarTransaccion);

module.exports = router;