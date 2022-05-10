const express = require("express");
const { getAllProducts,createProduct,updateProducts,deleteProduct,getAllProductDetails } = require("../controllers/productController");
const { isAuthenticatedUser,authorizeRoles } = require("../middleware/auth");


const router = express.Router();

router.route("/products").get(getAllProducts);


router.route("/product/new").post(isAuthenticatedUser,authorizeRoles("admin"),createProduct);

router.route("/product/:id").put(isAuthenticatedUser,authorizeRoles("admin"),updateProducts).delete(isAuthenticatedUser,authorizeRoles("admin"),deleteProduct).get(getAllProductDetails);


module.exports = router;