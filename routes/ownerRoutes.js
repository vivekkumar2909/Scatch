import express from 'express';

const ownerRoutes = express.Router();

ownerRoutes.get('/', (req, res) => {
    res.send('owner');
    // console.log(process.env.NODE_ENV);
});


export default ownerRoutes;
