const { UserModel } = require("../../../models");

const getUserByIdService = async (id) => {
  if (!id) return null;

  const user = await UserModel.findOne({ _id: id });
  return user;
}

module.exports = getUserByIdService;
