import express from 'express';
import products from './routes/products.routes.js';
import cors from "cors";

//swagger
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import { options } from "./swaggeroptions.js";

const app = express();

app.use(cors());

const op = swaggerJsDoc(options);

//routes
app.use('/api', products);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(op));

app.use((req, res, next) => {
    return res.status(404).json({
        message: '404 - Not Found'
    });

})

export default app;