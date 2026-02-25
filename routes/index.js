import express, { Router } from 'express'
import isLoggedIn from '../middleware/isLoggedIn.js'
import Product from '../models/product.model.js'


const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
    let error = req.flash('error');
    res.render("index", { error });
})

indexRouter.get('/shop', isLoggedIn, async (req, res) => {
    let products = await Product.find();
    res.render('shop', { products });
})





export default indexRouter;