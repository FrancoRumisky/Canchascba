const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Servicios",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      estacionamiento: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      parrilla: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      bar: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      ducha: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      otros: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
};
