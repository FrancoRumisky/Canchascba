const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Horas",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      hora: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      disponible:{
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      timestamps: false,
    }
  );
};