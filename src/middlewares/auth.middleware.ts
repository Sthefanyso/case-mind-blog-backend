import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        res.status(401).json({
            message: 'Token not provided'
        });

        return;
    }

    const token = authHeader.split(' ')[1];

    try {
        jwt.verify(
            token,
            process.env.JWT_SECRET as string
        );

        next();

    } catch {
        res.status(401).json({
            message: 'Invalid token'
        });
    }

};

export default authMiddleware;