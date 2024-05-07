const Joi = require('joi');
const bcrypt = require("bcryptjs");
const jwtManager = require("../../../utils/jwtManager");
const getUserByEmailService = require("../service/getUserByEmail.service");

const loginController = async (req, res) => {
  try {
    const { reqBody, error } = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    }).validate(req.body, { convert: true });
    if (error) {
      return res.status(400).json({ data: error.details, message: error.message });
    }

    const { email, password } = reqBody;

    const user = await getUserByEmailService(email);
    if (!user) {
      return res.status(400).json({ data: {}, message: 'Invalid auth details' });
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) {
      return res.status(401).send({ accessToken: null, message: "Invalid auth details" });
    }

    const { _id, role } = user;
    const payload = { id: _id, email, role };
    const accessToken = jwtManager.getAccessToken(payload);
    const refreshToken = jwtManager.getRefreshToken(payload);

    return res.status(201).json({
      data: { accessToken, refreshToken },
      message: 'Login successful'
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = loginController;
