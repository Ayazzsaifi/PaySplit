import express from "express";
import { authMiddleware } from "../middleware/auth.js";
import { createGroup , getGroup, getGroupById,deleteGroup} from "../controllers/group.js";

const router=express.Router()

router.post("/createGroup",authMiddleware,createGroup)
router.get("/getGroups",authMiddleware,getGroup)
router.get("/getGroups/:groupId",authMiddleware,getGroupById)
router.delete("/deleteGroup/:groupID",authMiddleware,deleteGroup)


export {router}