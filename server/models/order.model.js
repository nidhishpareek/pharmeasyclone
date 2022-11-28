const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema(
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

const Order = mongoose.model("orders", orderSchema);

module.exports = {
  Order
}
