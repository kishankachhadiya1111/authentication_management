const getUserByEmailService = require("../service/getUserByEmail.service");
const createCustomerUserService = require("../service/createCustomerUser.service");

const signupController = async (req, res) => {
  try {
    const { reqBody, error } = Joi.object({
      firstName: joi.string().min(3).max(50).required(),
      lastName: joi.string().min(3).max(50).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(5).max(16).required(),
    }).validate(req.body, { convert: true });
    if (error) {
      return res.status(400).json({ data: error.details, message: error.message });
    }

    const user = await getUserByEmailService(reqBody.email);
    if (user) {
      return res.status(400).json({ data: {}, message: 'Email already registered' });
    }

    const newUser = await createCustomerUserService(reqBody);

    return res.status(201).json({
      data: { id: newUser.id },
      message: 'Signup successful'
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = signupController;
