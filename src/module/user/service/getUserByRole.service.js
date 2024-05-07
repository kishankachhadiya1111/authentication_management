const { UserModel } = require("../../../models");

const getUserByRoleService = async (role) => {
  if (!role) return null;

  const user = await UserModel.findOne({
    role
  });
  return user;
}

module.exports = getUserByRoleService;
