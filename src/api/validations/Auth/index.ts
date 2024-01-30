import z from "zod"


export const LoginSchema = z.object(
    {
        email: z.string().email(),
        password: z.string().min(6).max(100)
    }
)

export const RegisterSchema = z.object(
    {
        username: z.string(),
        email: z.string().email(),
        password: z.string().min(6).max(100),
    }
)