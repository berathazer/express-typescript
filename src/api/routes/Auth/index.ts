import { Router } from "express";
import authController from "@/api/controllers/Auth";
const router = Router();


router.post("/login", authController.login);

router.post("/register", authController.register);

export default router