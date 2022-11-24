const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    title: { type: String, required: true },
    img1: { type: String },
    img2: { type: String },
    img3: { type: String },
    actual_price: { type: Number, required: true },
    crossed_price: { type: Number, required: true },
    manufacturer: { type: String, required: true },
    country: { type: String, required: true },
    category: { type: String, required: true },
    sub_category: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const Product = mongoose.model("products", productSchema);

module.exports = {
  Product,
};
