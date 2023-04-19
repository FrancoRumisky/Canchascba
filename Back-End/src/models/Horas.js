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
        type: DataTypes.TIME,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};