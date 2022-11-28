const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    gender: { type: String, enum: ["Male", "Female", "Others"] },
    email: { type: String },
    password: { type: String },
    phoneOtp: String,
    isVarified: {type:Boolean},
    username: String,
    image: String,
    authType: {
      type: String,
      enum: ["github", "email-password"],
      default: "email-password",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
userSchema.pre("save", function (next) { 
  if (!this.isModified("password")) return next();
  let hash = bcrypt.hashSync(this.password, 8);
  this.password = hash;
  return next();
});

userSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};
const User = mongoose.model("user", userSchema);

module.exports = {
  User,
};
