import express from 'express';
import userController from '../controller/userController.js';

const userRoutes = express.Router();

userRoutes.get('/', (req, res) => {
    res.send('Hey');
});

userRoutes.post('/register', userController);

export default userRoutes;
