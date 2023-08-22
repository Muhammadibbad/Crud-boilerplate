import express from "express";
const router=express.Router()
import {addUser,getUser,loadUser} from "../controller/user-controller.js";


router.post("/add",addUser)
router.get("/all",getUser)
router.get("/:id",loadUser)




export default router;