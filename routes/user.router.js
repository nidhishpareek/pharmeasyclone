const express = require('express');
const { signup, login, checkLoggedIn } = require('../controllers/auth.controller.js');
const userRouter = express.Router();

userRouter.get("/checkLoggedIn", checkLoggedIn )
userRouter.post('/login', login)
userRouter.post('/signup', signup)


module.exports = {userRouter};