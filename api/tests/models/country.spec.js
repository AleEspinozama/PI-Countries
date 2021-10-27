const { Country, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Country model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

    describe('Validators', () => {
      beforeEach(() => Country.sync({ force: true }));
      describe('Creating country:', () => {
          it('Should create a country: ', done => {
            Country.create({
                  ID: "MEX",
                  name: 'Mexico',
                  image: "https://flagcdn.com/w320/mx.png",
                  continent: "Americas",
                  capital: "Mexico City",
                  subregion: "North America",
              })
              .then(country => {
                  expect(country.name).to.equal('Mexico')
                  expect(country.ID).to.equal('MEX')
                  done()
              })
              .catch(() => done("It shouldn't be created"))
          });
          it('Should NOT create a country without id, image, continent, capital: ', done => {
              Country.create({
                  name: 'Mexico'
              })
                .then(() => done("It shouldn't be created"))
                .catch(() => done());
          })

          it('Should NOT create a country with incorrect continent: ', done => {
            Country.create({
                  ID: "MEX",
                  name: 'Mexico',
                  image: "https://flagcdn.com/w320/mx.png",
                  continent: "Ameriwasa",
                  capital: "Mexico City",
                  subregion: "North America",
            })
              .then(() => done("It shouldn't be created"))
              .catch(() => done());
        })
      })
    });
  });


