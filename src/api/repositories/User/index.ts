import prisma from "@/config/prisma";


const findUserByEmail = async (email: string) => {
    return await prisma.user.findUnique({
        where: {
            email
        }
    });
}

const findUserByEmailOrUsername = async (email: string, username: string) => {
    return await prisma.user.findFirst({
        where: {
            OR: [
                { email },
                { username }
            ]
        }
    });
}


const createUser = async (username: string, email: string, password: string) => {
    return await prisma.user.create({
        data: {
            username,
            email,
            password
        }
    })
}

const getUsers = async () => {
    return await prisma.user.findMany();
};



export default {
    findUserByEmail,
    findUserByEmailOrUsername,
    createUser,
    getUsers
}





