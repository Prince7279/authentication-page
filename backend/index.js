import express from "express";
import { connectDB } from "./db/connectDB.js";
const app = express();
const PORT = process.env.PORT || 5000;
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js"


dotenv.config();


// allows us to parse incomming requests : req.body
app.use(express.json()); 

app.use(cookieParser()); // allows us to parse incoming cookies


app.use("/api/auth",authRoutes);
app.listen(PORT, () => {
    connectDB();
    console.log("Server is runing on port:",PORT)
});