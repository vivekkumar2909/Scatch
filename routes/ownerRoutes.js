import express from 'express';

const ownerRoutes = express.Router();

ownerRoutes.get('/', (req, res) => {
    res.send('owner');
    // console.log(process.env.NODE_ENV);
});


if (process.env.NODE_ENV == 'development') {
    ownerRoutes.post('/create',)
}

export default ownerRoutes;
