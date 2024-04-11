const { Usuarios, RolUsuarios } = require("../db");
const { Op } = require("sequelize");

const findQuery = {
  include: RolUsuarios,
  attributes: { exclude: ["RolUsuarioId"] },
};

const findById = async (id) => {
  try {
    return await Usuarios.findByPk(id, findQuery);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const findAllusers = async () => {
  try {
    return await Usuarios.findAll(findQuery);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const findByUserAndPass = async (user, pass) => {
  try {
    return Usuarios.findOne({
      where: {
        email: user,
        password: pass,
      },
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};
module.exports = { findById, findAllusers, findByUserAndPass };
