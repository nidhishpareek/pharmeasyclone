require("dotenv").config();
const {User} = require("../server/models/user.model");
const jwt = require("jsonwebtoken");

async function authMiddleware(req, res, next) {
  let token = req.headers.authorization || '';
  token = token.split(" ")[1];
  console.log(token);
  
  if (token) {
    try {
      
      const result =await jwt.verify(token, process.env.JWT_SECRET_KEY);
      console.log(result);
      
      // let user = await User.findById(result._id);
      req.user = result;
      
    } catch (error) {
      console.log(error);
    }
  }

  next();
}

module.exports = {authMiddleware};
