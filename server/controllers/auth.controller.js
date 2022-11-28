require("dotenv").config();
const { User } = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const GithubAuth = require("./githubAuth");

// import { auth } from "../firebase";
// var { RecaptchaVerifier}= require('firebase/auth')
// const firebase = require("firebase");
// firebase.auth().useDeviceLanguage();
//
// const getOtp = ()=>{
// }
// function setUpRecaptha(number) {
//   const recaptchaVerifier = new RecaptchaVerifier(
//     "recaptcha-container",
//     {},
//     auth
//   );
//   recaptchaVerifier.render();
//   return signInWithPhoneNumber(auth, number, recaptchaVerifier);
// }

const newJWTToken = (user) => {
  const { name, gender, email, username } = user;
  console.log(JWT_SECRET)
  return jwt.sign(
    { name, gender, email, username },
    '602bf9c1352835aac421b0'
  );
}; 
const signup = async (req, res) => {
  try {
    let newUser = req.body;
    console.log(newUser);
    let user = await User.findOne({ email: newUser.email });
    console.log(user);
    if (user) {
      return res
        .status(400)
        .send({ message: "User Elready Exists", status: 400 });
    } else {
      user = await User.create(newUser);
      console.log("asfdj;lk");

      const token = newJWTToken(user);
      console.log(token);
      return res
        .status(201)
        .send({ message: "User Created Successfully", token, status: 201 });
    }
  } catch (error) {
    res.status(500).send({ error: error.message, status: 500 });
  }
};

const login = async (req, res) => {
  try {
    let loginUser = req.body;

    const user = await User.findOne({ email: loginUser.email });

    if (!user)
      return res
        .status(404)
        .send({ message: "Invalid Credentials", status: 404 });

    const match = user.checkPassword(loginUser.password);
    if (!match)
      return res
        .status(404)
        .send({ message: "Invalid Credentials", status: 404 });
    delete user.password;
    const token = newJWTToken(user);
    return res
      .status(200)
      .send({ message: "User Logged In", token, status: 200 });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const checkLoggedIn = (req, res) => {
  const { user } = req;

  if (user) {
    return res.send({
      status: "Success",
      data: user,
    });
  } else {
    return res.status(400).send({
      status: "Error",
      message: "User Not Logged In",
    });
  }
};

async function githublogin(req, res) {
  console.log('signin try')
  try {
    const { code } = req.query;

    let Oauth = new GithubAuth();
    const userDetails = await Oauth.getUser(code);

    let existingUser = await User.findOne({username: userDetails.login});  
    console.log('found existingUser', existingUser);
    if (!existingUser) {
    console.log('createing new user');
      existingUser = await User.create({
        authType: "github",
        name: userDetails.name,
        username: userDetails.login,
        image: userDetails.avatar_url,
        email: userDetails.email,
      });
    console.log('created user', existingUser);

    }
    let token = newJWTToken(existingUser);
    console.log(token);
    return res.status(200).send({
      status: "success",
      data: {
        token,
      },
    });
  } catch (err) {
    console.error(err);
    return res.status(400).send({
      status: "error",
      message: "Something went wrong",
      error: err
    });
  }
}
module.exports = {
  signup,
  login,
  checkLoggedIn,
  githublogin,
};
