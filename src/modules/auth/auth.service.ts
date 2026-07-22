import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModel from '../users/user.model.js';

const login = async (
    email: string,
    password: string
): Promise<string | null> => {

    const user = await userModel.findByEmail(email);

    if (!user) {
        return null;
    }

    const passwordMatch = await bcrypt.compare(
        password,
        user.password
    );

    if (!passwordMatch) {
        return null;
    }

    const token = jwt.sign(
        {
            id: user.id,
            email: user.email
        },
        process.env.JWT_SECRET as string,
        {
            expiresIn: '1h'
        }
    );

    return token;
};

export default {
    login
};