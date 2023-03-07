const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Canchas",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      tipo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      suelo: {
        type: DataTypes.STRING,
      },
      precioPorHora: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
