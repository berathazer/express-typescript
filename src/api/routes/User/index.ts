import { Router } from "express"
import userController from "@/api/controllers/User";

const router = Router();


router.get("/", userController.getUsers)



export default router