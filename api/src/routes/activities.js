const router = require('express').Router();
const { Activity, Country } = require("../db.js");
const { Sequelize } = require("sequelize");

//get: trae todas las actividades o una en particular
router.get('/', (req, res) => {
    const { name } = req.query;

    Activity.findAll( {
        include: Country
    }).then((activities) => {
        //Si no tiene query, manda todos
        if(!name) res.status(200).json(activities);
        //Si tiene query, hace un nuevo array y le pushea los que coincidan
        else {
            var newArray= [];
            for(let activity of activities){
                if(activity.dataValues.name.toLowerCase().includes(name.toLowerCase())){
                    newArray.push(activity); // %canot%
                }
            }
            if(newArray.length>0) return res.status(200).json(newArray)
            else return res.status(200).json("No matches found")
        }
  }).catch((err)=>{
        res.json({data: err})
  })
})

// POST /activity:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
// Crea una actividad turística en la base de datos

router.post('/', async (req, res) => {
    const { name, dificulty, duration, season, countries } = req.body;
try {
    const [ActivityCreated, created] = await Activity.findOrCreate({
        where:{ 
            name,
            dificulty,
            duration,
            season
        },
    })
    console.log(ActivityCreated);
    await ActivityCreated.addCountries(countries);
    if(created) res.status(200).send("Activity created");
    else res.status(200).send("Activity already on database");
}
catch(err){
    console.log(err);
    res.status(400).send("Activity not created");
}

})

module.exports = router;