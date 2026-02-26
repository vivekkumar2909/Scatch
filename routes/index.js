import express, { Router } from 'express'
import isLoggedIn from '../middleware/isLoggedIn.js'
import Product from '../models/product.model.js'
import User from '../models/user.model.js';


const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
    let error = req.flash('error');
    res.render("index", { error });
})

indexRouter.get('/shop', isLoggedIn, async (req, res) => {
    let products = await Product.find();
    let success = req.flash('success');
    res.render('shop', { products, success });
})

indexRouter.get('/addtocart/:productId', isLoggedIn, async (req, res) => {
    try {
        let user = await User.findOne({ email: req.user.email });

        user.cart.push(req.params.productId);

        await user.save();// ✅ Save changes

        res.flash('Success', 'Product added to the cart');

        res.redirect('/shop',);  // or res.json({ success: true })

    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
});

indexRouter.get('/cart', isLoggedIn, async (req, res) => {

    let user = await User.findOne({ email: req.user.email }).populate('cart');

    res.render('cart', { user });
})





export default indexRouter;