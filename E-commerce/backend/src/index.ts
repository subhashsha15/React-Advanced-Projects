import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import authRoutes from "../src/routes/auth.route"
import userRoutes from "../src/routes/user.route"

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const port: number = 8080;

app.get("/api/test", async (req: Request, res: Response) => {
    res.json({
        message: "Hello, I am Express!",
    })
})

app.use("/api/auth",authRoutes);
app.use("/api/users", userRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})