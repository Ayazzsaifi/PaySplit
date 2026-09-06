import express from "express";
import { authMiddleware } from "../middleware/auth.js";
import { createOrder } from "../controllers/order.js";
const router=express.Router()


router.post( "/createOrder",authMiddleware,createOrder)

export{router}