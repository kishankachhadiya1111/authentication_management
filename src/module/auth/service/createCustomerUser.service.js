const createUserService = require("./createUser.service");

const createCustomerUserService = async ({ firstName, lastName, email, password }) => {
  const user = createUserService({
    firstName, lastName, email,
    password, role: 'CUSTOMER',
  });

  return user;
}

module.exports = createCustomerUserService;
