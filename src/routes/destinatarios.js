const express = require('express');
const router = express.Router();
const destinatario = require('../controllers/destinatarios.controller');

// Ruta GET que llama al controllador para buscar destinatario por id de cliente
router.get('/:id', destinatario.buscarDestinatarioPorIdUsuario);

// Ruta POST para ingresar nuevo destinatario
router.post('/', destinatario.crearDestinatario);

// Exportar modulo
module.exports = router;