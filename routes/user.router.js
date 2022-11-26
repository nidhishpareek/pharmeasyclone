const express = require('express');
const { getLoggedInUser, login, register } = require('../controllers/auth.controller');
const userRouter = express.Router();

userRouter.get("/loggedInUser",getLoggedInUser)
userRouter.post('/login',login)
userRouter.post('/register',register)


module.exports = {userRouter}