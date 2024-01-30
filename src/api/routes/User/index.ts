import { Router } from "express"
import UserController from "@/api/controllers/User";
import authMiddleware from "@/api/middlewares/auth-middleware";

const router = Router();


router.get("/", authMiddleware, UserController.getUsers)




export default router