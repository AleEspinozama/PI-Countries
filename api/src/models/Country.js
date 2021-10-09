const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    ID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent: {
      type: DataTypes.ENUM('Africa', 'Americas', 'Asia', 'Europe', 'Oceania'),
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.INTEGER,
      set(value) {
        this.setDataValue('area', new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(value) + 'km²');
      },
    },
    population: {
      type: DataTypes.INTEGER,
      set(value) {
        this.setDataValue('area', new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(value));
      },
    },

  });
};
