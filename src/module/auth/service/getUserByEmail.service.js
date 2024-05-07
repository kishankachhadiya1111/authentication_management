const bcrypt = require("bcryptjs");
const { UserModel } = require("../../../models");

const getUserByEmailService = async (email) => {
  if (!email) return null;

  const user = await UserModel.findOne({ email });
  return user;
}

module.exports = getUserByEmailService;
