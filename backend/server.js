import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import Productroutes from "./routes/ProductRoute.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";


connectDB();//Connect Database
const app=express();
app.use(
    cors({
        origin:"http://localhost:5173",
    })
)
const port=process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send("Api is running")
})
app.use('/api/products',Productroutes)
//Error handler middleware
app.use(notFound)
app.use(errorHandler)
app.listen(port,()=>{
    console.log("Server is live")
})