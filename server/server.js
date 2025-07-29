import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoutes.js';
import imageRouter from './routes/imageRoutes.js';

dotenv.config();
const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors({
  origin: ["https://imagify-frontend-u9m6.onrender.com"], // Your deployed frontend
  credentials: true
}));


await connectDB(); // ✅ Top-level await is allowed in ES Modules
app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)
app.get('/', (req, res) => res.send("API Working"));

app.listen(PORT, () => {
  console.log("Server is running at http://localhost:${PORT}");
});