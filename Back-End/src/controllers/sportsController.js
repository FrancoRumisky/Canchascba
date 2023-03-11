const { Deportes } = require("../db");

const findAllSports = async () => {
  try {
    return await Deportes.findAll();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const findById = async (id) => {
  try {
    return await Deportes.findByPk(id);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = { findAllSports, findById };
