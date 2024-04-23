const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multerStorage");
const {
  postingProduct,
  getProducts,
} = require("../controller.js/productController");

router.post("/upload", upload.single("image"), postingProduct);
router.route("/get-products").get(getProducts);

module.exports = router;
