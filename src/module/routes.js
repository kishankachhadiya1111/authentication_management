const express = require('express');
const authRouter = require('./auth/routes');
const userRouter = require('./user/routes');
const routes = express.Router();

routes.use('/auth', authRouter);
routes.use('/users', userRouter);

module.exports = routes;