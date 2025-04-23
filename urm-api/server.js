import "dotenv/config"
import express from "express";
import cors from "cors";
import { connectToMongoDb } from "./config/dbconfig.js";
import { clerkMiddleware } from "@clerk/express";
import userRouter from "./routers/userRouter.js";

// initialize express app and PORT
const app = express();
const PORT = 3000;

// middlewares
app.use(cors()); // For Cross Origin Requests
app.use(express.json()) // parse incoming requests with JSON payloads

// checks the request's cookies and headers for a session JWT and, if found, attaches the Auth object to the request object under the auth key
app.use(clerkMiddleware())

// database configuration
connectToMongoDb();

// Routers
app.use("/api/v1/users", userRouter);

// Start Server and Listen to Request
app.listen(PORT, (error) => {
    error
        ? console.log("Cannot start server !!! \n Error: "+error)
        : console.log("Server started at port:"+PORT)
})