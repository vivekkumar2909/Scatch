import express, { Router } from 'express'
import isLoggedIn from '../middleware/isLoggedIn.js'


const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
    let error = req.flash('error');
    res.render("index", { error });
})

indexRouter.get('/shop', isLoggedIn, (req, res) => {
    res.render('shop');
})



export default indexRouter;