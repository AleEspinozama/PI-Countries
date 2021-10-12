const router = require('express').Router();
const { Country, Activity } = require('../db.js');
const { conn } = require('../db.js');

module.exports = router;

//post get

// POST /activity:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
// Crea una actividad turística en la base de datos