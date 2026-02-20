import express from 'express';
import registerUser, { loginUser } from '../controller/userController.js';

const userRoutes = express.Router();

userRoutes.get('/', (req, res) => {
    res.send('Hey');
});

userRoutes.post('/register/', registerUser);
userRoutes.post('/login', loginUser);

export default userRoutes;
