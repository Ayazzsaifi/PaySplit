import express from "express";
import { authMiddleware } from "../middleware/auth";
import { createExpense } from "../controllers/expense";

const router=express.Router()

router.post("/createExpense",authMiddleware,createExpense)

export {router}