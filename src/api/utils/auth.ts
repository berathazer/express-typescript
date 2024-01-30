import { User } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";


export const encryptPassword = async (password: string): Promise<string> => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}

export const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
}


export const generateJwtToken = (user: User): string => {
    const tokenValue = {
        id: user.id,
        email: user.email,
        role: user.role,
        username: user.username
    }

    return jwt.sign(tokenValue, process.env.JWT_SECRET_KEY as string, { expiresIn: "1m" })
}