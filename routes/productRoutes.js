import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authmiddleware.js";
import { brainTreePaymentController, braintreeTokenController, createProductController, deleteProductController, getProductsController, getSingleProductController, productCategoryController, productCountController, productFiltersController, productListController, productPhotoController, relatedProductController, searchProductController, updateProductController } from "../controllers/productController.js";
import formidable from "express-formidable";


const router = express.Router();

//routes for create product
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

//route for get products
router.get("/get-products",getProductsController);

//router for a single product
router.get("/get-product/:slug",getSingleProductController)

//get photo
router.get("/product-photo/:pid", productPhotoController);


//router for delete product
router.delete("/delete-product/:pid", deleteProductController);

//router for update product
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);


//filter products
router.post("/product-filters",productFiltersController);

//product count
router.get("/product-count",productCountController);

//product per page
router.get("/product-list/:page", productListController)

//search product
router.get("/search/:keyword", searchProductController);


//similar Products
router.get("/related-product/:pid/:cid",relatedProductController);

//category wise product
router.get("/product-category/:slug",productCategoryController);

//payments routes
//token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

export default router;