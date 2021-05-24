const express = require('express');
const router = express.Router();
const tipocuenta = require('../controllers/tipocuentas.controller');

// Ruta GET que llama al controllador para buscar los toipos de cuentas bancarias
router.get('/', tipocuenta.obtenerTiposCuentas);

module.exports = router;