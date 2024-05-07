const getUserByIdService = require("../service/getUserById.service");

const userProfileController = async (req, res) => {
  try {
    const { id } = req.user;
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

module.exports = userProfileController;
