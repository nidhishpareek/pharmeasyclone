const express = require('express');
const { signup, login, checkLoggedIn, githublogin } = require('../controllers/auth.controller.js');
const userRouter = express.Router();

userRouter.get("/checkLoggedIn", checkLoggedIn )
userRouter.post('/login', login)
userRouter.post('/signup', signup)
userRouter.get('/githubsignin', githublogin)


module.exports = {userRouter}; 