import userModel from './user.model.js';
import type { User } from './user.types.js';


const getUsers = async (): Promise<User[]> => {
    return await userModel.findAll();
};


const getUserById = async (
    id: number
): Promise<User | null> => {
    return await userModel.findById(id);
};


const createUser = async (
    name: string,
    email: string,
    password: string
): Promise<User> => {
    return await userModel.create(
        name,
        email,
        password
    );
};


export default {
    getUsers,
    getUserById,
    createUser
};