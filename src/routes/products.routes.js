import { Router } from "express";
import { getProducts, getProductsbyCategory } from "../controllers/products.controller.js";
const router = Router();

//get all products
router.get('/products', getProducts);

//get products by category
router.get('/products/:category', getProductsbyCategory);
export default router;