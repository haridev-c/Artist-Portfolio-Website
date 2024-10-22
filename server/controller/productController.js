const Product = require("../models/product.model");
// const path = require("path");
// const fs = require("fs");

const postingProduct = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Image is required" });
    }

    //create an image model instance
    const product = new Product({
      category: req.body.category,
      customWorks: req.body.customWorks,
      workType: req.body.workType,
      paperSize: req.body.paperSize,
      price: req.body.price,
      fileName: req.file.filename,
    });

    const savedProduct = await product.save();

    savedProduct.imageUrl = `http://localhost:5050/uploads/${req.file.filename}`;

    await savedProduct.save();

    res.status(201).json(savedProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Image upload failed" });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    if (!products) {
      return res.status(404).json({ error: "No products found" });
    }

    res.send(products);
  } catch (error) {
    console.log(error);
  }
};

// const getSingleImage = async (req, res) => {
//   try {
//     const image = await Product.findById(req.params.id);

//     if (!image) {
//       return res.status(404).json({ error: "image not found" });
//     }

//     const imagePath = path.join(__dirname, "..", "uploads", image.name);
//   } catch (error) {
//     console.log(error);
//   }
// };

const getProducts = async (req, res) => {
  console.log("Started getProducts()");
  try {
    const { category } = req.params;
    const transformedCategory = category.replace("-", " ");
    const products = await Product.find({ category: transformedCategory });
    if (!products) return res.status(404).json({ error: "No products found" });
    return res.status(200).json({ products });
  } catch (error) {
    console.log("Error in getProducts() in productController.js: ");
    console.error(error);
  }
};

module.exports = { postingProduct, getAllProducts, getProducts };
