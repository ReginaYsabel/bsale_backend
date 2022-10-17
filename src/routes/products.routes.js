import { Router } from "express";
import { getCategories, getProducts, getProductsbyCategory, searchProduct } from "../controllers/products.controller.js";
const router = Router();

/**
 * @swagger
 * /api/products:
 *  get:
 *    summary: Retorna una lista de productos
 *    responses:
 *      200:
 *        description: Lista de productos
 */
router.get('/products', getProducts);

/**
 * @swagger
 * /api/categories:
 *  get:
 *    summary: Retorna una lista de categorias
 *    responses:
 *      200:
 *        description: Lista de categorias
 */
router.get('/categories', getCategories);

/**
 * @swagger
 * /api/category/{category}:
 *  get:
 *    summary: Retorna una lista de productos por categoria
 *    parameters:
 *      - in: path
 *        name: category
 *        required: true
 *        schema:
 *          type: integer
 *        description: ID de la categoria
 *    responses:
 *      200:
 *        description: Lista de productos por categoria
 *      404:
 *        description: Producto no encontrado
 */
router.get('/category/:category', getProductsbyCategory);

/**
 * @swagger
 * /api/search/{search}:
 *  get:
 *    summary: Retorna una lista de productos por nombre
 *    parameters:
 *      - in: path
 *        name: search
 *        required: true
 *        schema:
 *          type: string
 *        description: Nombre del producto
 *    responses:
 *      200:
 *        description: Lista de productos por nombre
 *      404:
 *        description: Producto no encontrado
 */
router.get('/search/:search', searchProduct);

export default router;