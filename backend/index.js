import dotenv from "dotenv"
import express from "express";
import { connectDb } from "./config/db.js";
import { router as  groupRouter } from "./routes/group.js";
import { router as  authRouter } from "./routes/auth.js";
import { router as  expenseRouter } from "./routes/expense.js";
dotenv.config()
const app=express()
app.use(express.json())

app.use('/api/auth',authRouter)
app.use('/api/group',groupRouter)
app.use('/api/expense',expenseRouter)

connectDb()
const PORT = process.env.PORT || 3000
app.listen(PORT)
console.log("server is running ")