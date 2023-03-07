const { Usuarios } = require("../db");

const findById = async (id) => {
    try {
      return await Usuarios.findByPk(id);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  module.exports = {findById}