import express from 'express';
import upload from '../utils/multer.js';
import Product from '../models/product.model.js';

const productRoutes = express.Router();

productRoutes.get('/', (req, res) => {
    res.send('product');
});

productRoutes.post(
    '/admin/createProduct',
    upload.single('image'),
    async (req, res) => {
        try {
            const { name, discount, price, bgColor, panelColor, textColor } = req.body;

            const product = await Product.create({
                name,
                discount,
                price,
                bgColor,
                panelColor,
                textColor,
                image: req.file ? req.file.buffer : null, // store image buffer
            });

            res.flash('Success', 'Product created successfully')

            res.redirect('/owner/admin/createProduct');

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server Error" });
        }
    }
);

export default productRoutes;
