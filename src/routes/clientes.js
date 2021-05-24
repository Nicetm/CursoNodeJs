const express = require('express');
const router = express.Router();
const clientes = require('../controllers/clientes.controller');

// Ruta GET que llama al controllador de clientes para buscar los datos adicionales de un cliente
router.get('/:id', clientes.obtenerDatosCliente);

module.exports = router;