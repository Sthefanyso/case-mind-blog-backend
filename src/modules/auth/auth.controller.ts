import type { Request, Response } from 'express';
import authService from './auth.service.js';

const login = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { email, password } = req.body;

    const token = await authService.login(
        email,
        password
    );

    if (!token) {
        res.status(401).json({
            message: 'Invalid email or password'
        });

        return;
    }

    res.json({
        token
    });
};

export default {
    login
};