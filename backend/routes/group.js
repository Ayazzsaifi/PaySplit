import express from "express";
import { authMiddleware } from "../middleware/auth";
import { createGroup } from "../controllers/group";

const router=express.Router()

router.post("/createGroup",authMiddleware,createGroup)

export {router}