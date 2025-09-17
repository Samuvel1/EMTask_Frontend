const express = require("express");
const { getProduct, postProduct, deleteProduct, updateProduct}=require("../controllers/productController");
const router = express.Router();


router.get("/product",getProduct);
router.post("/product",postProduct);
router.delete("/product/:id",deleteProduct);
router.put("/product/:id",updateProduct);

module.exports = router;