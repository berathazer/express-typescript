import { Request, Response } from "express"

const getUsers = (req: Request, res: Response) => {
    return res.json({users:["more users..."]})
}




export default {
    getUsers
}