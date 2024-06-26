const { Op } = require("sequelize");
const { Empresa, Servicios, Deportes, Canchas, Reservas } = require("../db");

const findQuery = {
  include: [
    { model: Servicios },
    { model: Deportes, through: { attributes: [] } },
    { model: Canchas },
  ],
};

const findById = async (id) => {
  try {
    return await Empresa.findByPk(id, findQuery);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const findAllCompanies = async () => {
  try {
    return await Empresa.findAll(findQuery);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const findCompaniesXSport = async (idSport) => {
  try {
    return await Empresa.findAll({
      include: [
        {
          model: Deportes,
          where: { id: idSport },
          through: { attributes: [] },
        },
        { model: Servicios, attributes: { exclude: ["EmpresaId", "id"] } },
        {
          model: Canchas,
          include: [
            {
              model: Deportes,
              through: { attributes: [] },
              where: { id: idSport },
            },
            { model: Reservas },
          ],
        },
      ],
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const findByUbi = async () => {
  try {
    return await Empresa.findAll({
      attributes: ["ciudad"],
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = {
  findById,
  findAllCompanies,
  findCompaniesXSport,
  findByUbi,
};
