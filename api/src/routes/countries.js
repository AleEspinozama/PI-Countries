const router = require('express').Router();
const { Country, Activity } = require('../db.js');
const { conn } = require('../db.js');


// [ ] GET /countries:
// Obtener un listado de los paises.
//countries
router.get('/', (req, res) => {
    const { name } = req.query;
    Country.findAll().then((countries) => {
        console.log(countries);
        //Si no tiene query, manda todos
        if(!name) res.status(200).json(countries);
        //Si tiene query, hace un nuevo array y le pushea los que coincidan
        else {
            var newArray= [];
            for(let country of countries){
                if(country.dataValues.name.toLowerCase().includes(name.toLowerCase())){
                    newArray.push(country); // %mex%
                }
            }
            return res.status(200).json(newArray)
        }
  }).catch((err)=>{
        res.json({data: err})
  })
})


// [ ] GET /countries/{idPais}:
// Obtener el detalle de un país en particular
// Debe traer solo los datos pedidos en la ruta de detalle de país
// Incluir los datos de las actividades turísticas correspondientes
router.get('/:idPais', (req, res) => { 
    const { idPais } = req.params;
    console.log(req.params);    
    Country.findByPk(idPais.toUpperCase(), {
        include: Activity 
    })
    .then(country => res.status(200).json(country))
    .catch(err =>res.status(400).send("Country not found "+ err) )
})


module.exports = router;