const Product = require("../models/product.model");
const path = require("path");
const fs = require("fs");

const postingProduct = async (req, res) => {
  try {
    //create an image model instance
    const product = new Product({
      category: req.body.category,
      caricatureType: req.body.cariType,
      workType: req.body.workType,
      paperSize: req.body.paperSize,
      price: req.body.price,
    });

    const savedProduct = await product.save();

    savedProduct.imageUrl = `http://localhost:5050/api/products/${savedProduct._id}`;

    await savedProduct.save();

    res.json(savedProduct);
    // res.json(req);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Image upload failed" });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    if (!products) {
      return res.status(404).json({ error: "No products found" });
    }

    res.send(products);
  } catch (error) {
    console.log(err);
  }
};

const getSingleImage = async (req, res) => {
  try {
    const image = await Product.findById(req.params.id);

    if (!image) {
      return res.status(404).json({ error: "image not found" });
    }

    const imagePath = path.join(__dirname, "..", "uploads", image.name);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { postingProduct, getProducts };
