const express = require("express");
const { getAllProducts,createProduct,updateProducts,deleteProduct,getAllProductDetails, createProductReview, getProductReviews, deleteReview } = require("../controllers/productController");
const { isAuthenticatedUser,authorizeRoles } = require("../middleware/auth");


const router = express.Router();

router.route("/products").get(getAllProducts);


router.route("/admin/product/new").post(isAuthenticatedUser,authorizeRoles("admin"),createProduct);

router.route("/admin/product/:id").put(isAuthenticatedUser,authorizeRoles("admin"),updateProducts).delete(isAuthenticatedUser,authorizeRoles("admin"),deleteProduct).get(getAllProductDetails);


router.route("/product/:id").get(getAllProductDetails);

router.route("/review").put(isAuthenticatedUser, createProductReview);

router.route("/reviews").get(getProductReviews).delete(isAuthenticatedUser, deleteReview)

module.exports = router;