import { Router } from "express";
import { getCategories, getProducts, getProductsbyCategory, searchProduct} from "../controllers/products.controller.js";
const router = Router();

//get all products
router.get('/products', getProducts);

//get all categories
router.get('/categories', getCategories);

//get products by category
router.get('/category/:category', getProductsbyCategory);

//get product
router.get('/search/:search', searchProduct);

export default router;