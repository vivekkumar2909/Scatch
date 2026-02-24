import express from 'express';

const ownerRoutes = express.Router();

ownerRoutes.get('/', (req, res) => {
    res.send('owner');
});


if (process.env.NODE_ENV == 'development') {
    ownerRoutes.post('/create', (req, res) => {
        res.send('Hey');
    })
}


ownerRoutes.get('/admin', (req, res) => {
    let success = req.flash('success');
    res.render('admin', { success });
})


// / owner / admin / createProduct

ownerRoutes.get('/admin/createProduct', (req, res) => {
    let success = req.flash('success');
    res.render('createproducts', { success });
})


export default ownerRoutes;
