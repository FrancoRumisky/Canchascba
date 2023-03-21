const { Deportes, Canchas } = require("../db");

const findQuery = {
  include: [{ model: Canchas, attributes: { exclude: ["EmpresaId"] },through: {attributes: []}}],
  
};

const findAllSports = async () => {
  try {
    return await Deportes.findAll(findQuery);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const findById = async (id) => {
  try {
    return await Deportes.findByPk(id,findQuery);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = { findAllSports, findById };
