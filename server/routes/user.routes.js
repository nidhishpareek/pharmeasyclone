const express = require('express');
const { signup, login, checkLoggedIn, githublogin } = require('../controllers/auth.controller.js');
const userRouter = express.Router();

userRouter.get("/checkLoggedIn", checkLoggedIn )
userRouter.post('/login', login)
userRouter.post('/signup', signup)
userRouter.get('/githubsignin', githublogin)


<<<<<<< HEAD:server/routes/user.routes.js
module.exports = {userRouter};
=======
module.exports = {userRouter}; 
>>>>>>> 4a6cdea0fb32a5ce3350b1687429c4ad92444a30:routes/user.router.js
