import { signup , logIn } from "../controllers/auth";
import express from "express";
const router= express.Router()

router.post("/signup",signup)
router.post("/login",logIn)

export {router}