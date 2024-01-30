import { Router } from "express"
import UserController from "@/api/controllers/User";

const router = Router();


router.get("/", UserController.getUsers)




export default router