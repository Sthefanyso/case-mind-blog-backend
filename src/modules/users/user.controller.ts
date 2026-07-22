import type { Request, Response } from 'express';
import userService from './user.service.js';


const getUsers = async (
    _req: Request,
    res: Response
): Promise<void> => {

    const users = await userService.getUsers();

    res.json(users);
};


const getUserById = async (
    req: Request,
    res: Response
): Promise<void> => {

    const id = Number(req.params.id);

    const user = await userService.getUserById(id);

    if (!user) {
        res.status(404).json({
            message: 'User not found'
        });

        return;
    }

    res.json(user);
};


const createUser = async (
    req: Request,
    res: Response
): Promise<void> => {

    const { name, email, password } = req.body;

    const user = await userService.createUser(
        name,
        email,
        password
    );

    res.status(201).json(user);
};


export default {
    getUsers,
    getUserById,
    createUser
};