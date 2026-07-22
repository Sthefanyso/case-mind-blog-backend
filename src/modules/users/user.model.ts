import db from '../../config/database.js';
import type { User } from './user.types.js';


const findAll = async (): Promise<User[]> => {
    const [rows] = await db.query(
        'SELECT id, name, email FROM users'
    );

    return rows as User[];
};


const findById = async (
    id: number
): Promise<User | null> => {

    const [rows] = await db.query(
        'SELECT id, name, email FROM users WHERE id = ?',
        [id]
    );

    const users = rows as User[];

    return users[0] ?? null;
};


const create = async (
    name: string,
    email: string,
    password: string
): Promise<User> => {

    const [result] = await db.query(
        `
        INSERT INTO users (name, email, password)
        VALUES (?, ?, ?)
        `,
        [
            name,
            email,
            password
        ]
    );


    const insertResult = result as {
        insertId: number;
    };


    const user = await findById(
        insertResult.insertId
    );


    return user as User;
};


export default {
    findAll,
    findById,
    create
};