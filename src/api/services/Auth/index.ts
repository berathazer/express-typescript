import authRepository from "@/api/repositories/Auth"
import { comparePassword, encryptPassword, generateJwtToken } from "@/api/utils/auth";


const loginHandler = async (email: string, password: string) => {
    try {
        const user = await authRepository.findUserByEmail(email);

        if (!user) {
            throw new Error("User not found");
        }

        const isAuthenticated = await comparePassword(password, user.password);

        if (!isAuthenticated) {
            throw new Error("Invalid password");
        }

        const token = generateJwtToken(user);
        return token;
    } catch (error) {
        throw error;
    }
}


const registerHandler = async (username: string, email: string, password: string) => {
    try {

        const user = await authRepository.findUserByEmailOrUsername(email, username);

        if (user) {
            throw new Error("User already exists");
        }

        const hashedPassword = await encryptPassword(password);

        return await authRepository.createUser(username, email, hashedPassword)
    } catch (error) {
        throw error
    }
}

export default {
    loginHandler,
    registerHandler
}


