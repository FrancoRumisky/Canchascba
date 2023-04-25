const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Reservas",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fecha: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      horaInicio: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      horaFin: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      estado: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
  );
};
