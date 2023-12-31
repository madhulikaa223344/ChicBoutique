import express from "express";
import colors  from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";

//configure env
dotenv.config();


//database config
connectDB();

//rest object
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category",categoryRoutes);
app.use("/api/v1/products" , productRoutes);


//rest api
app.get('/',(req,res)=>{
    res.send({
        message:'Welcome to ecommerce app'
    });
});


//PORT
//const port=8080
const port= process.env.PORT||8080;


//listen app
app.listen(port,()=>{
    console.log(`listening on ${port}`.bgCyan.white);
});