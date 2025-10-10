import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import testRoutes from './routes/user.routes.js';

dotenv.config();

// Kết nối MongoDB
connectDB();

// Tạo app Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/test', testRoutes);

// Chạy server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
