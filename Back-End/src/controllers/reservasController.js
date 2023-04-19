const { Op } = require("sequelize");
const { Canchas, Reservas, Empresa } = require("../db");

const findQuery = {
  include: [{ model: Canchas, include: [{ model: Empresa }] }],
};

const findReservation = async (fecha, horaInicio, horaFin) => {
  const localQuery = { ...findQuery };
  localQuery.where = {
    fecha: fecha,
    [Op.and]: [
      {
        horaInicio: {
          [Op.lte]: horaFin,
        },
      },
      {
        [Op.or]: [
          {
            horaInicio: {
              [Op.gte]: horaInicio,
            },
          },
          {
            [Op.and]:[
              {
                horaFin:{
                  [Op.lte]: horaInicio,
                },
              },
              // Sequelize.literal(`horaInicio + INTERVAL duration MINUTE >= '${horaFin}'`),
            ]
          }
        ]
      },
      {
        horaInicio: {
          [Op.gte]: horaInicio,
          [Op.lt]: horaFin,
        },
      },
    ],
  };
  try {
    return await Reservas.findAll(localQuery);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const findAllReservations = async () => {
  try {
    return await Reservas.findAll(findQuery);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = {
  findReservation,
  findAllReservations,
};
