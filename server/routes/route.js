import express from "express";
import { userSignUp } from "../controllers/userController.js";
import { loginUser } from "../controllers/userController.js";
import { getProductById, getProducts } from "../controllers/productContoller.js";
const router = express.Router();
router.post("/signup", userSignUp);
router.post("/login", loginUser);
router.get("/products", getProducts);
router.get("/product/:id", getProductById);

export default router;