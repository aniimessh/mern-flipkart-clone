import express from "express";
import { userSignUp } from "../controllers/userController.js";
import { loginUser } from "../controllers/userController.js";
import { productController } from "../controllers/productContoller.js";
const router = express.Router();
router.post("/signup", userSignUp);
router.post("/login", loginUser);
router.get("/products", productController);

export default router;