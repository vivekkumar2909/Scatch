import express from 'express';

const userRoutes = express.Router();

userRoutes.get('/', (req, res) => {
    res.send('Hey');
});

export default userRoutes;
