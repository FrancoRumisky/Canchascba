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
        type: DataTypes.TIME,
        allowNull: false,
      },
      horaFin: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      estado: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
  );
};
