import dotenv from "dotenv"
import express from "express";
import { connectDb } from "./config/db.js";
dotenv.config()
const app=express()
app.use(express.json())

connectDb()
const PORT = process.env.PORT || 3000
app.listen(PORT)
console.log("server is running ")