require("dotenv").config();
const { Sequelize, Op, fn } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const DB_PORT = process.env.DB_PORT || 5432;
const DB_NAME = process.env.DB_NAME || "canchasCordoba";

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    logging: false,
    native: false,
    // dialectOptions:{
    //   ssl:true,
    // }
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) =>
    modelDefiners.push(require(path.join(__dirname, "/models", file)))
  );

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const {
  Usuarios,
  RolUsuarios,
  Empresa,
  Canchas,
  Deportes,
  Servicios,
  Reservas,
  Horas
} = sequelize.models;

RolUsuarios.hasMany(Usuarios);
Usuarios.belongsTo(RolUsuarios);

Empresa.belongsToMany(Deportes, {through: "DeportesXEmpresa"});
Deportes.belongsToMany(Empresa,{through: "DeportesXEmpresa"});

Empresa.hasMany(Canchas);
Canchas.belongsTo(Empresa);

Empresa.hasMany(Servicios);
Servicios.belongsTo(Empresa);

Canchas.hasMany(Reservas);
Reservas.belongsTo(Canchas);

Deportes.belongsToMany(Canchas, {through:"DeporteXCancha"});
Canchas.belongsToMany(Deportes, {through:"DeporteXCancha"});

Horas.belongsToMany(Canchas, {through:"HorasXCancha"});
Canchas.belongsToMany(Horas, {through:"HorasXCancha"});



module.exports = {
  ...sequelize.models, // importacion de los modelos
  conn: sequelize, // importacion de la conexion
  Op,
  fn,
};
