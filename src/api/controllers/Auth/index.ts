import authService from '@/api/services/Auth';

import { LoginSchema, RegisterSchema } from '@/api/validations/Auth';

import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const login = async (req: Request, res: Response) => {
    try {
        const result = LoginSchema.safeParse(req.body);

        if (!result.success) {
            return res.status(StatusCodes.BAD_REQUEST).json(result.error);
        }

        const { email, password } = result.data;


        const token = await authService.loginHandler(email, password)

        return res.status(StatusCodes.OK).json({ token });

    } catch (error: any) {
        console.log("Auth/Login Error: ", error.message);
        return res.status(StatusCodes.BAD_REQUEST).json(error.message);
    }
}

const register = async (req: Request, res: Response) => {
    try {
        const result = RegisterSchema.safeParse(req.body);

        if (!result.success) {
            return res.status(StatusCodes.BAD_REQUEST).json(result.error);
        }

        const { email, password, username } = result.data;

        const user = await authService.registerHandler(username, email, password)

        return res.status(StatusCodes.OK).json({ user });

    } catch (error: any) {
        console.log("Auth/Register Error: ", error.message);

        return res.status(StatusCodes.BAD_REQUEST).json(error.message);
    }
}


export default {
    login, register
}




