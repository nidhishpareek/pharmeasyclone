require('dotenv').config()
const { User } = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const GithubAuth = require('./githubAuth');

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
  console.log(JWT_SECRET_KEY)
  return jwt.sign({ name, gender, email, username }, JWT_SECRET_KEY  );
}; 




const signup = async (req, res) => {
  try {
    let newUser = req.body;
    let user = await User.findOne({ email: newUser.email });
    if (user) {
      return res
        .status(400)
        .send({ message: "User already exists with this Email." });
    } else {
      user = await User.create(newUser);

      const token = newJWTToken(user);
      return res
        .status(201)
        .send({ message: "User Created Successfully", token });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const login = async (req, res) => {
  try {
    let loginUser = req.body;

    const user = await User.findOne({ email: loginUser.email });

    if (!user) return res.status(404).send({ message: "Invalid Credentials" });

    const match = user.checkPassword(loginUser.password);
    if (!match) return res.status(404).send({ message: "Invalid Credentials" });
    delete user.password;
    const token = newJWTToken(user);
    return res.status(200).send({ message: "User Logged In", token });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const checkLoggedIn = (req, res) => {
  const { user } = req;
  console.log(user);

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

    try {
        const {code} = req.query

        let Oauth = new GithubAuth();
        const userDetails = await Oauth.getUser(code);

        let existingUser = await userModel.findOne({
            authType: 'github',
            username: userDetails.login
        });

        if (!existingUser) {
            existingUser = await userModel.create({
                authType: 'github',
                name: userDetails.name,
                githubUsername: userDetails.login,
                image: userDetails.avatar_url,
                email: userDetails.email,
            })
        }
         
        let token = generateToken(existingUser);

        return res.status(200).send({
            status: 'success',
            data: {
                token
            }
        })

    } catch(err) {

        console.error(err)
        return res.status(400).send({
            status: 'error',
            message: 'Something went wrong'
        })
    }
}
module.exports = {
  signup,
  login,
  checkLoggedIn,githublogin
};
