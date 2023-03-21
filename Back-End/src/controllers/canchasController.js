const { Canchas, Empresa, Deportes } = require("../db");

const findQuery = {
  include: [{ model: Empresa }, { model: Deportes, through: {attributes: []} }],
  attributes: { exclude: ["EmpresaId"] },
  
};

const findById = async (id) => {
  try {
    return await Canchas.findByPk(id, findQuery);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const findAllFields = async () => {
  try {
    return await Canchas.findAll(findQuery);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = { findById, findAllFields };
