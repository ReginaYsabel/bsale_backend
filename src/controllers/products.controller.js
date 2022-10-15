import { pool } from '../database.js';

//show all products
export const getProducts = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM product');
        res.json(result);
    } catch (error) {
        return res.status(404).json({
            message: 'Something goes wrong'
        });
    }
}

//show all categories
export const getCategories = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM category');
        res.json(result);
    } catch (error) {
        return res.status(404).json({
            message: 'Something goes wrong'
        });
    }

}

//show products by category
export const getProductsbyCategory = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM product WHERE category = ?', [req.params.category]);
        if (result.length <= 0) return res.status(404).json({
            message: 'Product not found'
        });
        res.json(result)
    } catch (error) {
        return res.status(404).json({
            message: 'Something goes wrong'
        });
    }
}

//input search
export const searchProduct = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM product WHERE LOWER(name) LIKE LOWER(?)', ['%'+req.params.search+'%']);
        if (result.length <= 0) return res.status(404).json({
            message: 'Product not found'
        });
        res.json(result)
    } catch (error) {
        return res.status(404).json({
            message: 'Something goes wrong'
        });
    }
}