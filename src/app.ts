import express, { Express } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import compression from "compression";



const app: Express = express()
const PORT = 8000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(compression())
app.use(helmet())
app.use(cookieParser())


app.use(express.urlencoded({ extended: true }))


app.get("/api", (req, res) => {
    return res.send("Hello Typescript")
})


app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}/api`)
})
