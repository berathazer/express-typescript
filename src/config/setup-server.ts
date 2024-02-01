import express, { Express } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import compression from "compression";
import cors from "cors"
import { loggingMiddleware } from "@/api/middlewares/logging-middleware";
import { rateLimiter } from "@/config/rate-limit";


const app: Express = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors())
app.use(helmet())
app.use(compression())

app.use(rateLimiter)


app.use(loggingMiddleware)

export default app

