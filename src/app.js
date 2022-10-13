import express from 'express';
import products from './routes/products.routes.js';

const app = express();
//routes
app.use('/api', products);

app.use((req, res, next) => {
    return res.status(404).json({
        message: '404 - Not Found'
    });

})

export default app;