const createUserService = require("./createUser.service");

const createAdminUserService = async ({ firstName, lastName, email, password }) => {
  const user = createUserService({
    firstName, lastName, email,
    password, role: 'ADMIN',
  });

  return user;
}

module.exports = createAdminUserService;
