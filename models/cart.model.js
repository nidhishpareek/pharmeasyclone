const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema(
  {
    userId:{type:String,required:true},
    cartItems:[
    {
      productId:{type:String,required:true},
      quantity:{type:Number,required:true},
      discount:{type:Number,required:true},
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
