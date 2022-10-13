import express from 'express';
import products from './routes/products.routes.js';
import cors from "cors";
const app = express();

app.use(cors());

//routes
app.use('/api', products);

app.use((req, res, next) => {
    return res.status(404).json({
        message: '404 - Not Found'
    });

})

export default app;