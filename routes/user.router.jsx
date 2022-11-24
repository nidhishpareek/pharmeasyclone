const express = require('express');
const { signup, login } = require('../controllers/auth.controller');
const userRouter = express.Router();

userRouter.get("/checkLoggedIn", checkLoggedIn )
userRouter.post('/login', login)
userRouter.post('/signup', signup)


module.exports = {userRouter}