import cookieParser from 'cookie-parser';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import connectDB from './config/mongoose-connection.js';
import userRoutes from './routes/userRoutes.js'; // ✅ Added
import ownerRoutes from './routes/ownerRoutes.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const app = express();

connectDB();

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(path.join(dirname, 'public')));

// ✅ Fixed Typo
app.use('/user', userRoutes);
app.use('/product', productRoutes);
app.use('/owner', ownerRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
