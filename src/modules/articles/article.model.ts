import db from '../../config/database.js';
import type { Article } from './article.types.js';

const findAll = async (): Promise<Article[]> => {
    const [rows] = await db.query(
        'SELECT * FROM articles'
    );

    return rows as Article[];
};

const findById = async (id: number): Promise<Article | null> => {
    const [rows] = await db.query(
        'SELECT * FROM articles WHERE id = ?',
        [id]
    );

    const articles = rows as Article[];

    return articles[0] ?? null;
};

const create = async (
    title: string,
    content: string,
    author_id: number,
    banner?: string
): Promise<Article> => {
    const [result] = await db.query(
        `
        INSERT INTO articles (title, content, author_id, banner)
        VALUES (?, ?, ?, ?)
        `,
        [title, content, author_id, banner]
    );

    const insertResult = result as { insertId: number };

    const article = await findById(insertResult.insertId);

    return article as Article;
};

const update = async (
    id: number,
    title: string,
    content: string
): Promise<Article | null> => {
    await db.query(
        `
        UPDATE articles
        SET title = ?, content = ?
        WHERE id = ?
        `,
        [title, content, id]
    );

    return await findById(id);
};

const remove = async (
    id: number
): Promise<boolean> => {
    const [result] = await db.query(
        'DELETE FROM articles WHERE id = ?',
        [id]
    );

    const deleteResult = result as {
        affectedRows: number;
    };

    return deleteResult.affectedRows > 0;
};

export default {
    findAll,
    findById,
    create,
    update,
    remove
};