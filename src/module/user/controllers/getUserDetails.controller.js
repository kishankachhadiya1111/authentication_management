const getUserByIdService = require("../service/getUserById.service");

const getUserDetailsController = async (req, res) => {
  try {
    const { reqParams, error } = Joi.object({
      id: joi.string().required(),
    }).validate(req.params, { convert: true });
    if (error) {
      return res.status(400).json({ data: error.details, message: error.message });
    }

    const { id } = reqParams;
    const user = await getUserByIdService(id);
    if (!user) {
      return res.status(404).json({ data: {}, message: 'User not found' });
    }

    const { username, email, role } = user;
    return res.status(201).json({
      data: { id, username, email, role },
      message: 'Login successful'
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getUserDetailsController;
