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
    return await Usuarios.findOne({
      where: {
        email: { [Op.iLike]: user },
        password: pass,
      },
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const findUser = async (user) => {
  try {
    return await Usuarios.findOne({
      where: {
        email: { [Op.iLike]: user },
      },
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const setUserResetToken = async (id, token) => {
  try {
    const user = await findById(id);
    const userUpdate = await user.update({
      resetToken: token,
    });

    return userUpdate;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const setNewUserPassword = async (resetToken, newPassword) => {
  try {
    const user = await Usuarios.update(
      {
        password: newPassword,
      },
      { where: {resetToken} }
    );

    await Usuarios.update(
      {
        resetToken: null,
      },
      {where:{resetToken}}
    )

    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


module.exports = {
  findById,
  findAllusers,
  findByUserAndPass,
  findUser,
  setUserResetToken,
  setNewUserPassword,
};
