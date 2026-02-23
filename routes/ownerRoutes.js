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



export default ownerRoutes;
