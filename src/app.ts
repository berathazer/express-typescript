import 'module-alias/register'
import app from './config/setup-server';

import userRouter from "@/api/routes/User"
import authRouter from "@/api/routes/Auth"
import { PORT } from './config/constants';


app.get("/api", (req, res) => {
    return res.send("Hello Typescript")
})


app.use("/api/users", userRouter)

app.use("/api/auth", authRouter)


app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}/api`)
})
