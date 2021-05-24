const express = require('express');
const router = express.Router();
const historial = require('../controllers/historial.controller');

// Ruta GET que llama al controllador para obtener historial de transacciones por cliente
router.get('/:id', historial.obtenerHistorialCliente);


module.exports = router;