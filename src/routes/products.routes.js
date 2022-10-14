import { Router } from "express";
import { getCategories, getProducts, getProductsbyCategory } from "../controllers/products.controller.js";
const router = Router();

//get all products
router.get('/products', getProducts);

//get all categories
router.get('/categories', getCategories);

//get products by category
router.get('/products/:category', getProductsbyCategory);

export default router;