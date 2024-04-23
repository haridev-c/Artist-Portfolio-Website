const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  category: String,
  caricatureType: String,
  workType: String,
  paperSize: String,
  price: Number,
  imageUrl: String,
});

const productModel = mongoose.model("Products", productSchema);

module.exports = productModel;
