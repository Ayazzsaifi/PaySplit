import { signup , logIn } from "../controllers/auth.js";
import express from "express";
const router= express.Router()

router.post("/signup",signup)
router.post("/login",logIn)

export {router}