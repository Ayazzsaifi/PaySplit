import express from "express";
import { authMiddleware } from "../middleware/auth.js";
import { createExpense , getExpensesByGroup , getUserBalances} from "../controllers/expense.js";

const router=express.Router()

router.post("/createExpense/:groupId",authMiddleware,createExpense)
router.get("/getExpensesByGroup/:groupId",authMiddleware,getExpensesByGroup)
router.get("/getUserBalances",authMiddleware,getUserBalances)

export {router}