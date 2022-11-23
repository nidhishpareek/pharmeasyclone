const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema(
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

const Order = mongoose.model("orders", orderModel);

module.exports = {
  Order
}
