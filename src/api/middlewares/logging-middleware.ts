import { Request, Response, NextFunction } from 'express';
import logger from '@/config/logger';

export const loggingMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const start = new Date();

    logger.info({
        message: 'Incoming request',
        method: req.method,
        url: req.originalUrl,
        ip: req.ip,
        userAgent: req.get('User-Agent'),
        timestamp: start.toISOString(),
    });

    res.on('finish', () => {
        const end = new Date();
        const duration = end.getTime() - start.getTime();

        logger.info({
            message: 'Request completed',
            method: req.method,
            url: req.originalUrl,
            ip: req.ip,
            userAgent: req.get('User-Agent'),
            status: res.statusCode,
            duration: `${duration} ms`,
            timestamp: end.toISOString(),
        });
    });

    res.on('close', () => {
        const end = new Date();
        const duration = end.getTime() - start.getTime();

        logger.error({
            message: 'Request aborted or closed unexpectedly',
            method: req.method,
            url: req.originalUrl,
            ip: req.ip,
            userAgent: req.get('User-Agent'),
            status: res.statusCode,
            duration: `${duration} ms`,
            timestamp: end.toISOString(),
        });
    });

    next();
};
