const mongoose = require('mongoose');
const UserModel = require('./user.model');

const db = {
  mongoose,
  UserModel,
};

module.exports = db;