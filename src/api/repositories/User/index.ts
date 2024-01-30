import prisma from "@/config/prisma";


const getUsers = async () => {
    return await prisma.user.findMany();
};

export default {
    getUsers
}
