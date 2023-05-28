import express from "express";
import { userSignUp } from "../controllers/userController.js";
import { loginUser } from "../controllers/userController.js";
const router = express.Router();
router.post("/signup", userSignUp);
router.post("/login", loginUser);

export default router;