const jwtManager = require("../utils/jwtManager");

function authenticate(req, res, next) {
  try {
    const authToken = req.headers.authorization;

    if (!authToken) {
      return res.status(400).json({ data: {}, message: 'Please provide authentication token' });
    };

    if (!authToken.startsWith('Bearer ')) {
      return res.status(400).json({ data: {}, message: 'Provided authentication token must begin with \'Bearer \'' });
    };

    const decoded = jwtManager.verifyAccessToken(authToken.substring(7));
    if (!decoded) {
      return res.status(401).json({ data: {}, message: 'Invalid authentication token' });
    };

    req.user = decoded;

    next();
  } catch (error) {
    next(error);
  }
}

module.exports = authenticate;
