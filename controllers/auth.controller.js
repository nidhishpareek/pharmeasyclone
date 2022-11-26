require('dotenv').config()
const { User } = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const JWT_SECRET = process.env.JWT_SECRET;
// const firebase = require("firebase");
// firebase.auth().useDeviceLanguage();
// 
// const getOtp = ()=>{

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
<<<<<<< HEAD
    const token = newToken(user);
    return res.status(200).send({ message: "Login Successful", token: token });
=======
    delete user.password;
    const token = newJWTToken(user);
    return res.status(200).send({ message: "User Logged In", token });
>>>>>>> 1c442bc2aa58b6ac6ac3df113f9798110d042d36
  } catch (error) {
    res.status(500).send(error.message);
  }
};
<<<<<<< HEAD
const getLoggedInUser =  (req, res) => {
  
    const { user } = req;
    // console.log(user);
=======
const checkLoggedIn = (req, res) => {
  const { user } = req;
  console.log(user);
>>>>>>> 1c442bc2aa58b6ac6ac3df113f9798110d042d36

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

module.exports = {
  signup,
  login,
  checkLoggedIn,
};
