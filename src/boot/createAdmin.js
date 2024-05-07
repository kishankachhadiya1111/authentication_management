const createAdminUserService = require("../module/auth/service/createAdminUser.service");
const getUserByRoleService = require("../module/user/service/getUserByRole.service");

const createAdmin = async () => {
  const user = await getUserByRoleService('ADMIN');
  if (user) return true;

  const { ADMIN_FIRST_NAME, ADMIN_LAST_NAME, ADMIN_EMAIL, ADMIN_PASSWORD } = process.env;
  if (!ADMIN_FIRST_NAME || !ADMIN_LAST_NAME || !ADMIN_EMAIL || !ADMIN_PASSWORD) {
    throw new Error('ADMIN_FIRST_NAME, ADMIN_LAST_NAME, ADMIN_EMAIL and ADMIN_PASSWORD environment variables are required to create an admin user');
  }

  await createAdminUserService({
    firstName: ADMIN_FIRST_NAME,
    lastName: ADMIN_LAST_NAME,
    email: ADMIN_EMAIL,
    password: ADMIN_PASSWORD,
  });
}

module.exports = createAdmin;
