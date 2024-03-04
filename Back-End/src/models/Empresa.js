const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Empresa",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      calle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      codigoPostal: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ciudad: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      latitud: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      longitud: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      horarios: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imagen: {
        type: DataTypes.STRING,
        validate: {
          isUrl: true,
        },
      },
    },
    {
      timestamps: false,
    }
  );
};
