import { Router } from "express";
import AuthController from "@/api/controllers/Auth";
const router = Router();

router.post("/login", AuthController.login);

router.post("/register", AuthController.register);

export default router