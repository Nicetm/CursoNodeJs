const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth.controller');

// Ruta Post que llama al controlador auth, para el inicio de sesion y generacion de token por jsonwebtoken
router.post('/', auth.login);

module.exports = router;