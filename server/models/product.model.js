const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  category: String,
  customWorks: String,
  workType: String,
  paperSize: String,
  price: Number,
  fileName: String,
  imageUrl: String,
});

const productModel = mongoose.model("Products", productSchema);

module.exports = productModel;
