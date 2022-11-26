const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.ObjectId,
      ref: "user",
    },
    cartItems:[
    {
      productId:{type:mongoose.ObjectId,ref:"products"},
      quantity:{type:Number,required:true},
    }
   ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Cart = mongoose.model("cart", cartSchema);

module.exports = {
  Cart
}
