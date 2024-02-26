// import modules
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();


// app
const app = express();

// db connection
mongoose.connect(process.env.MONGODB_URI,{
  useNewUrlParser: true,
  useUniFiedTopology: true,
})
.then(()=> console.log("DB Connected")).catch(err => console.log('DB Connection error',err));

// middleware
app.use(morgan("dev"));
app.use(cors({ origin:true, credentials: true }));

// routes
// Define your routes here using app.get(), app.post(), etc.

// port
const port = process.env.PORT || 8080;

// listener
const server = app.listen(port, () => console.log(`Server is running on port ${port}`));
