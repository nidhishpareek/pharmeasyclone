import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import usermodel from "../db/usermodel.js";

function genToken(user) {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    "nidhishpareekSecretkey"
  );
}

async function login(req, res) {
  const inputuser = req.body;

  const { email, password } = inputuser;

  const isAlreadyUser = await usermodel.findOne({
    email,
  });

  if (isAlreadyUser) {
    const isMatched = bcrypt.compareSync(password, isAlreadyUser.password);

    if (isMatched) {
      const token = genToken(isAlreadyUser);
      return res.send({
        status: "success",
        data: { token },
      });
    } else {
      return res.status(400).send({
        status: "error",
        message: "Invalid Credentials",
      });
    }
  } else {
    return res.status(400).send({
      status: "error400",
      message: "Invalid Credentials",
    });
  }
}

async function register(req, res) {
  const user = req.body;

  let { name, email, password } = user;

  const isExistingUser = await usermodel.findOne({ email });

  if (isExistingUser) {
    return res.status(400).send({
      status: "error",
      message: "Email already linked with diffrent account.",
    });
  } else {
    console.log(password);

    password = bcrypt.hashSync(password);
    let isAdmin = email.includes("@masaischool.com");
    let user = await usermodel.create({
      name,
      email,
      password,
      isAdmin,
    });
    user = user.toJSON();
    delete user.password;
    let token = genToken(user);
    user.token = token;
    return res.send({
      status: "success",
      data: user,
    });
  }
}

export { login, register, genToken };
 