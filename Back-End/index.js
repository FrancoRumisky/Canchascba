const server = require("./src/app.js");
const {
  conn,
  Usuarios,
  RolUsuarios,
  Empresa,
  Deportes,
  DeportesXEmpresa,
  Canchas,
  DeporteXCancha,
  Horas,
  HorasXCancha,
  Servicios
} = require("./src/db.js");

const users = require("./Datos/Usuarios.json");
const roles = require("./Datos/Roles.json");
const empresas = require("./Datos/Empresas.json");
const deportes = require("./Datos/Deportes.json");
const deportesxempresa = require("./Datos/DeportesXEmpresa.json");
const canchas = require("./Datos/Canchas.json");
const deportexcancha = require("./Datos/DeporteXCancha.json");
const horas = require("./Datos/Horas.json");
const horasxcancha = require("./Datos/HorasXCancha.json");
const servicios = require("./Datos/Servicios.json");


const PORT = process.env.PORT || 3001;

conn
  .sync({ force: true })
  .then(async () => {
    //creo usuarios y roles
    const usuarios = await Usuarios.bulkCreate(users);
    await RolUsuarios.bulkCreate(roles);

    //asociaciones usuarios y roles
    for (let usuario of usuarios) {
      usuario.update({ RolUsuarioId: Math.ceil(Math.random() * 3) });
    }

    //creo Empresas y deportes
    await Empresa.bulkCreate(empresas);
    await Deportes.bulkCreate(deportes);

    //asociaciones empresas y deportes
    await DeportesXEmpresa.bulkCreate(deportesxempresa);

    //creo canchas
    const campos = await Canchas.bulkCreate(canchas);

    //asciacion canchas y empresas
    for (let campo of campos) {
      campo.update({ EmpresaId: Math.ceil(Math.random() * 3) });
    }

    //asociaciones deporte y cancha
    await DeporteXCancha.bulkCreate(deportexcancha)

    // creo Horas
    await Horas.bulkCreate(horas)

    // asocio Horas y canchas
    await HorasXCancha.bulkCreate(horasxcancha)

    //creo Servicios y los asocio a empresas
    const services = await Servicios.bulkCreate(servicios)
    let empresaNum = 1
    for(let service of services) {
      service.update({EmpresaId: empresaNum})
      empresaNum += 1
    }


    server.listen(PORT, () => {
      console.log("Server listening at " + PORT);
    });
  })
  .catch((error) => console.error(error));
