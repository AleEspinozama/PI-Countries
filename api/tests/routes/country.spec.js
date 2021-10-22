/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  ID: "MEX",
  name: 'Mexico',
  image: "https://flagcdn.com/w320/mx.png",
  continent: "Americas",
  capital: "Mexico City",
  subregion: "North America",
  area: 1964375,
  population: 128932753

};

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: true })
    .then(() => Country.create(country)));
  describe('GET /countries', () => {
    it('should get 200', () => agent.get('/countries').expect(200));
    it('should return json', () => agent.get('/countries').expect('content-type', /json/ ));
  });

  describe('GET /countries/MEX', () => {
    it('should get 200', () => agent.get('/countries').expect(200));
    it('should return json', () => agent.get('/countries/MEX').expect('content-type', /json/ ));
  });

});


 