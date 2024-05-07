const bcrypt = require("bcryptjs");
const { UserModel } = require("../../../models");

const createUserService = async ({ firstName, lastName, email, password, role }) => {
  const user = await UserModel.create({
    firstName, lastName, email,
    password: bcrypt.hashSync(password, 8),
    role,
  });

  return user;
}

module.exports = createUserService;
