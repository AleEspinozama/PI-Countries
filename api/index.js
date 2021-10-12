//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
//const Activity = require('./src/models/Activity.js');
const axios = require('axios');
//const Country = require('./src/models/Country.js');
const { Country } = require('./src/db.js');

let DataCountries = async () => {
    const countries = await axios.get(`https://restcountries.com/v3.1/all`)
    .then(countries => {
        countries.data.map( async c => {
            try {
                var countryCreated = await Country.findOrCreate({
                    where: {
                        ID: c.cca3,
                        name: c.name.common,
                        image: c.flags.png,
                        continent: c.region,               
                        capital: c.capital ? c.capital[0] : 'No have Capital',
                        continent: c.region ? c.region : 'No have Region',
                        subregion: c.subregion ? c.subregion : 'No have SubRegion',
                        area: parseInt(c.area) ? parseInt(c.area) : 0,
                        population: parseInt(c.population)     
                        }
                })
                return countryCreated;
                
            }
            catch(err){
                console.log(err)  
            }
        });
    })
    .catch(error => console.error('Error:', error));
}

DataCountries();
// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(3002, () => {
    console.log('%s listening at 3002'); // eslint-disable-line no-console

  });
});
