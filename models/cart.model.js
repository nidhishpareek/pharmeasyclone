const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema(
  {
    userId:{type:String,required:true},
    productId:{type:String,required:true},
    quantity:{type:Number,required:true,max:10},
    discount:{type:Number,required:true,max:30}
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
