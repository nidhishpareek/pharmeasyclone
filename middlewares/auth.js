const {User} = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function authMiddleware(req, res, next) {
  let token = req.headers.authorization || '';
  token = token.split(" ")[1];
  
  if (token) {
    try {
      const result = jwt.verify(token, process.env.JWT_SECRET_KEY);
      
      let user = await User.findById(result.user._id);
      req.user = user;
      
    } catch (error) {
      console.log("error in verifying token", error);
    }
  }

  next();
}

module.exports = {authMiddleware};
