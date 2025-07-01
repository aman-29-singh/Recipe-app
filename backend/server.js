import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import recipesRoutes from './routes/recipe.js';
import { connectDB } from './config/db.js';//must include extension .js
dotenv.config();
const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());//to enable communication between frontend and backend
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/recipes", recipesRoutes);

app.listen(5000,(req,res)=>{
    connectDB();
    console.log(`server started at port ${PORT}`);
})