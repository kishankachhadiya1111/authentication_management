require('dotenv').config();
const jsonwebtoken = require('jsonwebtoken');

class JwtManager {
  #secretAccess;
  #expiryAccess;
  #secretRefresh;
  #expiryRefresh;

  constructor() {
    this.#secretAccess = process.env.JWT_SECRET_ACCESS;
    this.#expiryAccess = process.env.JWT_EXPIRY_ACCESS;
    this.#secretRefresh = process.env.JWT_SECRET_REFRESH;
    this.#expiryRefresh = process.env.JWT_EXPIRY_REFRESH;
  }

  #sign(payload, secret, expiry) {
    return jsonwebtoken.sign(payload, secret, { expiresIn: expiry });
  }

  #verify(token, secret) {
    return jsonwebtoken.verify(token, secret);
  }

  getAccessToken(payload) {
    return this.#sign(payload, this.#secretAccess, this.#expiryAccess);
  }

  getRefreshToken(payload) {
    return this.#sign(payload, this.#secretRefresh, this.#expiryRefresh);
  }

  verifyAccessToken(accessToken) {
    return this.#verify(accessToken, this.#secretAccess);
  }

  verifyRefreshToken(refreshToken) {
    return this.#verify(refreshToken, this.#secretRefresh);
  }
}

module.exports = new JwtManager();
