const { Country, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Country model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Country.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Country.create({ name: 'Argentina' });
      });
    });
    describe('image', () => {
      it('should throw an error if image is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid image')))
          .catch(() => done());
      });
      it('should work when its a valid image', () => {
        Country.create({ image: "https://flagcdn.com/w320/mx.png" });
      });
    });
    describe('ID', () => {
      it('should throw an error if ID is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid ID')))
          .catch(() => done());
      });
      it('should work when its a valid ID', () => {
        Country.create({  ID: "MEX" });
      });
    });
    describe('continent', () => {
      it('should throw an error if continent is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid continent')))
          .catch(() => done());
      });
      it('should work when its a valid contient', () => {
        Country.create({continent: "none"})
        .then(()=> done(new Error('It requires a valid continent')))
        .catch(() => done());
      });
    });
  });
});
