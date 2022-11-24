const { User } = require("../models/user.model");
const jwt = require("jsonwebtoken");
const newJWTToken = (user) => {
  const { name, gender, email, username } = user;
  return jwt.sign(
    { name, gender, email, username },
    process.env.JWT_SECRET_KEY
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

module.exports = {
  signup,
  login,
  checkLoggedIn,
};
