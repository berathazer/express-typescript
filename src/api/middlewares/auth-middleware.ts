import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: 'Authorization header is missing' });
    }

    try {
        const token = authHeader.split(' ')[1];
        const secretKey = process.env.JWT_SECRET_KEY;

        jwt.verify(token, secretKey!, (err, user) => {
            if (err) {
                return res.status(403).json({ error: 'Invalid token' });
            }

            req.query.user = user;
            next();
        });
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};

export default authMiddleware;
