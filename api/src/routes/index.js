const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: 
const countries = require('./countries.js');
const activities = require('./activities.js');

const router = Router();

// Configurar los routers
// Ejemplo: 
router.use('/countries', countries);
router.use('/activity', activities);


module.exports = router;
