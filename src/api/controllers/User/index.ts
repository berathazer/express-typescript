import { Request, Response } from "express"
import UserRepository from "@/api/repositories/User";

const getUsers = async (req: Request, res: Response) => {
    const users = await UserRepository.getUsers();
    return res.json({ users, currentUser: req.query.user })
}


export default {
    getUsers
}