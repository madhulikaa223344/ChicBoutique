import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authmiddleware.js";
import { allcategoryController, createCategoryController, deleteCategoryController, singleCategoryController, updateCategoryController } from "../controllers/categoryController.js";


const router = express.Router();


// route for create category
router.post("/create-category", requireSignIn,isAdmin, createCategoryController)

// route for Update Category
router.put("/update-category/:id", requireSignIn,isAdmin, updateCategoryController)


//route for all categories
router.get("/categories", allcategoryController)

//route for single category
router.get("/single-category/:slug", singleCategoryController)


//router for delete category
router.delete("/delete-category/:id", requireSignIn,isAdmin, deleteCategoryController)

export default router;

