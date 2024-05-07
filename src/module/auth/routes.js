const express = require('express');
const signupController = require('./controllers/signup.controller');
const loginController = require('./controllers/login.controller');

const authRouter = express.Router();

authRouter.post('/signup', signupController);
authRouter.post('/login', loginController);

module.exports = authRouter;