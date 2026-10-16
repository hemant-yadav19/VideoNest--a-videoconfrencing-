import express from "express";
import  dotenv  from "dotenv";
dotenv.config();
import {createServer} from "node:http";
import { connectToSocket } from "./src/controllers/connectSocket.js";
import userRoutes from "./src/routes/user_routes.js";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
const server = createServer(app);
const  io = connectToSocket(server);
// mongoose.connect(());

const uri = process.env.MONGO_URL;
// app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb",extended:true}));
app.use(userRoutes);
server.listen(8000,()=>{
    mongoose.connect(uri);
    console.log("Listening on port 8000");
    console.log("connected to DB");
});

app.get("/home" , async(req,res)=>{
    res.send("welcome home");
});