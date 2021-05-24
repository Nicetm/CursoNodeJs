const express = require('express');
const router = express.Router();

const fetch = require('node-fetch');

// Ruta GET que llama al endPoint externo de bancos
router.get('/', async (req, res) => {
    const response = await fetch('https://bast.dev/api/banks.php');
    const data = await response.json();
    res.json(data);
});

module.exports = router;