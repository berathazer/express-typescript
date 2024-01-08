import app from "./config/setup-server";
import { Request, Response } from "express";
import { PORT } from "./config/constants";

//Routes
import userRouter from "./api/routes/User";

// First Route
app.get("/api", (req: Request, res: Response) => {
    return res.send("Hello Typescript")
})

// User Routes
app.use("/api/users", userRouter)



// Listen Express Server
app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}/api`)
})
