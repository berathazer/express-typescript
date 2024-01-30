import { LoginSchema } from '@/api/validations/Auth';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';



const login = (req: Request, res: Response) => {
    try {
        const result = LoginSchema.safeParse(req.body);

        if (!result.success) {
            return res.status(StatusCodes.BAD_REQUEST).json(result.error);
        }

        const { email, password } = result.data;

        

    } catch (error: any) {
        // Handle other errors
        console.log("Auth/Login Error: ", error.message);

        return res.status(StatusCodes.BAD_REQUEST).json(error.message);
    }
};

const register = (req: Request, res: Response) => {

};


export default {
    login, register
}