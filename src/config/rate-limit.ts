import { rateLimit } from "express-rate-limit";
import { RedisStore } from 'rate-limit-redis'
import RedisClient from 'ioredis'

const client = new RedisClient();


export const rateLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minutes
    limit: 5, // Limit each IP to 100 requests per `window` (here, per 1 minutes).
    standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers.

    message: "Too many requests, please wait a minute.",
    store: new RedisStore({
        //@ts-ignore
        sendCommand: (...args: string[]) => client.call(...args),
    }),
})

