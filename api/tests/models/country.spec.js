const { Country, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Country model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

  //   describe('Validators', () => {
  //     beforeEach(() => Types.sync({ force: true }));
  //     describe('Creating types:', () => {
  //         it('Should create a type: ', done => {
  //           Types.create({
  //               id: 1,
  //               en: 'Just a type',
  //               es: 'Un tipo'
  //             })
  //             .then(type => {
  //                 expect(type.en).to.equal('Just a type')
  //                 done()
  //             })
  //             .catch(() => done())
  //         });
  //         it('Should NOT create a type without id: ', done => {
  //             Types.create({
  //                 en: 'Should not create this'
  //             })
  //               .then(() => done("It shouldn't be created"))
  //               .catch(() => done());
  //         })
  //     })
  //   });
  // });
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
  });
});
