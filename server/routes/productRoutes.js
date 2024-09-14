const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multerStorage");
const {
  postingProduct,
  getAllProducts,
} = require("../controller/productController");

router.post("/upload", upload.single("image"), postingProduct);
router.get("/get-all-products", getAllProducts);

module.exports = router;
