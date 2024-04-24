const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multerStorage");
const {
  postingProduct,
  getAllProducts,
} = require("../controller.js/productController");

router.post("/upload", upload.single("image"), postingProduct);
router.route("/get-all-products").get(getAllProducts);

module.exports = router;
