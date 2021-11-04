/*
    Rutas de paises / pais
    host + /pais
*/

const { Router } = require('express');
const router = Router();
const { guardarPaises } = require('../controller/paisController');

router.post('/save', guardarPaises);


module.exports = router;
