import { Router } from "express"
import userController from "../../controllers/User";

const router = Router();


router.get("/", userController.getUsers)



export default router