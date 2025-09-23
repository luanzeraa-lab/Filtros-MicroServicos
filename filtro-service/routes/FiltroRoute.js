const express = require('express');
const router = express.Router();
const FiltroController = require('./controllers/filtroController');

router.get('/animais/cidade/:cidade', FiltroController.filtrarAnimais);
router.get('/animais/porte/:porte', FiltroController.filtrarPorte);

module.exports = router;