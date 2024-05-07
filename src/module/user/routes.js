const express = require('express');
const hasRole = require('../../middlewares/hasRole');
const userProfileController = require('./controllers/userProfile.controller');
const getUserDetailsController = require('./controllers/getUserDetails.controller');
const authenticate = require('../../middlewares/authenticate');

const userRouter = express.Router();

userRouter.get('/profile', authenticate, userProfileController);
userRouter.get('/:id', authenticate, hasRole(['ADMIN']), getUserDetailsController);

module.exports = userRouter;