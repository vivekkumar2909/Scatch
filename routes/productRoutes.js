import express from 'express';

const productRoutes = express.Router();

productRoutes.get('/', (req, res) => {
    res.send('product');
});

export default productRoutes;
