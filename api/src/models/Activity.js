const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dificulty: {
        type: DataTypes.INTEGER,
    },
    duration: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    season: {
        type: DataTypes.ENUM('Spring', 'Summer', 'Autumn', 'Winter', 'All'),
        allowNull: false,
      },

  });
};
