const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Usuarios",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING,
      },
      apellido: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
      },
      telefono: {
        type: DataTypes.BIGINT,
      },

      // AUTH0 normalized
      // name: {
      //   type: DataTypes.STRING
      // },
      // nickname: {
      //   type: DataTypes.STRING
      // },
      // given_name: {
      //   type: DataTypes.STRING
      // },
      // family_name: {
      //   type: DataTypes.STRING
      // },
      // picture: {
      //   type: DataTypes.STRING,
      //   defaultValue: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAEbo912SNlE28OayU-KnDZqjV5-KU3XqY-A&usqp=CAU'
      // },
      // email: {
      //   type: DataTypes.STRING,
      //   unique: true,
      // },
      // email_verified: {
      //   type: DataTypes.BOOLEAN,
      //   defaultValue: false,
      // },
    },
    {
      timestamps: false,
    }
  );
};
